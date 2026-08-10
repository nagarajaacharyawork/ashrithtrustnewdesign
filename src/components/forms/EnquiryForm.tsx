import { CheckCircle2, Loader2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { z } from "zod";

import { ActionButton } from "@/components/site/Action";
import { institutions, programmes, qualifications } from "@/data/site";
import { deliverEnquiry, type EnquiryPayload } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

const baseSchema = {
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100, { message: "Name must be under 100 characters" }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be under 20 characters" })
    .regex(/^[0-9+\-()\s]+$/, { message: "Phone number may only contain digits and + - ( )" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  city: z.string().trim().max(80, { message: "City must be under 80 characters" }).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be under 1000 characters" })
    .optional()
    .or(z.literal("")),
};

const admissionSchema = z.object({
  ...baseSchema,
  programme: z.string().trim().min(1, { message: "Please select a programme" }),
  institution: z.string().trim().min(1, { message: "Please select an institution" }),
  qualification: z.string().trim().min(1, { message: "Please select your qualification" }),
});

const contactSchema = z.object({
  ...baseSchema,
  subject: z.string().trim().min(2, { message: "Please enter a subject" }).max(120),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a little more (at least 10 characters)" })
    .max(1000, { message: "Message must be under 1000 characters" }),
});

type Errors = Record<string, string>;

const fieldBase =
  "w-full border bg-white px-4 py-3 text-[0.95rem] text-ink transition-colors placeholder:text-ink-soft/60 focus:border-azure focus:outline-none";

function Field({
  label,
  htmlFor,
  error,
  children,
  required,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  children: React.ReactNode;
  required?: boolean | undefined;
  className?: string | undefined;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-display text-[0.7rem] font-bold tracking-[0.14em] text-ink-soft uppercase"
      >
        {label}
        {required ? <span className="ml-1 text-saffron">*</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function EnquiryForm({
  variant = "admission",
  defaultProgramme,
  title,
  intro,
  className,
}: {
  variant?: "admission" | "contact";
  defaultProgramme?: string;
  title?: string;
  intro?: string;
  className?: string;
}) {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const isAdmission = variant === "admission";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const schema = isAdmission ? admissionSchema : contactSchema;
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      setStatus("idle");
      const firstKey = Object.keys(next)[0];
      if (firstKey) form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("loading");
    try {
      const payload: EnquiryPayload = {
        source: isAdmission ? "admissions" : "contact",
        submittedAt: new Date().toISOString(),
        ...parsed.data,
      } as EnquiryPayload;
      await deliverEnquiry(payload);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("border border-hairline bg-white p-8 text-center md:p-12", className)}>
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mist text-navy">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-xl font-extrabold text-ink md:text-2xl">
          {isAdmission ? "Enquiry received" : "Message received"}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Thank you for contacting Ashrith Group of Institutions. Our{" "}
          {isAdmission ? "admissions" : "office"} team will get in touch with you using the contact details you
          provided.
        </p>
        <ActionButton variant="outline" className="mt-7" onClick={() => setStatus("idle")}>
          Submit another {isAdmission ? "enquiry" : "message"}
        </ActionButton>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className={cn("border border-hairline bg-white p-6 md:p-8 lg:p-10", className)}
    >
      {title ? <h3 className="font-display text-xl font-extrabold text-ink md:text-2xl">{title}</h3> : null}
      {intro ? <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">{intro}</p> : null}

      <div className={cn("grid gap-5 sm:grid-cols-2", (title || intro) && "mt-7")}>
        <Field label="Full Name" htmlFor={`${uid}-name`} error={errors["fullName"]} required>
          <input
            id={`${uid}-name`}
            name="fullName"
            type="text"
            autoComplete="name"
            maxLength={100}
            aria-invalid={!!errors["fullName"]}
            className={cn(fieldBase, errors["fullName"] ? "border-destructive" : "border-hairline")}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Phone Number" htmlFor={`${uid}-phone`} error={errors["phone"]} required>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={20}
            aria-invalid={!!errors["phone"]}
            className={cn(fieldBase, errors["phone"] ? "border-destructive" : "border-hairline")}
            placeholder="+91 00000 00000"
          />
        </Field>

        <Field label="Email" htmlFor={`${uid}-email`} error={errors["email"]} required className="sm:col-span-2">
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            aria-invalid={!!errors["email"]}
            className={cn(fieldBase, errors["email"] ? "border-destructive" : "border-hairline")}
            placeholder="you@example.com"
          />
        </Field>

        {isAdmission ? (
          <>
            <Field label="Programme" htmlFor={`${uid}-programme`} error={errors["programme"]} required>
              <select
                id={`${uid}-programme`}
                name="programme"
                defaultValue={defaultProgramme ?? ""}
                aria-invalid={!!errors["programme"]}
                className={cn(fieldBase, errors["programme"] ? "border-destructive" : "border-hairline")}
              >
                <option value="">Select a programme</option>
                {programmes.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Institution" htmlFor={`${uid}-institution`} error={errors["institution"]} required>
              <select
                id={`${uid}-institution`}
                name="institution"
                defaultValue=""
                aria-invalid={!!errors["institution"]}
                className={cn(fieldBase, errors["institution"] ? "border-destructive" : "border-hairline")}
              >
                <option value="">Select an institution</option>
                {institutions.map((i) => (
                  <option key={i.slug} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Qualification" htmlFor={`${uid}-qual`} error={errors["qualification"]} required>
              <select
                id={`${uid}-qual`}
                name="qualification"
                defaultValue=""
                aria-invalid={!!errors["qualification"]}
                className={cn(fieldBase, errors["qualification"] ? "border-destructive" : "border-hairline")}
              >
                <option value="">Select your qualification</option>
                {qualifications.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="City" htmlFor={`${uid}-city`} error={errors["city"]}>
              <input
                id={`${uid}-city`}
                name="city"
                type="text"
                autoComplete="address-level2"
                maxLength={80}
                className={cn(fieldBase, errors["city"] ? "border-destructive" : "border-hairline")}
                placeholder="Your city or town"
              />
            </Field>
          </>
        ) : (
          <Field label="Subject" htmlFor={`${uid}-subject`} error={errors["subject"]} required className="sm:col-span-2">
            <input
              id={`${uid}-subject`}
              name="subject"
              type="text"
              maxLength={120}
              aria-invalid={!!errors["subject"]}
              className={cn(fieldBase, errors["subject"] ? "border-destructive" : "border-hairline")}
              placeholder="What is your enquiry about?"
            />
          </Field>
        )}

        <Field
          label="Message"
          htmlFor={`${uid}-message`}
          error={errors["message"]}
          required={!isAdmission}
          className="sm:col-span-2"
        >
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={5}
            maxLength={1000}
            aria-invalid={!!errors["message"]}
            className={cn(fieldBase, "resize-y", errors["message"] ? "border-destructive" : "border-hairline")}
            placeholder={isAdmission ? "Anything you would like the admissions team to know" : "How can we help you?"}
          />
        </Field>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          Something went wrong while submitting. Please try again, or call the admissions office directly.
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ActionButton type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : isAdmission ? (
            "Submit Enquiry"
          ) : (
            "Send Message"
          )}
        </ActionButton>
        <p className="text-xs leading-relaxed text-ink-soft sm:max-w-xs">
          Fields marked <span className="text-saffron">*</span> are required. Your details are used only to respond to
          this enquiry.
        </p>
      </div>
    </form>
  );
}

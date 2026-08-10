import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { institutions, mainNav, org } from "@/data/site";

const admissionsLinks = [
  { label: "Apply Now", to: "/admissions" },
  { label: "Admission Process", to: "/admissions" },
  { label: "Programme Enquiry", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div aria-hidden="true" className="dot-field-light absolute inset-0 opacity-30" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 font-display text-[13rem] leading-none font-extrabold tracking-tight text-white/[0.04] uppercase select-none lg:block"
      >
        Ashrith
      </span>
      <div className="shell relative grid gap-12 py-14 md:py-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <span aria-hidden="true" className="mt-6 block h-px w-14 bg-saffron" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{org.description}</p>

          <p className="mt-5 font-display text-[0.7rem] font-bold tracking-[0.18em] text-saffron-bright uppercase">
            {org.trust} · {org.tagline}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {org.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 border border-white/20 px-3 py-1.5 text-xs text-white/75 transition-colors hover:border-saffron hover:text-white"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav
          className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3"
          aria-label="Footer"
        >
          <div>
            <h2 className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-white/50 uppercase">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/75 transition-colors hover:text-saffron-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-white/50 uppercase">
              Institutions
            </h2>
            <ul className="mt-4 space-y-2.5">
              {institutions.map((i) => (
                <li key={i.slug}>
                  <Link
                    to={i.to}
                    className="text-sm leading-snug text-white/75 transition-colors hover:text-saffron-bright"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-display text-[0.7rem] font-bold tracking-[0.18em] text-white/50 uppercase">
              Admissions
            </h2>
            <ul className="mt-4 space-y-2.5">
              {admissionsLinks.map((a) => (
                <li key={a.label}>
                  <Link
                    to={a.to}
                    className="text-sm text-white/75 transition-colors hover:text-saffron-bright"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-white/50 uppercase">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                <span>
                  {org.address.line1}
                  <br />
                  {org.address.line2}
                </span>
              </li>
              {org.phones.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-saffron-bright"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                <a
                  href={`mailto:${org.email}`}
                  className="break-all transition-colors hover:text-saffron-bright"
                >
                  {org.email}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-white/50 uppercase">
            Location
          </h2>
          <div className="mt-4 overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border border-white/15">
            <iframe
              title="Ashrith Group of Institutions campus location map"
              src={org.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-52 w-full border-0 grayscale-[25%]"
            />
          </div>
          <a
            href={org.mapLink}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex items-center gap-1 text-sm text-saffron-bright transition-colors hover:text-white"
          >
            Open in Google Maps
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {org.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

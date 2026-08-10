/**
 * Enquiry submission — single integration point.
 *
 * No backend is connected yet. Submissions are validated, normalised and
 * handed to `deliverEnquiry`, which currently stores them locally and logs
 * them. To connect a real backend (Lovable Cloud, an email service, a CRM),
 * replace ONLY the body of `deliverEnquiry` — every form on the site routes
 * through it.
 */

export type EnquiryPayload = {
  source: "admissions" | "contact" | "programme";
  fullName: string;
  phone: string;
  email: string;
  programme?: string;
  institution?: string;
  qualification?: string;
  city?: string;
  subject?: string;
  message?: string;
  submittedAt: string;
};

const STORAGE_KEY = "ashrith:enquiries";

/** Configure this once a backend or form service is available. */
export const ENQUIRY_ENDPOINT: string | null = null;

export async function deliverEnquiry(payload: EnquiryPayload): Promise<void> {
  if (ENQUIRY_ENDPOINT) {
    const res = await fetch(ENQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Enquiry submission failed (${res.status})`);
    return;
  }

  // Fallback: keep the submission on the device so nothing is lost before
  // the backend is connected.
  await new Promise((r) => setTimeout(r, 700));
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as EnquiryPayload[];
    existing.push(payload);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(-50)));
  } catch {
    /* storage unavailable — ignore */
  }
  if (import.meta.env.DEV) console.info("[Ashrith] Enquiry captured:", payload);
}

export function readStoredEnquiries(): EnquiryPayload[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as EnquiryPayload[];
  } catch {
    return [];
  }
}

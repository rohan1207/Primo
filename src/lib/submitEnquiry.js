const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

/**
 * Posts enquiry data to Google Apps Script.
 * Uses text/plain so the browser skips a CORS preflight.
 */
export async function submitEnquiry({
  source,
  name,
  phone,
  email,
  message = "",
  subject = "",
}) {
  if (!SCRIPT_URL) {
    throw new Error("Form endpoint is not configured.");
  }

  const payload = {
    source,
    name,
    phone,
    email,
    message,
    subject,
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
  };

  await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
}

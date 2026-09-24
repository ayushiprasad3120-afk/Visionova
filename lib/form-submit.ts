/**
 * Shared submit helper for the site's forms (Advertiser, Publisher, Contact).
 *
 * By default these forms have no backend — this function posts the form data
 * to an endpoint URL you provide via an environment variable, using the plain
 * fetch + FormData pattern supported by most "no-backend" form services:
 * Formspree, Web3Forms, Getform, Basin, etc.
 *
 * Setup:
 * 1. Create a form on your chosen service and copy its endpoint URL.
 * 2. Add it to .env.local (see .env.local.example), e.g.:
 *      NEXT_PUBLIC_ADVERTISER_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
 * 3. Redeploy. NEXT_PUBLIC_ vars are baked in at build time, so a local-only
 *    change requires restarting `next dev`; a Vercel env var change requires
 *    a redeploy.
 *
 * Until an endpoint is set, submissions will show a clear inline error
 * instead of silently pretending to succeed.
 */
export async function submitForm(
  endpoint: string | undefined,
  form: HTMLFormElement,
  extra?: Record<string, string>
): Promise<void> {
  if (!endpoint) {
    throw new Error(
      "This form isn't connected yet. Add a form endpoint from a service like Formspree to your environment variables — see README.md."
    );
  }

  const formData = new FormData(form);
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      formData.append(key, value);
    }
  }

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new Error("Couldn't reach the form service. Please check your connection and try again.");
  }

  if (!res.ok) {
    throw new Error("Something went wrong submitting the form. Please try again or email us directly.");
  }
}

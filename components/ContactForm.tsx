"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams(
        Array.from(new FormData(form), ([k, v]) => [k, String(v)]),
      ).toString();
      // Post to the static form file so Netlify always picks it up (see public/__forms.html).
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`Form post failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-message" role="status">
        <h3>Thank you</h3>
        <p>Your message has been sent. We will be in touch soon.</p>
      </div>
    );
  }

  return (
    // Netlify detects this form at deploy time from the static HTML.
    <form
      name="contact"
      method="POST"
      action="/contact/thanks/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="sr-only" aria-hidden="true">
        <label>
          Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="contact-form__row">
        <label className="field">
          <span className="field__label">
            Name <span aria-hidden="true">*</span>
          </span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span className="field__label">
            Phone <span aria-hidden="true">*</span>
          </span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>
      <label className="field">
        <span className="field__label">
          Email Address <span aria-hidden="true">*</span>
        </span>
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span className="field__label">
          Message <span aria-hidden="true">*</span>
        </span>
        <textarea name="message" rows={6} required />
      </label>

      {status === "error" && (
        <p className="form-error" role="alert">
          Sorry, something went wrong. Please call us on {site.phone} or email {site.email}.
        </p>
      )}

      <p className="form-privacy">
        Please don&rsquo;t include detailed medical information. We use your details only to reply
        to you. See our{" "}
        <a href={site.privacyNotice} target="_blank" rel="noopener noreferrer">
          privacy notice
        </a>
        .
      </p>

      <div className="contact-form__actions">
        <button type="submit" className="button button--solid" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

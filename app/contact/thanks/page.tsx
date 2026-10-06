import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false },
};

export default function ThanksPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <h1>Thank you</h1>
        <p>Your message has been sent. We will be in touch soon.</p>
        <p>
          <Link href="/">Back to the home page</Link>
        </p>
      </div>
    </section>
  );
}

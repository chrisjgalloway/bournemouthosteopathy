import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";

// The home page uses this as its <h1>, matching the original site.
export default function AppointmentBanner({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section className="appointment-banner">
      <div className="container">
        <Heading>
          For appointments please call <a href={site.phoneHref}>{site.phone}</a>
        </Heading>
        <p>Reception is covered daily for advice, enquiries and appointments.</p>
        <p>A 24 hour answer phone service is activated</p>
        <div className="appointment-banner__actions">
          <a href={site.phoneHref} className="button button--light">
            <PhoneIcon size={16} /> Call {site.phone}
          </a>
          <Link href="/contact/" className="button button--outline-light">
            Send a message
          </Link>
        </div>
      </div>
    </section>
  );
}

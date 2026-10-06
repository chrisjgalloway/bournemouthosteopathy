import AppointmentBanner from "@/components/AppointmentBanner";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pages } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(pages.cranial);

export default function CranialPage() {
  return (
    <>
      <JsonLd page={pages.cranial} />
      <section className="section">
        <div className="container two-col">
          <div>
            <h1>Cranial Osteopathy</h1>
            <p>
              Cranial osteopathy is a refined and subtle approach to osteopathic treatment that uses
              very gentle though highly effective manipulative pressure to encourage the release of
              stresses throughout the body, including the head.
            </p>
            <p>
              The osteopath uses their highly trained sense of touch, to identify and correct
              mechanical disturbances and limitations, both in and around the joints in the skull
              and throughout the body.
            </p>
            <p>
              The non-invasive and gentle nature of cranial osteopathy makes it suitable for a wide
              range of conditions in people of all ages, especially babies, children and older
              people.
            </p>
          </div>
          <div>
            <h2 className="h3">Osteopathy for babies and children</h2>
            <p>
              Birth is one of the most stressful events of our life. The baby&rsquo;s head has the
              remarkable ability to absorb these stresses in a &lsquo;normal&rsquo; delivery. Some
              babies retain moulding from birth in their head and areas of stress throughout their
              body. This may lead to: feeding difficulties, sickness, crying, and sleep
              disturbances.
            </p>
            <p>
              For further information on cranial osteopathy visit The Sutherland Society at{" "}
              <a href="https://www.cranial.co.uk" target="_blank" rel="noopener noreferrer">
                www.cranial.co.uk
              </a>{" "}
              or The Sutherland Cranial College at{" "}
              <a href="https://www.scco.ac" target="_blank" rel="noopener noreferrer">
                www.scco.ac
              </a>
            </p>
            <p>
              <strong>
                <em>Alternatively please contact the Bournemouth Osteopathic &amp; Cranial Centre on</em>{" "}
                <a href={site.phoneHref}>{site.phone}</a>.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}

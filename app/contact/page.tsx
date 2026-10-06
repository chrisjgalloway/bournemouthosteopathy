import ContactForm from "@/components/ContactForm";
import { AlertIcon, PhoneIcon, PinIcon, ShieldIcon } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pages } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(pages.contact);

const { lat, lng, zoom } = site.map;
const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <JsonLd page={pages.contact} />
      <iframe
        className="map"
        src={mapSrc}
        title="Map showing the Bournemouth Osteopathic & Cranial Centre, 105 Lowther Road"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <h1>Contact Bournemouth Osteopathy</h1>
            <p>
              The clinic is conveniently located close to Bournemouth town centre and offers onsite
              parking.
            </p>
            <p>Reception is covered daily and there is a 24 hour answer service.</p>
            <p>Please contact the centre if you require any further directions or information.</p>

            <div className="info-cards">
              <div className="info-card">
                <span className="icon-badge">
                  <PinIcon size={20} />
                </span>
                <div>
                  <h2 className="h3">Address:</h2>
                  <address>
                    {site.name},
                    <br />
                    {site.address.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < site.address.length - 1 ? "," : ""}
                        <br />
                      </span>
                    ))}
                  </address>
                  <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
                    Get directions in Google Maps
                  </a>
                </div>
              </div>

              <div className="info-card">
                <span className="icon-badge">
                  <PhoneIcon size={20} />
                </span>
                <div>
                  <h2 className="h3">Appointments:</h2>
                  <p>
                    Call: <a href={site.phoneHref}>{site.phone}</a>
                    <br />
                    Email: <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                </div>
              </div>

              <div className="info-card info-card--alert">
                <span className="icon-badge">
                  <AlertIcon size={20} />
                </span>
                <div>
                  <h2 className="h3">Cancellations:</h2>
                  <p>
                    <strong>PLEASE DO NOT CANCEL BY EMAIL</strong>
                    <br />
                    Please call {site.phone} to cancel appointments.
                    <br />
                    24 hours notice is required or you will be charged.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <span className="icon-badge">
                  <ShieldIcon size={20} />
                </span>
                <div>
                  <h2 className="h3">Insurance:</h2>
                  <p>
                    We are recognised by most health insurers. Please contact them directly or
                    consult your policy documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="form-panel">
            <h2 className="h3">Send us a message</h2>
            <p>We will get back to you as soon as we can. For appointments, calling is quickest.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

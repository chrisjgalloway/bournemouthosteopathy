import AppointmentBanner from "@/components/AppointmentBanner";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, pages } from "@/lib/seo";
import { CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata = pageMetadata(pages.osteopathic);

const conditions = [
  "Back and Neck Pain",
  "Headache (cervicogenic)",
  "Posture",
  "Arthritic and Rheumatic Pain",
  "Sciatica",
  "Fibromyalgia",
  "Muscle Tension",
  "Joint Pain including Hip, Knee and Ankle",
  "Neuralgia",
  "Pregnancy",
  "Frozen Shoulder and Elbow Pain",
  "Minor Sprains and Sports Injuries",
];

export default function OsteopathicPage() {
  return (
    <>
      <JsonLd page={pages.osteopathic} />
      <section className="section">
        <div className="container two-col">
          <div>
            <h1>Osteopathy</h1>
            <p>
              Osteopathy is an established system of healthcare that diagnoses and treats imbalances
              with the structure and function of the body. The maintenance of good mechanical
              function is essential to good health. Problems in the framework of the body can
              disturb nerve and blood circulation and thus any aspect of health. Utilising gentle
              techniques osteopaths work to restore the structure and function of the body to a
              state of balance and harmony, so helping the whole person. Osteopaths put emphasis on
              prevention and rehabilitation to prevent re-occurrence and to strengthen the body
              after injury.
            </p>
          </div>
          <div>
            <p>
              On your first visit to the centre a full case history will be taken, followed by a
              physical examination. You may be asked to remove some of your outer clothing in order
              for a simple series of movements to be observed. Gowns are available for those who
              wish to use them. Patients are welcome to bring a relative or friend with them on all
              visits.
            </p>
            <p>
              Once a diagnosis has been made an agreed treatment plan will be implemented.
              Osteopathic treatments are tailored to the individuals needs and can work well in
              conjunction with conventional medicine. Treatment may include articulation, soft
              tissue techniques, gentle manipulation and/or cranial osteopathy.
            </p>
            <p>
              For further information or fact sheets relating to osteopathy refer to the General
              Osteopathic Council{" "}
              <a href="https://www.osteopathy.org.uk" target="_blank" rel="noopener noreferrer">
                www.osteopathy.org.uk
              </a>{" "}
              or alternatively contact the Bournemouth Osteopathic and Cranial Centre on{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
        </div>

        <div className="container">
          <p className="lead">
            Some of the most common reasons a patient would visit us here at the Bournemouth
            Osteopathic &amp; Cranial Centre include:
          </p>
          <ul className="conditions">
            {conditions.map((c) => (
              <li key={c}>
                <span className="icon-badge icon-badge--sm">
                  <CheckIcon size={14} />
                </span>
                <h2>{c}</h2>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}

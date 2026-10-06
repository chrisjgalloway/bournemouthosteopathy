import Image from "next/image";
import Link from "next/link";
import AppointmentBanner from "@/components/AppointmentBanner";
import HeroSlider from "@/components/HeroSlider";
import JsonLd from "@/components/JsonLd";
import { ArrowIcon, CarIcon, ClockIcon, HeartIcon, ShieldIcon } from "@/components/icons";
import { pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.home);

// Every point here comes from the original site copy.
const highlights = [
  { icon: ClockIcon, title: "20+ years", text: "Established in Bournemouth" },
  { icon: ShieldIcon, title: "GOsC registered", text: "State registered osteopath" },
  { icon: HeartIcon, title: "All ages", text: "From babies to the elderly" },
  { icon: CarIcon, title: "Onsite parking", text: "Close to the town centre" },
];

export default function Home() {
  return (
    <>
      <JsonLd page={pages.home} />
      <HeroSlider />

      <section className="highlights" aria-label="Why choose us">
        <ul className="container highlights__list">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <span className="icon-badge">
                <Icon size={20} />
              </span>
              <span>
                <strong>{title}</strong>
                {text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">About the centre</p>
          <div className="two-col">
            <p>
              The Bournemouth Osteopathic &amp; Cranial Centre offers gentle and effective
              osteopathic treatment for people of all ages, including sports people, the elderly,
              pregnant women, babies and children. It is run by Christopher Galloway who graduated
              from the College of Osteopaths and the British College of Osteopathic Medicine (BCOM)
              with a first class honors degree in osteopathy. He is a member of the General
              Osteopathic Council (GOsC), The Sutherland Society and The Sutherland Cranial
              College.
            </p>
            <p>
              Christopher is an experienced and well renowned state registered osteopath who treats
              a wide range of acute and chronic physical conditions. His approach encompasses
              structural, cranial and naturopathic osteopathy, believing good health results from a
              balance between the structural, nutritional and psychological aspects of a persons
              well-being.
            </p>
          </div>
        </div>
      </section>

      <AppointmentBanner as="h1" />

      <section className="section section--tint">
        <div className="container">
          <p className="eyebrow">Our treatments</p>
          <div className="two-col">
            <ServiceCard
              href="/osteopathic/"
              image="/images/Osteopathy-man-green.jpg"
              title="Osteopathy"
              text="Gentle, hands-on treatment that restores the structure and function of the body. Helpful for back and neck pain, sciatica, sports injuries and more."
            />
            <ServiceCard
              href="/cranial/"
              image="/images/Cranial-child-green.jpg"
              title="Cranial Osteopathy"
              text="A refined and subtle approach that releases stresses throughout the body. Especially suited to babies, children and older people."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  href,
  image,
  title,
  text,
}: {
  href: string;
  image: string;
  title: string;
  text: string;
}) {
  return (
    <Link href={href} className="service-card">
      <span className="service-card__media">
        <Image src={image} alt="" width={500} height={300} sizes="(max-width: 767px) 100vw, 50vw" />
      </span>
      <span className="service-card__body">
        <span className="service-card__title">{title}</span>
        <span className="service-card__text">{text}</span>
        <span className="service-card__more">
          Learn more <ArrowIcon size={16} />
        </span>
      </span>
    </Link>
  );
}

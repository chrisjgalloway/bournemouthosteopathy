import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-strip">
        <Image
          src="/images/footer-strip.jpg"
          alt="Babies and hands receiving gentle osteopathic treatment"
          width={1048}
          height={145}
        />
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div>
            <h2>Appointments</h2>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="footer-note">Please call to cancel. 24 hours notice is required.</p>
          </div>
          <div>
            <h2>Visit us</h2>
            <address>
              {site.name}
              <br />
              {site.address.join(", ")}
            </address>
            <p>
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>{" "}
              &middot; Onsite parking
            </p>
          </div>
          <div>
            <h2>Pages</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a href={site.privacyNotice} target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <span>
            &copy; {new Date().getFullYear()} {site.name}
          </span>
        </div>
      </div>

      {/* Mobile-only call bar, the most common action on a clinic site */}
      <a href={site.phoneHref} className="mobile-call-bar">
        Call to book: {site.phone}
      </a>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar__inner">
          <div className="top-bar__contact">
            <a href={site.phoneHref}>
              <PhoneIcon size={13} /> {site.phoneIntl}
            </a>
            <a href={`mailto:${site.email}`}>
              <MailIcon size={13} /> {site.email}
            </a>
          </div>
          <a href={site.privacyNotice} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="main-header">
        <div className="container main-header__inner">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <Image src="/images/logo.png" alt={site.name} width={540} height={116} preload />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <span className="menu-toggle__bars" aria-hidden="true" />
          </button>

          <nav id="main-nav" className={`main-nav${open ? " is-open" : ""}`} aria-label="Main">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={site.phoneHref} className="button button--solid main-nav__cta">
              <PhoneIcon size={16} /> Book: {site.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

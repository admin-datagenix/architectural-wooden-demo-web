"use client";

import { useEffect } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_MAP_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  ContactSection,
} from "../components/ContactSection";
import { LogoMark } from "../components/LogoMark";
import { SiteNavbar } from "../components/SiteNavbar";

export default function ContactPage() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site contact-page">
      <SiteNavbar />

      <ContactSection sectionClassName="contact-page-section" />

      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <LogoMark footer />

              <div>
                <strong className="logo-brand-name">
                  Sawant <span className="logo-amp">&amp;</span> Associates
                </strong>

                <small>ARCHITECTURE | INTERIORS | LANDSCAPE DESIGN</small>
              </div>
            </div>

            <p>
              We create thoughtful spaces through architecture, interiors and
              premium craftsmanship — designed around the way you live.
            </p>
          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>

            <Link href="/">
              <FaArrowRight />
              Home
            </Link>

            <Link href="/about">
              <FaArrowRight />
              About
            </Link>

            <Link href="/#services">
              <FaArrowRight />
              Services
            </Link>

            <Link href="/#projects">
              <FaArrowRight />
              Projects
            </Link>

            <Link href="/contact">
              <FaArrowRight />
              Contact
            </Link>
          </div>

          <div className="footer-column">
            <h4>SERVICES</h4>

            <Link href="/#services">
              <FaArrowRight />
              Architecture
            </Link>

            <Link href="/#services">
              <FaArrowRight />
              Interior Design
            </Link>

            <Link href="/#services">
              <FaArrowRight />
              Landscape Design
            </Link>

            <Link href="/#services">
              <FaArrowRight />
              Renovation
            </Link>
          </div>

          <div className="footer-column footer-contact">
            <h4>CONTACT</h4>

            <a href={CONTACT_PHONE_HREF}>
              <FaPhone />
              {CONTACT_PHONE_DISPLAY}
            </a>

            <a href={CONTACT_EMAIL_HREF}>
              <FaEnvelope />
              {CONTACT_EMAIL}
            </a>

            <a href={CONTACT_MAP_HREF} target="_blank" rel="noreferrer">
              <FaLocationDot />
              {CONTACT_ADDRESS}
            </a>

            <a
              className="footer-whatsapp"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-line">
            © 2026 Sawant &amp; Associates. All rights reserved DatagenixAi ·
            Architecture · Interiors · Landscape Design
          </p>
        </div>
      </footer>

      <a
        className="whatsapp"
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </main>
  );
}

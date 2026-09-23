"use client";

import { useEffect } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaAward,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaStar,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa6";

import { LogoMark } from "../components/LogoMark";
import { SiteNavbar } from "../components/SiteNavbar";

const CONTACT_PHONE_DISPLAY = "+91 98765 43210";
const CONTACT_PHONE_HREF = "tel:+919876543210";

const CONTACT_EMAIL = "hello@woodandspace.com";
const CONTACT_EMAIL_HREF = "mailto:hello@woodandspace.com";

const CONTACT_ADDRESS = "Vishrambaug, Sangli, Maharashtra";

const CONTACT_MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=Vishrambaug%2C+Sangli%2C+Maharashtra";

export default function AboutPage() {
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
    <main className="site about-page">
      <SiteNavbar />

      <section className="about-section about-page-main">
        <div className="about-image reveal">
          <div className="image-frame-line" />

          <img
            src="/about-us-house.jpg"
            alt="Architectural house transformation"
            loading="eager"
          />

          <div className="image-label">
            <span>●</span>
            Design that feels like home
          </div>
        </div>

        <div className="about-content reveal">
          <p className="eyebrow dark about-us-eyebrow">ABOUT US</p>

          <h2>
            Architecture Meets
            <br />
            <span>The Beauty of Wood.</span>
          </h2>

          <p>
            We combine contemporary architecture with the warmth of natural
            materials to create spaces that are personal, practical and
            timeless.
          </p>

          <p>
            Every project is developed from concept to completion with
            attention to detail, craftsmanship and client requirements.
          </p>

          <div className="about-mini-stats">
            <div>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>150+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Client Focus</span>
            </div>
          </div>

          <Link href="/contact" className="outline-button">
            Start Your Project
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="about-mission-vision">
        <div className="mission-vision-grid">
          <article className="mission-vision-card reveal">
            <p className="eyebrow dark about-us-eyebrow">OUR MISSION</p>

            <h3>Design with purpose</h3>

            <p>
              To craft architecture, interiors and wooden spaces that feel
              personal and enduring — balancing modern planning with natural
              materials, careful detailing and honest client collaboration
              from concept to handover.
            </p>
          </article>

          <article className="mission-vision-card reveal">
            <p className="eyebrow dark about-us-eyebrow">OUR VISION</p>

            <h3>Spaces people love to live in</h3>

            <p>
              To be a trusted design and build partner across Pune and
              Maharashtra — recognised for timeless aesthetics, quality
              woodwork and spaces that reflect how people actually live, work
              and grow.
            </p>
          </article>
        </div>
      </section>

      <section className="about-achievements">
        <div className="about-achievements-grid">
          <article className="achievement-card award-card reveal">
            <div className="achievement-image">
              <img
                src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1200&q=88"
                alt="Architecture award"
                loading="lazy"
              />

              <div className="achievement-icon">
                <FaAward />
              </div>
            </div>

            <div className="achievement-content">
              <p className="eyebrow dark">OUR ACHIEVEMENTS</p>

              <h3>
                Creating spaces
                <br />
                <span>worth remembering.</span>
              </h3>

              <p>
                Our work is driven by thoughtful planning, refined detailing
                and a commitment to creating spaces that remain meaningful
                for years to come.
              </p>

              <div className="achievement-meta">
                <FaStar />
                <span>Design Excellence · Quality · Craftsmanship</span>
              </div>
            </div>
          </article>

          <article className="achievement-card team-card reveal">
            <div className="achievement-image">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=88"
                alt="Architecture and design team"
                loading="lazy"
              />

              <div className="achievement-icon">
                <FaUsers />
              </div>
            </div>

            <div className="achievement-content">
              <p className="eyebrow dark">OUR TEAM</p>

              <h3>
                People behind
                <br />
                <span>every detail.</span>
              </h3>

              <p>
                Architects, designers and craftsmen working together to turn
                ideas into thoughtful spaces with clarity and precision.
              </p>

              <div className="achievement-meta">
                <FaUsers />
                <span>Architects · Designers · Project Team</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="about-team-section">
        <div className="about-section-heading reveal">
          <div>
            <p className="eyebrow dark">THE PEOPLE</p>

            <h2>
              Meet the
              <br />
              <span>creative team.</span>
            </h2>
          </div>

          <p>
            A collaborative team bringing architecture, interiors and
            craftsmanship together.
          </p>
        </div>

        <div className="team-members-grid">
          <article className="team-member reveal">
            <div className="team-member-image">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=88"
                alt="Principal architect"
                loading="lazy"
              />
            </div>

            <h3>Ar. Rohini Sawant</h3>
            <span>Principal Architect</span>
          </article>

          <article className="team-member reveal">
            <div className="team-member-image">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=88"
                alt="Interior designer"
                loading="lazy"
              />
            </div>

            <h3>Neha Patil</h3>
            <span>Interior Designer</span>
          </article>

          <article className="team-member reveal">
            <div className="team-member-image">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=88"
                alt="Project manager"
                loading="lazy"
              />
            </div>

            <h3>Vikram Patil</h3>
            <span>Project Manager</span>
          </article>
        </div>
      </section>

      <section className="about-clients-section">
        <div className="clients-heading reveal">
          <p className="eyebrow dark">TRUSTED BY</p>

          <h2>Our Clients</h2>

          <p>
            Temporary client logos are added below. You can replace these
            with your actual client logos later.
          </p>
        </div>

        <div className="client-logos reveal">
          <div className="client-logo">
            <strong>AURA</strong>
            <span>DEVELOPMENTS</span>
          </div>

          <div className="client-logo">
            <strong>CREST</strong>
            <span>BUILDERS</span>
          </div>

          <div className="client-logo">
            <strong>NOVA</strong>
            <span>SPACES</span>
          </div>

          <div className="client-logo">
            <strong>ELORA</strong>
            <span>LIVING</span>
          </div>

          <div className="client-logo">
            <strong>VISTRA</strong>
            <span>GROUP</span>
          </div>

          <div className="client-logo">
            <strong>ARC</strong>
            <span>PROJECTS</span>
          </div>
        </div>
      </section>

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
          <span>© 2026 Sawant &amp; Associates. All rights reserved.</span>

          <span>Architecture · Interiors · Landscape Design</span>
        </div>
      </footer>
    </main>
  );
}

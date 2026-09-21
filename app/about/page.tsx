"use client";

import { useEffect } from "react";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";

import { LogoMark } from "../components/LogoMark";

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
      <header className="navbar">
        <Link href="/" className="logo">
          <LogoMark />

          <div>
            <strong>WOOD &amp; SPACE</strong>
            <small>ARCHITECTURE | INTERIORS | WOODEN DESIGN</small>
          </div>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <Link href="/#contact" className="nav-button">
          Get a Quote
          <FaArrowRight />
        </Link>
      </header>

      <section className="about-section about-page-main">
        <div className="about-image reveal">
          <div className="image-frame-line" />

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88"
            alt="Modern wooden interior"
            loading="lazy"
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

          <Link href="/#contact" className="outline-button">
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

      <footer className="about-page-footer">
        <Link href="/">
          <FaArrowRight />
          Back to Home
        </Link>
      </footer>
    </main>
  );
}

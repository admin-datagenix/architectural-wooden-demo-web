"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaLightbulb,
  FaHammer,
  FaClockRotateLeft,
  FaUsers
} from "react-icons/fa6";

function LogoMark({ footer = false }: { footer?: boolean }) {
  const [imageError, setImageError] = useState(false);

  return (
    <span className={footer ? "footer-logo-image" : "logo-image-wrap"}>
      {!imageError ? (
        <img
          src="/wood-space-mark-transparent.png"
          alt="Wood & Space logo"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="logo-fallback">WS</span>
      )}
    </span>
  );
}

export default function About() {
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
    <main className="site">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <LogoMark />
          <div>
            <strong>WOOD &amp; SPACE</strong>
            <small>ARCHITECTURE | INTERIORS | WOODEN DESIGN</small>
          </div>
        </div>
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

      {/* HERO */}
      <section className="about-hero" style={{ padding: "140px 7% 80px", textAlign: "center", background: "#f7f3ed", color: "#171816" }}>
        <div className="reveal" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p className="eyebrow dark" style={{ animationDelay: "0.2s" }}>ABOUT WOOD & SPACE</p>
          <h1 style={{ fontFamily: '\"Playfair Display\", serif', fontSize: "clamp(40px, 5vw, 62px)", marginBottom: "20px", animationDelay: "0.4s", color: "#101412" }}>Creating Spaces With Purpose.</h1>
          <p style={{ color: "#68635d", fontSize: "17px", lineHeight: "1.8", marginBottom: "40px", animationDelay: "0.6s" }}>
            We create thoughtful architectural spaces, refined interiors and premium wooden environments that balance beauty, functionality and craftsmanship.
          </p>
          <div style={{ borderRadius: "10px", overflow: "hidden", height: "400px", position: "relative", animationDelay: "0.8s" }}>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88" alt="Interior" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* OUR STORY & VISION & MISSION */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="reveal" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontFamily: '\"Playfair Display\", serif', fontSize: "36px", marginBottom: "20px" }}>Our Story</h2>
          <p style={{ color: "#68635d", lineHeight: "1.8", marginBottom: "20px" }}>
            Wood & Space brings together architecture, interiors and wooden design to create spaces that feel timeless, functional and personal.
          </p>
          <p style={{ color: "#68635d", lineHeight: "1.8" }}>
            Our approach combines thoughtful planning, quality materials and detailed craftsmanship to transform ideas into meaningful spaces.
          </p>
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ background: "#f7f3ed", padding: "40px", borderRadius: "10px" }}>
            <h3 style={{ fontFamily: '\"Playfair Display\", serif', fontSize: "28px", marginBottom: "15px", color: "#101412" }}>Our Vision</h3>
            <p style={{ color: "#68635d", lineHeight: "1.8" }}>
              To create timeless spaces where architecture, interiors and craftsmanship come together to improve the way people live and experience their surroundings.
            </p>
          </div>
          <div style={{ background: "#f7f3ed", padding: "40px", borderRadius: "10px" }}>
            <h3 style={{ fontFamily: '\"Playfair Display\", serif', fontSize: "28px", marginBottom: "15px", color: "#101412" }}>Our Mission</h3>
            <p style={{ color: "#68635d", lineHeight: "1.8" }}>
              Our mission is to deliver thoughtful design, quality craftsmanship and practical solutions while creating spaces that reflect the individuality and needs of every client.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="section" style={{ background: "#f7f3ed" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontFamily: '\"Playfair Display\", serif', fontSize: "40px" }}>Our Design Philosophy</h2>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "30px", maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <FaLightbulb style={{ fontSize: "32px", color: "#e8a663", marginBottom: "20px" }} />
            <h4 style={{ fontSize: "18px", marginBottom: "10px", color: "#101412" }}>Thoughtful Design</h4>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}>Design with purpose, balance and functionality.</p>
          </div>

          <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <FaHammer style={{ fontSize: "32px", color: "#e8a663", marginBottom: "20px" }} />
            <h4 style={{ fontSize: "18px", marginBottom: "10px", color: "#101412" }}>Quality Craftsmanship</h4>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}>Attention to detail and carefully selected materials.</p>
          </div>

          <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <FaClockRotateLeft style={{ fontSize: "32px", color: "#e8a663", marginBottom: "20px" }} />
            <h4 style={{ fontSize: "18px", marginBottom: "10px", color: "#101412" }}>Timeless Aesthetics</h4>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}>Creating spaces that remain elegant beyond trends.</p>
          </div>

          <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <FaUsers style={{ fontSize: "32px", color: "#e8a663", marginBottom: "20px" }} />
            <h4 style={{ fontSize: "18px", marginBottom: "10px", color: "#101412" }}>Client Focused</h4>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}>Understanding every client&apos;s needs before designing.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section reveal" style={{ textAlign: "center", background: "#fff", padding: "100px 7%" }}>
        <h2 style={{ fontFamily: '\"Playfair Display\", serif', fontSize: "42px", marginBottom: "30px" }}>Let&apos;s Build Something Meaningful.</h2>
        <Link href="/#contact" className="primary-button">
          Get a Quote
          <FaArrowRight />
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <LogoMark footer />
              <div>
                <strong>WOOD &amp; SPACE</strong>
                <small>ARCHITECTURE | INTERIORS | WOODEN DESIGN</small>
              </div>
            </div>
            <p>
              We create thoughtful spaces through architecture, interiors and premium wooden craftsmanship — designed around the way you live.
            </p>
          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <Link href="/"><FaArrowRight />Home</Link>
            <Link href="/about"><FaArrowRight />About</Link>
            <Link href="/#services"><FaArrowRight />Services</Link>
            <Link href="/#projects"><FaArrowRight />Projects</Link>
            <Link href="/#contact"><FaArrowRight />Contact</Link>
          </div>

          <div className="footer-column">
            <h4>SERVICES</h4>
            <Link href="/#services"><FaArrowRight />Architecture</Link>
            <Link href="/#services"><FaArrowRight />Interior Design</Link>
            <Link href="/#services"><FaArrowRight />Wooden Design</Link>
            <Link href="/#services"><FaArrowRight />Renovation</Link>
          </div>

          <div className="footer-column footer-contact">
            <h4>CONTACT</h4>
            <a href="tel:+919876543210"><FaPhone />+91 98765 43210</a>
            <a href="mailto:hello@woodandspace.com"><FaEnvelope />hello@woodandspace.com</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra" target="_blank" rel="noopener noreferrer"><FaLocationDot />Pune, Maharashtra</a>
            <a className="footer-whatsapp" href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><FaWhatsapp />Chat on WhatsApp</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Wood &amp; Space. All rights reserved.</span>
          <span>Architecture · Interiors · Wooden Design</span>
        </div>
      </footer>

      <a className="whatsapp" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </main>
  );
}

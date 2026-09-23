"use client";

import {
  FaArrowRight,
  FaAward,
  FaEnvelope,
  FaHouse,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

const CONTACT_PHONE_DISPLAY = "+91 98765 43210";
const CONTACT_PHONE_HREF = "tel:+919876543210";

const CONTACT_EMAIL = "hello@woodandspace.com";
const CONTACT_EMAIL_HREF = "mailto:hello@woodandspace.com";

const CONTACT_ADDRESS = "Vishrambaug, Sangli, Maharashtra";

const CONTACT_MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=Vishrambaug%2C+Sangli%2C+Maharashtra";

const CONTACT_MAP_EMBED =
  "https://www.google.com/maps?q=Vishrambaug%2C%20Sangli%2C%20Maharashtra&output=embed";

type ContactSectionProps = {
  sectionClassName?: string;
};

export function ContactSection({ sectionClassName = "" }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`contact-section${sectionClassName ? ` ${sectionClassName}` : ""}`}
    >
      <div className="contact-copy reveal">
        <p className="eyebrow dark">LET&apos;S BUILD TOGETHER</p>

        <h2>
          Have a project
          <br />
          <span>in mind?</span>
        </h2>

        <p>
          Tell us about your space and our team will get back to you to discuss
          your requirements.
        </p>

        <div className="contact-links">
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
        </div>

        <div className="contact-map-wrapper">
          <a
            href={CONTACT_MAP_HREF}
            target="_blank"
            rel="noreferrer"
            className="contact-map-link"
            aria-label="Open Vishrambaug Sangli location in Google Maps"
          >
            <iframe
              src={CONTACT_MAP_EMBED}
              className="contact-map"
              loading="lazy"
              title="Vishrambaug, Sangli Map"
            />

            <div className="map-click-label">Click to view larger map ↗</div>
          </a>
        </div>

        <div className="contact-trust">
          <FaAward />
          Free consultation · Quick response · Personal guidance
        </div>
      </div>

      <form
        className="lead-form reveal"
        onSubmit={(event) => {
          event.preventDefault();
          alert("Thank you! Your enquiry has been received.");
        }}
      >
        <div className="form-glow" />

        <h3>Get a Free Consultation</h3>

        <div className="input-with-icon">
          <FaHouse />
          <input placeholder="Full Name" required />
        </div>

        <div className="input-with-icon">
          <FaPhone />
          <input type="tel" placeholder="Phone Number" required />
        </div>

        <div className="input-with-icon">
          <FaEnvelope />
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="input-with-icon select-icon">
          <MdDesignServices />
          <select defaultValue="" required>
            <option value="" disabled>
              Select Service
            </option>
            <option>Architecture</option>
            <option>Interior Design</option>
            <option>Landscape Design</option>
            <option>Renovation</option>
          </select>
        </div>

        <div className="input-with-icon textarea-icon">
          <MdDesignServices />
          <textarea placeholder="Tell us about your project..." rows={4} />
        </div>

        <button type="submit" className="primary-button full">
          Send Enquiry
          <FaArrowRight />
        </button>

        <small>
          Your information will only be used to contact you regarding your
          project.
        </small>
      </form>
    </section>
  );
}

export {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_MAP_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
};

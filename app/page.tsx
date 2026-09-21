"use client";

import { useEffect, useState } from "react";

import {
  FaArrowRight,
  FaAward,
  FaCalendarDays,
  FaCheck,
  FaClock,
  FaCouch,
  FaEnvelope,
  FaHammer,
  FaHouse,
  FaLocationDot,
  FaPhone,
  FaRulerCombined,
  FaStar,
  FaTree,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

import { GiWoodenChair } from "react-icons/gi";
import { MdArchitecture, MdDesignServices } from "react-icons/md";

/* =========================================================
   LOGO
========================================================= */

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

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Architecture",
    text: "Smart planning and modern architectural design for beautiful spaces.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88",
    Icon: MdArchitecture,
  },
  {
    title: "Interior Design",
    text: "Elegant interiors designed around your lifestyle and vision.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88",
    Icon: FaCouch,
  },
  {
    title: "Wooden Design",
    text: "Premium custom woodwork crafted with precision and detail.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88",
    Icon: FaTree,
  },
  {
    title: "Renovation",
    text: "Transforming existing spaces into something completely new.",
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=88",
    Icon: MdDesignServices,
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    title: "Modern Villa",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Luxury Wooden Interior",
    category: "Interior + Woodwork",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Premium Kitchen",
    category: "Wooden Design",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
];

const projectDetails = {
  "Modern Villa": {
    title: "Modern Villa",
    category: "Architecture",
    location: "Pune, Maharashtra",
    year: "2026",
    description:
      "A contemporary residential villa designed around clean architectural lines, natural light and comfortable modern living.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90",
    features: [
      "Modern architectural planning",
      "Contemporary elevation",
      "Natural lighting strategy",
      "Premium exterior finishes",
    ],
  },

  "Luxury Wooden Interior": {
    title: "Luxury Wooden Interior",
    category: "Interior + Woodwork",
    location: "Pune, Maharashtra",
    year: "2026",
    description:
      "A warm luxury interior combining contemporary furniture, natural wood textures and carefully planned lighting.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
    features: [
      "Premium wooden detailing",
      "Custom furniture planning",
      "Layered lighting",
      "Elegant material palette",
    ],
  },

  "Premium Kitchen": {
    title: "Premium Kitchen",
    category: "Wooden Design",
    location: "Pune, Maharashtra",
    year: "2026",
    description:
      "A functional premium kitchen designed with smart storage, modern finishes and custom wooden detailing.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
    features: [
      "Custom modular planning",
      "Smart storage solutions",
      "Premium finishes",
      "Functional work triangle",
    ],
  },
};

type ServiceName = keyof typeof serviceDetails;
type ProjectName = keyof typeof projectDetails;

/* =========================================================
   SERVICE DETAILS
========================================================= */

const serviceDetails = {
  Architecture: [
    {
      name: "Modern Villa",
      info: "Contemporary villa planning with elevation, space planning and premium finishes.",
      price: "From ₹8,50,000",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Luxury Bungalow",
      info: "A complete bungalow concept focused on proportion, natural light and modern form.",
      price: "From ₹6,50,000",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "3D Elevation Design",
      info: "A detailed exterior elevation concept to visualise the final architectural character.",
      price: "From ₹35,000",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=90",
    },
  ],

  "Interior Design": [
    {
      name: "Living Room",
      info: "Warm, elegant living spaces with furniture planning, lighting and material selection.",
      price: "From ₹1,25,000",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Master Bedroom",
      info: "Calm bedroom interiors with custom storage, wood detailing and layered lighting.",
      price: "From ₹1,10,000",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Luxury Mirror",
      info: "Statement mirrors designed to complement premium interiors and wooden detailing.",
      price: "From ₹18,000",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=90",
    },
  ],

  "Wooden Design": [
    {
      name: "Custom Wardrobe",
      info: "Made-to-measure wardrobes with practical storage and refined wooden finishes.",
      price: "From ₹85,000",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Modular Kitchen",
      info: "Functional modular kitchens with durable materials, smart storage and premium finishes.",
      price: "From ₹1,45,000",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Wooden TV Unit",
      info: "Custom TV units with clean geometry, concealed storage and warm wood textures.",
      price: "From ₹55,000",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=90",
    },
  ],

  Renovation: [
    {
      name: "Home Renovation",
      info: "A complete refresh of an existing home with new layouts, finishes and woodwork.",
      price: "From ₹3,50,000",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Kitchen Makeover",
      info: "Modernise an existing kitchen with better storage, finishes and lighting.",
      price: "From ₹1,25,000",
      image:
        "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Interior Refresh",
      info: "A focused transformation for selected rooms without rebuilding the whole space.",
      price: "From ₹75,000",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90",
    },
  ],
};

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We listen to your space, lifestyle, budget and vision.",
    Icon: FaRulerCombined,
  },
  {
    number: "02",
    title: "Design",
    text: "Our team turns ideas into a thoughtful visual direction.",
    Icon: MdDesignServices,
  },
  {
    number: "03",
    title: "Craft",
    text: "Materials and details are executed with care and precision.",
    Icon: FaHammer,
  },
  {
    number: "04",
    title: "Deliver",
    text: "A finished space designed to feel beautiful and built to last.",
    Icon: FaAward,
  },
];

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const [selectedService, setSelectedService] =
    useState<ServiceName | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<ProjectName | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

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

  /* =======================================================
     SERVICE SLIDER AUTO PLAY
  ======================================================= */

  useEffect(() => {
    if (!selectedService) return;

    setActiveSlide(0);

    const timer = window.setInterval(() => {
      setActiveSlide(
        (current) =>
          (current + 1) %
          serviceDetails[selectedService].length
      );
    }, 3200);

    return () => window.clearInterval(timer);
  }, [selectedService]);

  /* =======================================================
     KEYBOARD ESC
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
        setSelectedProject(null);
        setShowForm(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="site">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="logo">

          <LogoMark />

          <div>
            <strong>WOOD &amp; SPACE</strong>

            <small>
              ARCHITECTURE | INTERIORS | WOODEN DESIGN
            </small>
          </div>

        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="nav-button"
          onClick={() => setShowForm(true)}
        >
          Get a Quote
          <FaArrowRight />
        </button>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section id="home" className="hero">

        <div className="hero-overlay" />

        <div className="hero-content reveal">

          <p className="eyebrow">
            DREAM · DESIGN · BUILD
          </p>

          <h1>
            Beautiful Spaces,
            <br />
            <span>Thoughtfully Designed.</span>
          </h1>

          <p className="hero-text">
            We create modern architecture, elegant interiors and
            premium wooden spaces that bring your vision to life.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => setShowForm(true)}
            >
              Explore Your Project
              <FaArrowRight />
            </button>

            <a
              href="#projects"
              className="secondary-button"
            >
              View Our Work
              <FaArrowRight />
            </a>

          </div>

        </div>

        <div className="hero-bottom">

          <div>
            <span>
              <FaStar />
            </span>

            <strong>Modern Designs</strong>

            <small>Trendy &amp; Timeless</small>
          </div>

          <div>
            <span>
              <GiWoodenChair />
            </span>

            <strong>Premium Woodwork</strong>

            <small>Quality Craftsmanship</small>
          </div>

          <div>
            <span>
              <FaClock />
            </span>

            <strong>On-Time Delivery</strong>

            <small>Your Dream, Our Priority</small>
          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="section services-section"
      >

        <div className="section-heading reveal">

          <div>

            <p className="eyebrow dark">
              OUR SERVICES
            </p>

            <h2>What We Do</h2>

          </div>

          <p>
            From concept to completion, we deliver complete
            solutions for spaces that are functional,
            beautiful and built to last.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.Icon;

            return (
              <article
                className="service-card reveal"
                key={service.title}
                style={{
                  transitionDelay: `${index * 0.12}s`,
                }}
                onClick={() =>
                  setSelectedService(
                    service.title as ServiceName
                  )
                }
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    setSelectedService(
                      service.title as ServiceName
                    );
                  }
                }}
              >

                <div className="service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="service-image-shine" />

                  <div className="service-floating-icon">
                    <Icon />
                  </div>

                </div>


                <div className="service-info">

                  <div className="service-icon">
                    <Icon />
                  </div>

                  <div>

                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                  </div>

                  <span className="arrow">
                    <FaArrowRight />
                  </span>

                </div>

              </article>
            );
          })}

        </div>


        {/* =================================================
            SLIDING SERVICE TAB
        ================================================= */}

        <div className="service-marquee">

          <div className="service-marquee-track">

            <span>ARCHITECTURE</span>
            <i>✦</i>

            <span>INTERIOR DESIGN</span>
            <i>✦</i>

            <span>WOODEN DESIGN</span>
            <i>✦</i>

            <span>RENOVATION</span>
            <i>✦</i>

            <span>ARCHITECTURE</span>
            <i>✦</i>

            <span>INTERIOR DESIGN</span>
            <i>✦</i>

            <span>WOODEN DESIGN</span>
            <i>✦</i>

            <span>RENOVATION</span>
            <i>✦</i>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="about-section"
      >

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

          <p className="eyebrow dark">
            ABOUT US
          </p>

          <h2>
            Architecture Meets
            <br />
            <span>The Beauty of Wood.</span>
          </h2>

          <p>
            We combine contemporary architecture with the warmth
            of natural materials to create spaces that are personal,
            practical and timeless.
          </p>

          <p>
            Every project is developed from concept to completion
            with attention to detail, craftsmanship and client
            requirements.
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


          <button
            className="outline-button"
            onClick={() => setShowForm(true)}
          >
            Start Your Project
            <FaArrowRight />
          </button>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-heading reveal">

          <div>

            <p className="eyebrow dark">
              SELECTED WORK
            </p>

            <h2>Our Projects</h2>

          </div>

          <p>
            A glimpse of spaces designed with architecture,
            interiors and handcrafted wooden details.
          </p>

        </div>


        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card reveal"
              key={project.title}
              style={{
                transitionDelay: `${index * 0.14}s`,
              }}
              onClick={() =>
                setSelectedProject(
                  project.title as ProjectName
                )
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {

                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  setSelectedProject(
                    project.title as ProjectName
                  );
                }

              }}
            >

              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-overlay">

                <small>
                  {project.category}
                </small>

                <h3>{project.title}</h3>

                <span>
                  View Project
                  <FaArrowRight />
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="process-section">

        <div className="process-heading reveal">

          <div>

            <p className="eyebrow dark">
              OUR PROCESS
            </p>

            <h2>
              From Idea to
              <br />
              <span>Beautiful Reality.</span>
            </h2>

          </div>

          <p>
            Every stage is planned to make the journey from
            concept to completion simple, transparent and
            memorable.
          </p>

        </div>


        <div className="process-line" />


        <div className="process-grid">

          {processSteps.map((step, index) => {

            const Icon = step.Icon;

            return (
              <div
                className="process-card reveal"
                key={step.number}
                style={{
                  transitionDelay: `${index * 0.13}s`,
                }}
              >

                <div className="process-top">

                  <span>{step.number}</span>

                  <Icon />

                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>
            );

          })}

        </div>

      </section>


      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="why-section">

        <div className="why-inner reveal">

          <p className="eyebrow">
            WHY CHOOSE US
          </p>

          <h2>
            Quality.
            <br />
            Creativity.
            <br />
            Commitment.
          </h2>

          <p>
            We bring together creative design, experienced
            professionals and quality craftsmanship to create
            spaces that last.
          </p>


          <div className="why-points">

            <div>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>150+</strong>
              <span>Projects Delivered</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Client Focused</span>
            </div>

          </div>

        </div>


        <div className="why-image reveal">

          <div className="why-image-badge">

            <FaTree />

            <span>Natural Materials</span>

          </div>

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88"
            alt="Wooden staircase interior"
            loading="lazy"
          />

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-copy reveal">

          <p className="eyebrow dark">
            LET'S BUILD TOGETHER
          </p>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            Tell us about your space and our team will get back
            to you to discuss your requirements.
          </p>


          <div className="contact-links">

            <span>
              <FaPhone />
              +91 98765 43210
            </span>

            <span>
              <FaEnvelope />
              hello@woodandspace.com
            </span>

            <span>
              <FaLocationDot />
              Pune, Maharashtra
            </span>

          </div>


          <div className="contact-trust">

            <FaAward />

            Free consultation · Quick response · Personal guidance

          </div>

        </div>


        {/* =================================================
            CONTACT FORM
        ================================================= */}

        <form
          className="lead-form reveal"
          onSubmit={(event) => {

            event.preventDefault();

            alert(
              "Thank you! Your enquiry has been received."
            );

          }}
        >

          <div className="form-glow" />

          <h3>
            Get a Free Consultation
          </h3>


          <div className="input-with-icon">

            <FaHouse />

            <input
              placeholder="Full Name"
              required
            />

          </div>


          <div className="input-with-icon">

            <FaPhone />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

          </div>


          <div className="input-with-icon">

            <FaEnvelope />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

          </div>


          <div className="input-with-icon select-icon">

            <MdDesignServices />

            <select
              defaultValue=""
              required
            >

              <option
                value=""
                disabled
              >
                Select Service
              </option>

              <option>
                Architecture
              </option>

              <option>
                Interior Design
              </option>

              <option>
                Wooden Design
              </option>

              <option>
                Renovation
              </option>

            </select>

          </div>


          <div className="input-with-icon textarea-icon">

            <MdDesignServices />

            <textarea
              placeholder="Tell us about your project..."
              rows={4}
            />

          </div>


          <button
            type="submit"
            className="primary-button full"
          >
            Send Enquiry
            <FaArrowRight />
          </button>


          <small>
            Your information will only be used to contact you
            regarding your project.
          </small>

        </form>

      </section>


      {/* =====================================================
          PROPER FOOTER
      ===================================================== */}

      <footer className="main-footer">

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo">

              <LogoMark footer />

              <div>

                <strong>
                  WOOD &amp; SPACE
                </strong>

                <small>
                  ARCHITECTURE | INTERIORS | WOODEN DESIGN
                </small>

              </div>

            </div>


            <p>
              We create thoughtful spaces through architecture,
              interiors and premium wooden craftsmanship —
              designed around the way you live.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-column">

            <h4>
              QUICK LINKS
            </h4>

            <a href="#home">
              <FaArrowRight />
              Home
            </a>

            <a href="#about">
              <FaArrowRight />
              About
            </a>

            <a href="#services">
              <FaArrowRight />
              Services
            </a>

            <a href="#projects">
              <FaArrowRight />
              Projects
            </a>

            <a href="#contact">
              <FaArrowRight />
              Contact
            </a>

          </div>


          {/* SERVICES */}

          <div className="footer-column">

            <h4>
              SERVICES
            </h4>

            <a href="#services">
              <FaArrowRight />
              Architecture
            </a>

            <a href="#services">
              <FaArrowRight />
              Interior Design
            </a>

            <a href="#services">
              <FaArrowRight />
              Wooden Design
            </a>

            <a href="#services">
              <FaArrowRight />
              Renovation
            </a>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h4>
              CONTACT
            </h4>

            <span>
              <FaPhone />
              +91 98765 43210
            </span>

            <span>
              <FaEnvelope />
              hello@woodandspace.com
            </span>

            <span>
              <FaLocationDot />
              Pune, Maharashtra
            </span>


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


        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <span>
            © 2026 Wood &amp; Space. All rights reserved.
          </span>

          <span>
            Architecture · Interiors · Wooden Design
          </span>

        </div>

      </footer>


      {/* =====================================================
          WHATSAPP FLOATING BUTTON
      ===================================================== */}

      <a
        className="whatsapp"
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>


      {/* =====================================================
          PROJECT DETAIL POPUP
      ===================================================== */}

      {selectedProject &&
        projectDetails[selectedProject] && (

          <div
            className="project-modal"
            onClick={() =>
              setSelectedProject(null)
            }
          >

            <div
              className="project-modal-box"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="project-modal-close"
                onClick={() =>
                  setSelectedProject(null)
                }
                aria-label="Close project"
              >
                <FaXmark />
              </button>


              {/* PROJECT IMAGE */}

              <div className="project-modal-image">

                <img
                  src={
                    projectDetails[
                      selectedProject
                    ].image
                  }
                  alt={
                    projectDetails[
                      selectedProject
                    ].title
                  }
                />

                <div className="project-modal-image-overlay" />


                <div className="project-modal-title">

                  <p>
                    {
                      projectDetails[
                        selectedProject
                      ].category
                    }
                  </p>

                  <h2>
                    {
                      projectDetails[
                        selectedProject
                      ].title
                    }
                  </h2>

                </div>

              </div>


              {/* PROJECT CONTENT */}

              <div className="project-modal-content">


                {/* META */}

                <div className="project-meta">

                  <div>

                    <FaLocationDot />

                    <span>

                      <small>
                        Location
                      </small>

                      {
                        projectDetails[
                          selectedProject
                        ].location
                      }

                    </span>

                  </div>


                  <div>

                    <FaCalendarDays />

                    <span>

                      <small>
                        Project Year
                      </small>

                      {
                        projectDetails[
                          selectedProject
                        ].year
                      }

                    </span>

                  </div>

                </div>


                {/* DESCRIPTION */}

                <div className="project-description">

                  <p className="eyebrow dark">
                    PROJECT DETAILS
                  </p>

                  <h3>
                    Designed around
                    <br />
                    <span>
                      your lifestyle.
                    </span>
                  </h3>

                  <p>
                    {
                      projectDetails[
                        selectedProject
                      ].description
                    }
                  </p>

                </div>


                {/* FEATURES */}

                <div className="project-features">

                  <h4>
                    Project Highlights
                  </h4>


                  {
                    projectDetails[
                      selectedProject
                    ].features.map(
                      (feature) => (

                        <div
                          className="project-feature"
                          key={feature}
                        >

                          <span>
                            <FaCheck />
                          </span>

                          <p>
                            {feature}
                          </p>

                        </div>

                      )
                    )
                  }

                </div>


                {/* ACTION */}

                <div className="project-modal-action">

                  <button
                    className="primary-button"
                    onClick={() => {

                      setSelectedProject(null);

                      setShowForm(true);

                    }}
                  >

                    Start a Similar Project

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}


      {/* =====================================================
          SERVICE DETAIL POPUP
      ===================================================== */}

      {selectedService && (

        <div
          className="service-modal"
          onClick={() =>
            setSelectedService(null)
          }
        >

          <div
            className="service-modal-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="service-modal-close"
              onClick={() =>
                setSelectedService(null)
              }
              aria-label="Close"
            >
              ×
            </button>


            <div className="service-modal-head">

              <div>

                <p className="eyebrow dark">
                  EXPLORE SERVICE
                </p>

                <h2>
                  {selectedService}
                </h2>

              </div>


              <span className="service-count">

                {String(
                  activeSlide + 1
                ).padStart(2, "0")}

                {" / "}

                {String(
                  serviceDetails[
                    selectedService
                  ].length
                ).padStart(2, "0")}

              </span>

            </div>


            <div className="service-slider">

              {
                serviceDetails[
                  selectedService
                ].map(
                  (item, index) => (

                    <div
                      className={`service-slide ${
                        index === activeSlide
                          ? "active"
                          : ""
                      }`}
                      key={item.name}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="service-slide-overlay" />


                      <div className="service-slide-content">

                        <p className="slide-category">
                          {selectedService}
                        </p>


                        <h3 className="letter-title">

                          {item.name
                            .split("")
                            .map(
                              (
                                letter,
                                i
                              ) => (

                                <span
                                  key={`${letter}-${i}`}
                                  style={{
                                    animationDelay: `${
                                      i * 0.055
                                    }s`,
                                  }}
                                >
                                  {letter === " "
                                    ? "\u00a0"
                                    : letter}
                                </span>

                              )
                            )}

                        </h3>


                        <p>
                          {item.info}
                        </p>


                        <div className="slide-bottom">

                          <strong>
                            {item.price}
                          </strong>


                          <button
                            className="primary-button"
                            onClick={() => {

                              setSelectedService(
                                null
                              );

                              setShowForm(true);

                            }}
                          >

                            Get a Quote

                            <FaArrowRight />

                          </button>

                        </div>

                      </div>

                    </div>

                  )
                )
              }


              {/* PREVIOUS */}

              <button
                className="slider-arrow slider-prev"
                onClick={() =>
                  setActiveSlide(
                    (
                      activeSlide -
                      1 +
                      serviceDetails[
                        selectedService
                      ].length
                    ) %
                    serviceDetails[
                      selectedService
                    ].length
                  )
                }
                aria-label="Previous"
              >
                ‹
              </button>


              {/* NEXT */}

              <button
                className="slider-arrow slider-next"
                onClick={() =>
                  setActiveSlide(
                    (
                      activeSlide + 1
                    ) %
                    serviceDetails[
                      selectedService
                    ].length
                  )
                }
                aria-label="Next"
              >
                ›
              </button>

            </div>


            {/* DOTS */}

            <div className="service-dots">

              {
                serviceDetails[
                  selectedService
                ].map(
                  (item, index) => (

                    <button
                      key={item.name}
                      className={
                        index === activeSlide
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setActiveSlide(index)
                      }
                      aria-label={`Show ${item.name}`}
                    />

                  )
                )
              }

            </div>


            {/* OPTIONS */}

            <div className="service-option-row">

              {
                serviceDetails[
                  selectedService
                ].map(
                  (item, index) => (

                    <button
                      key={item.name}
                      className={
                        index === activeSlide
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setActiveSlide(index)
                      }
                    >

                      <span>
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      {item.name}

                    </button>

                  )
                )
              }

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          QUOTE POPUP
      ===================================================== */}

      {showForm && (

        <div
          className="modal"
          onClick={() =>
            setShowForm(false)
          }
        >

          <div
            className="modal-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close"
              onClick={() =>
                setShowForm(false)
              }
              aria-label="Close"
            >
              ×
            </button>


            <p className="eyebrow dark">
              START YOUR PROJECT
            </p>


            <h2>
              Tell us what you need.
            </h2>


            <form
              onSubmit={(event) => {

                event.preventDefault();

                alert(
                  "Thank you! We will contact you shortly."
                );

                setShowForm(false);

              }}
            >

              <div className="input-with-icon modal-input">

                <FaHouse />

                <input
                  placeholder="Full Name"
                  required
                />

              </div>


              <div className="input-with-icon modal-input">

                <FaPhone />

                <input
                  placeholder="Phone Number"
                  type="tel"
                  required
                />

              </div>


              <div className="input-with-icon modal-input">

                <FaEnvelope />

                <input
                  placeholder="Email Address"
                  type="email"
                  required
                />

              </div>


              <div className="input-with-icon modal-input">

                <MdDesignServices />

                <select
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    What are you looking for?
                  </option>

                  <option>
                    Architecture
                  </option>

                  <option>
                    Interior Design
                  </option>

                  <option>
                    Wooden Design
                  </option>

                  <option>
                    Renovation
                  </option>

                </select>

              </div>


              <button
                type="submit"
                className="primary-button full"
              >

                Submit Enquiry

                <FaArrowRight />

              </button>

            </form>

          </div>

        </div>

      )}

    </main>
  );
}
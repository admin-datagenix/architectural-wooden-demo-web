"use client";

import { useState } from "react";
import Link from "next/link";

import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

import { LogoMark } from "./LogoMark";

type SiteNavbarProps = {
  onGetQuote?: () => void;
};

export function SiteNavbar({ onGetQuote }: SiteNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleQuote = () => {
    closeMenu();
    onGetQuote?.();
  };

  return (
    <header className={`navbar${menuOpen ? " nav-open" : ""}`}>
      <Link href="/" className="logo" onClick={closeMenu}>
        <LogoMark />

        <div>
          <strong className="logo-brand-name">
            Sawant <span className="logo-amp">&amp;</span> Associates
          </strong>

          <small>ARCHITECTURE | INTERIORS | LANDSCAPE DESIGN</small>
        </div>
      </Link>

      <button
        type="button"
        className="nav-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FaXmark /> : <FaBars />}
      </button>

      <nav>
        <Link href="/#home" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/#services" onClick={closeMenu}>
          Services
        </Link>
        <Link href="/#projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link href="/#contact" onClick={closeMenu}>
          Contact
        </Link>

        {onGetQuote ? (
          <button type="button" className="nav-menu-quote" onClick={handleQuote}>
            Get a Quote
            <FaArrowRight />
          </button>
        ) : (
          <Link
            href="/#contact"
            className="nav-menu-quote"
            onClick={closeMenu}
          >
            Get a Quote
            <FaArrowRight />
          </Link>
        )}
      </nav>

      {onGetQuote ? (
        <button type="button" className="nav-button" onClick={handleQuote}>
          Get a Quote
          <FaArrowRight />
        </button>
      ) : (
        <Link href="/#contact" className="nav-button" onClick={closeMenu}>
          Get a Quote
          <FaArrowRight />
        </Link>
      )}
    </header>
  );
}

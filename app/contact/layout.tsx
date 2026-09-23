import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sawant & Associates",
  description:
    "Get in touch with Sawant & Associates for architecture, interiors, and landscape design.",
};

export default function ContactLayout({
  children,
}: LayoutProps<"/contact">) {
  return children;
}

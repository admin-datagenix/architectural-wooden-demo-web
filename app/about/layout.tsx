import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sawant & Associates",
  description:
    "Learn about Sawant & Associates — architecture, interiors, and landscape design in Pune.",
};

export default function AboutLayout({
  children,
}: LayoutProps<"/about">) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Wood & Space",
  description:
    "Learn about Wood & Space — architecture, interiors, and premium wooden design in Pune.",
};

export default function AboutLayout({
  children,
}: LayoutProps<"/about">) {
  return children;
}

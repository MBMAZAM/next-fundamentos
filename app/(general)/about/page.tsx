import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO About",
  keywords: ["About Page", "Mauricio Maza"],
};

export default function AboutPage() {
  return <span className="text-7xl">Hola About</span>;
}


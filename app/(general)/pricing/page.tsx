import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Pricing",
  keywords: ["Contact", "It's the Pricing page"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}

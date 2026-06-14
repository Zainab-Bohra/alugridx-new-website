import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "HVAC Engineering Insights & Technical Guides | ALUGRIDX UAE",
  description: "Access technical breakdowns, fluid dynamics insights, and architectural ventilation guide matrices curated by the ALUGRIDX engineering plant.",
  keywords: ["HVAC engineering blog", "Air distribution guides Dubai", "Aluminium grille specifications GCC", "Fluid dynamics terminal systems"],
};

export default function BlogPage() {
  return <BlogClient />;
}
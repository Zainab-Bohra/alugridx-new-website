import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "HVAC Project Portfolio & Case Studies | ALUGRIDX UAE",
  description: "Explore landmark ventilation and air distribution supply projects by ALUGRIDX across Dubai, Abu Dhabi, and the GCC. Review architectural submittals for commercial, medical, and residential towers.",
  keywords: ["HVAC projects Dubai", "Aluminium grilles supply UAE", "Ajman factory case studies", "Commercial diffuser installations GCC", "Dampers reference projects"],
  openGraph: {
    title: "ALUGRIDX Landmark HVAC Engineering Portfolio",
    description: "Review our absolute execution matrices across premium commercial nodes, healthcare centers, and high-rise structures in the Middle East.",
    url: "https://www.alugridx.com/projects",
    locale: "en_AE",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
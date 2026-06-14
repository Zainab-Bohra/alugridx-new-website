import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About ALUGRIDX | 40-Year HVAC Manufacturing Legacy in UAE",
  description: "Evolving from Hashim Darwish Commission LLC (Est. 1986), ALUGRIDX Air Conditioning Industry LLC delivers tight-tolerance architectural aluminium grilles and terminal grids across the GCC from Ajman, UAE.",
  keywords: ["ALUGRIDX history", "HVAC factory UAE", "Hashim Darwish Commission", "Al Jurf 3 manufacturing", "ASHRAE standards production UAE"],
  openGraph: {
    title: "The Engineering Legacy of ALUGRIDX UAE",
    description: "Four decades of regional domain expertise transformed into high-tier, automated thermodynamic air distribution manufacturing.",
    url: "https://www.alugridx.com/about-us",
    locale: "en_AE",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
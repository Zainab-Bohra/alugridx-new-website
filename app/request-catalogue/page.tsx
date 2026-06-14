import type { Metadata } from "next";
import CatalogueClient from "./CatalogueClient";

export const metadata: Metadata = {
  title: "Download Technical Product Catalogue | ALUGRIDX",
  description: "Access the complete ALUGRIDX architectural aluminium grilles, diffusers, louvers, and dampers dimensional matrix catalogue. PDF and AutoCAD DWG downloads available.",
  keywords: ["HVAC catalogue PDF", "Alugridx submittals download", "Aluminium grilles drawings", "Dampers specifications sheet"],
};

export default function RequestCataloguePage() {
  return <CatalogueClient />;
}
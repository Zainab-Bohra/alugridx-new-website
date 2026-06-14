import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Our Engineering Team | ALUGRIDX UAE",
  description: "Connect with ALUGRIDX Air Conditioning Industry LLC. Request quotes, custom dimensions, technical submittals, and factory visits in Ajman & Dubai, UAE.",
  keywords: ["HVAC manufacturer UAE", "Aluminium Grilles Ajman", "Contact Alugridx", "HVAC suppliers GCC", "Volume Control Dampers quote"],
  openGraph: {
    title: "Request a Technical Quote | ALUGRIDX Industry LLC",
    description: "Enterprise HVAC terminal devices manufactured to international standards. Speak directly with our site engineers.",
    url: "https://www.alugridx.com/contact-us",
    locale: "en_AE",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
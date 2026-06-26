import { Metadata } from "next";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";
import InvestigationOverlay from "@/components/InvestigationOverlay";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Consultation & Mentorship Services | Syed Shahid Hassan",
  description:
    "Mentorship, training, and advisory services from a former FIA Additional Director: CSS/PPSC mentorship, cybercrime training, anti-corruption advisory, and forensic investigation consulting.",
};

export default function ServicesPage() {
  return (
    <main>
      <Section className="pt-6 md:pt-10 pb-6">
        <FadeIn>
          <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <InvestigationOverlay />
            <div className="absolute -top-20 right-1/4 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 left-1/4 w-48 h-48 bg-gold/15 rounded-full blur-3xl" />
            <p className="relative z-10 text-gold uppercase tracking-widest text-xs md:text-sm font-medium mb-4">Services</p>
            <h1 className="relative z-10 font-serif text-4xl md:text-5xl text-navy text-balance">
              Practitioner Guidance, <span className="text-gradient-gold">Not Theory</span>
            </h1>
            <p className="relative z-10 text-charcoal/60 mt-4 max-w-xl mx-auto">
              Mentorship and advisory drawn from more than three decades inside Pakistan&apos;s
              federal law enforcement system.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Section>
    </main>
  );
}

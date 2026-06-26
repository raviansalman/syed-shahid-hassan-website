import { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";
import InvestigationOverlay from "@/components/InvestigationOverlay";

export const metadata: Metadata = {
  title: "Contact | Syed Shahid Hassan",
  description:
    "Get in touch with Syed Shahid Hassan for mentorship, training, or consulting inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <Section className="pt-6 md:pt-10 pb-6">
        <FadeIn>
          <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <InvestigationOverlay />
            <div className="absolute -top-20 right-1/3 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 left-1/4 w-48 h-48 bg-gold/15 rounded-full blur-3xl" />
            <p className="relative z-10 text-gold uppercase tracking-widest text-xs md:text-sm font-medium mb-4">Contact</p>
            <h1 className="relative z-10 font-serif text-4xl md:text-5xl text-navy">Let&apos;s Talk</h1>
            <p className="relative z-10 text-charcoal/60 mt-4 max-w-xl mx-auto">
              Available around the clock. Reach out anytime.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section className="max-w-xl">
        <FadeIn>
          <WhatsAppButton className="mb-6 w-full" />
          <ContactForm />
        </FadeIn>
      </Section>
    </main>
  );
}

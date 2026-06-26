import { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import InvestigationOverlay from "@/components/InvestigationOverlay";

export const metadata: Metadata = {
  title: "Book a Session | Syed Shahid Hassan",
  description: "Book a mentorship session, training, or consultation with Syed Shahid Hassan.",
};

export default function BookPage() {
  return (
    <main>
      <Section className="pt-6 md:pt-10 pb-6">
        <FadeIn>
          <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <InvestigationOverlay />
            <div className="absolute -top-20 left-1/3 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 right-1/4 w-48 h-48 bg-sky-400/12 rounded-full blur-3xl" />
            <p className="relative z-10 text-gold uppercase tracking-widest text-xs md:text-sm font-medium mb-4">Book</p>
            <h1 className="relative z-10 font-serif text-4xl md:text-5xl text-navy text-balance">Book a Session</h1>
            <p className="relative z-10 text-charcoal/60 mt-4 max-w-xl mx-auto">
              Use the calendar below to find a time, or send an inquiry and we&apos;ll follow up
              directly. Available around the clock, every day of the week.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section className="max-w-2xl">
        <FadeIn>
          <div className="glass rounded-2xl p-10 text-center mb-8">
            <p className="text-charcoal/50 text-sm">
              Calendly booking widget to be embedded here once a scheduling link is provided.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-2xl text-navy mb-6 text-center">Or Send an Inquiry</h2>
          <ContactForm />
        </FadeIn>
      </Section>
    </main>
  );
}

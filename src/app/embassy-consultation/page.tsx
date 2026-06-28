import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import InvestigationOverlay from "@/components/InvestigationOverlay";
import GlobalNetworkBackground from "@/components/GlobalNetworkBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import { embassyAudience, embassyCapabilities } from "@/data/content";
import { Globe2, ShieldCheck, MapPinned, MessageSquareText } from "lucide-react";

export const metadata: Metadata = {
  title: "Embassy & International Consultation | Syed Shahid Hassan",
  description:
    "Independent contractor support for embassies and diplomatic missions on cybercrime investigation, field operations, and cross-border cases, plus international consultation.",
};

const capabilityIcons = [Globe2, MapPinned, ShieldCheck, MessageSquareText];

const faqs = [
  {
    q: "How is this engagement structured?",
    a: "All international and embassy work is undertaken as an independent contractor, in a private capacity, scoped per engagement. Structure (retainer, per-case, or project-based) is agreed upfront.",
  },
  {
    q: "Is this work confidential?",
    a: "Yes. Embassy and cross-border matters are handled under strict confidentiality, with details of any specific engagement never shared publicly.",
  },
  {
    q: "Can engagements be remote or do they require field presence?",
    a: "Both. Many consultation and case-review engagements are handled remotely; field operations and on-ground coordination are arranged where required.",
  },
  {
    q: "What languages are sessions conducted in?",
    a: "English and Urdu, depending on the parties involved.",
  },
];

export default function EmbassyConsultationPage() {
  return (
    <main className="relative">
      <GlobalNetworkBackground className="fixed inset-0 z-0" intensity="prominent" />

      <Section className="pt-6 md:pt-10 pb-6 relative z-10">
        <FadeIn>
          <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <InvestigationOverlay />
            <div className="absolute -top-20 -right-10 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 left-1/4 w-48 h-48 bg-gold/15 rounded-full blur-3xl" />
            <p className="relative z-10 text-gold uppercase tracking-widest text-xs md:text-sm font-medium mb-4">
              International &amp; Embassy Consultation
            </p>
            <h1 className="relative z-10 font-serif text-4xl md:text-5xl leading-tight mb-5 text-balance text-navy max-w-3xl">
              Cross-Border Investigation Support for{" "}
              <span className="text-gradient-gold">Embassies &amp; International Missions</span>
            </h1>
            <p className="relative z-10 text-charcoal/65 text-lg leading-relaxed max-w-2xl">
              Beyond Pakistan, Syed Shahid Hassan has worked as an independent contractor for
              embassies and diplomatic missions, supporting cybercrime case investigation, field
              operations, and cross-border cases where digital crime, law enforcement, and
              diplomacy intersect.
            </p>
            <div className="relative z-10 flex flex-wrap gap-4 mt-7">
              <Link
                href="/book"
                className="glow-gold bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white px-6 py-3 rounded-xl font-medium hover:brightness-110 transition-all"
              >
                Request a Confidential Consultation
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="relative z-10">
        <FadeIn>
          <h2 className="font-serif text-3xl text-navy text-center mb-10">
            Scope of <span className="text-gradient-gold">International Work</span>
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {embassyCapabilities.map((cap, i) => {
            const Icon = capabilityIcons[i % capabilityIcons.length];
            return (
              <FadeIn key={cap.title} delay={i * 0.07}>
                <div className="glass rounded-2xl p-6 h-full hover:bg-white/80 transition-colors">
                  <div className="w-10 h-10 rounded-lg glass-gold flex items-center justify-center mb-4">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2">{cap.title}</h3>
                  <p className="text-charcoal/65 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section className="relative z-10 max-w-3xl">
        <FadeIn>
          <div className="glass rounded-2xl p-8 md:p-10">
            <h2 className="font-serif text-xl text-gold mb-4">Who It&apos;s For</h2>
            <ul className="list-disc list-inside text-charcoal/70 space-y-1 mb-10">
              {embassyAudience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>

            <h2 className="font-serif text-xl text-gold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5 mb-10">
              {faqs.map((f) => (
                <div key={f.q}>
                  <p className="font-medium text-navy mb-1">{f.q}</p>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            <Link
              href="/book"
              className="inline-block glow-gold bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white px-8 py-3 rounded-xl font-medium hover:brightness-110 transition-all"
            >
              Book a Session
            </Link>
          </div>
        </FadeIn>
      </Section>
    </main>
  );
}

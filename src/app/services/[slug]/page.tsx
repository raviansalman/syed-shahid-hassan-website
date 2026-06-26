import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import InvestigationOverlay from "@/components/InvestigationOverlay";
import { services } from "@/data/content";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Syed Shahid Hassan`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const faqs =
    service.slug === "css-ppsc-mentorship"
      ? [
          {
            q: "How many sessions do I need?",
            a: "It depends on where you're starting from. Most aspirants begin with a single assessment session, then build a plan around essay writing, current affairs, and interview prep from there.",
          },
          {
            q: "Is it online?",
            a: "Yes, sessions run via Zoom for most aspirants. In-person sessions are available in Islamabad on request.",
          },
          {
            q: "Do you cover the written exam and the interview?",
            a: "Both. Sessions can focus on essay writing and current affairs for the written exam, or on interview preparation and viva readiness, depending on where you are in the process.",
          },
        ]
      : null;

  return (
    <main>
      <Section className="pt-6 md:pt-10 pb-6">
        <FadeIn>
          <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <InvestigationOverlay />
            <div className="absolute -top-20 -right-10 w-64 h-64 bg-slate-400/15 rounded-full blur-3xl" />
            <Link
              href="/services"
              className="relative z-10 inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-navy transition-colors"
            >
              <ArrowLeft size={14} /> All Services
            </Link>
            <h1 className="relative z-10 font-serif text-4xl md:text-5xl mt-4 text-navy text-balance">
              {service.title}
            </h1>
          </div>
        </FadeIn>
      </Section>

      <Section className="max-w-3xl">
        <FadeIn>
          <div className="glass rounded-2xl p-8 md:p-10">
            <p className="text-lg text-charcoal/75 leading-relaxed mb-10">{service.description}</p>

            {service.audience && (
              <div className="mb-10">
                <h2 className="font-serif text-xl text-gold mb-3">Who It&apos;s For</h2>
                <ul className="list-disc list-inside text-charcoal/70 space-y-1">
                  {service.audience.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.topics && (
              <div className="mb-10">
                <h2 className="font-serif text-xl text-gold mb-3">What&apos;s Covered</h2>
                <ul className="list-disc list-inside text-charcoal/70 space-y-1">
                  {service.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.format && (
              <div className="mb-10">
                <h2 className="font-serif text-xl text-gold mb-3">Format</h2>
                <p className="text-charcoal/70">{service.format}</p>
              </div>
            )}

            {faqs && (
              <div className="mb-10">
                <h2 className="font-serif text-xl text-gold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-5">
                  {faqs.map((f) => (
                    <div key={f.q}>
                      <p className="font-medium text-navy mb-1">{f.q}</p>
                      <p className="text-charcoal/60 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

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

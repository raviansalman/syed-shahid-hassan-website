import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import FadeIn from "@/components/FadeIn";
import SectionTabs from "@/components/SectionTabs";
import InvestigationOverlay from "@/components/InvestigationOverlay";
import GlobalNetworkBackground from "@/components/GlobalNetworkBackground";
import { achievements, bioFull, credentials, pullQuote } from "@/data/content";
import { Shield, Globe2, Gavel, FileSearch, GraduationCap, HeartHandshake, Award, Mic, Coins, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "About Syed Shahid Hassan | Three Decades in FIA, BCIT Canada Trained",
  description:
    "The full story of Syed Shahid Hassan, in the FIA since 1992, with advanced forensic training in Canada and a career spent building the country's cybercrime enforcement framework.",
};

const tabs = [
  { id: "biography", label: "Biography" },
  { id: "timeline", label: "Timeline" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
];

const achievementIcons = [Shield, Globe2, Gavel, FileSearch, Award, GraduationCap, HeartHandshake, Mic, Coins, Network];

const achievementAccents = [
  { chip: "glass-gold", text: "text-gold" },
  { chip: "glass-emerald", text: "text-emerald-600" },
  { chip: "glass-sky", text: "text-sky-600" },
  { chip: "glass-slate", text: "text-slate-600" },
  { chip: "glass-crimson", text: "text-red-600" },
  { chip: "glass-cyan", text: "text-cyan-600" },
  { chip: "glass-slate", text: "text-slate-600" },
  { chip: "glass-gold", text: "text-gold" },
  { chip: "glass-emerald", text: "text-emerald-600" },
  { chip: "glass-crimson", text: "text-red-600" },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <GlobalNetworkBackground className="fixed inset-0 z-0" intensity="prominent" />
      <Section className="pt-6 md:pt-8 pb-4 relative z-10">
        <FadeIn>
          <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <InvestigationOverlay />
            <div className="absolute -top-20 left-1/3 w-64 h-64 bg-slate-400/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 right-1/4 w-48 h-48 bg-gold/15 rounded-full blur-3xl" />
            <p className="relative z-10 text-gold uppercase tracking-widest text-xs md:text-sm font-medium mb-4">About</p>
            <h1 className="relative z-10 font-serif text-4xl md:text-5xl text-navy">Syed Shahid Hassan</h1>
            <p className="relative z-10 text-charcoal/60 mt-3">Former Additional Director, Federal Investigation Agency (FIA)</p>
          </div>
        </FadeIn>
      </Section>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <SectionTabs items={tabs} />
      </div>

      <Section id="biography" className="relative z-10 max-w-5xl scroll-mt-24">
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          <FadeIn>
            <div className="relative glass-strong rounded-2xl p-2 aspect-[4/5] h-fit glow-gold">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/headshot.png"
                  alt="Syed Shahid Hassan"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              {bioFull.split("\n\n").map((para, i) => (
                <p key={i} className="text-charcoal/70 leading-relaxed mb-5">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <blockquote className="glass-gold rounded-2xl p-8 italic text-xl font-serif text-navy/90 border-l-4 border-l-gold mt-8 max-w-3xl mx-auto">
            &ldquo;{pullQuote}&rdquo;
          </blockquote>
        </FadeIn>
      </Section>

      <Section id="timeline" className="relative z-10 scroll-mt-24">
        <FadeIn>
          <h2 className="font-serif text-3xl text-navy mb-6 text-center">Career Timeline</h2>
        </FadeIn>
        <div className="max-w-4xl mx-auto">
          <Timeline />
        </div>
      </Section>

      <Section id="education" className="relative z-10 scroll-mt-24">
        <FadeIn>
          <h2 className="font-serif text-3xl text-navy mb-6 text-center">
            Education, Certifications & <span className="text-gradient-gold">International Training</span>
          </h2>
        </FadeIn>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {credentials.map((c, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="glass rounded-2xl p-5 h-full hover:bg-white/80 transition-colors">
                <p className="font-serif text-base text-navy mb-1 leading-snug">{c.credential}</p>
                <p className="text-charcoal/55 text-sm">
                  {c.institution} &middot; {c.year}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="text-center text-charcoal/50 text-sm mt-5 max-w-2xl mx-auto">
            One of very few Pakistani law enforcement officers to have completed advanced forensic
            training abroad, giving him a globally-informed perspective rare in the Pakistani
            public service.
          </p>
        </FadeIn>
      </Section>

      <Section id="achievements" className="relative z-10 scroll-mt-24">
        <FadeIn>
          <h2 className="font-serif text-3xl text-navy mb-6 text-center">Key Achievements</h2>
        </FadeIn>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {achievements.map((a, i) => {
            const Icon = achievementIcons[i % achievementIcons.length];
            const accent = achievementAccents[i % achievementAccents.length];
            const [title, ...rest] = a.split(": ");
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="glass rounded-2xl p-5 h-full flex gap-4 hover:bg-white/80 transition-colors">
                  <div className={`w-10 h-10 rounded-lg ${accent.chip} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={accent.text} />
                  </div>
                  <div>
                    <p className="font-serif text-base text-navy mb-1 leading-snug">{title}</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{rest.join(": ")}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>
    </main>
  );
}

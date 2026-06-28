import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";
import InvestigationOverlay from "@/components/InvestigationOverlay";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  bioShort,
  credentials,
  credibilityStrip,
  featuredVideo,
  mediaItems,
  services,
} from "@/data/content";
import { ArrowRight } from "lucide-react";

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  return match ? match[1] : "";
}

export default function Home() {
  const pressItems = mediaItems.filter((m) => m.type === "press");

  return (
    <main>
      {/* Hero */}
      <Section className="pt-6 md:pt-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <FadeIn>
            <div className="glass-strong rounded-3xl p-8 md:p-11 relative overflow-hidden">
              <InvestigationOverlay />
              <div className="absolute -top-20 -left-20 w-56 h-56 bg-gold/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 right-0 w-44 h-44 bg-sky-400/15 rounded-full blur-3xl" />
              <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl" />
              <p className="relative z-10 text-gold uppercase tracking-widest text-xs md:text-sm font-medium mb-4">
                Former Additional Director, FIA &middot; International Consultant
              </p>
              <h1 className="relative z-10 font-serif text-4xl md:text-5xl leading-tight mb-5 text-balance text-navy">
                Decades of Service.
                <br />
                Now, <span className="text-gradient-gold">Shared Globally.</span>
              </h1>
              <p className="relative z-10 text-charcoal/65 text-lg leading-relaxed mb-7 max-w-lg">
                Since 1992, more than three decades investigating cybercrime and corruption
                inside Pakistan&apos;s federal law enforcement system, now extending to embassies
                and international missions on cross-border cases. He mentors the next generation
                of CSS and PPSC aspirants, and advises institutions on cybercrime, compliance, and
                digital economy matters.
              </p>
              <div className="relative z-10 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="glow-gold bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white px-6 py-3 rounded-xl font-medium hover:brightness-110 transition-all"
                >
                  Book a Session
                </Link>
                <Link
                  href="/services"
                  className="glass-sky text-sky-700 px-6 py-3 rounded-xl font-medium hover:bg-sky-50/60 backdrop-blur-xl transition-all"
                >
                  View Services
                </Link>
                <Link
                  href="/embassy-consultation"
                  className="glass-cyan text-cyan-700 px-6 py-3 rounded-xl font-medium hover:bg-cyan-50/60 backdrop-blur-xl transition-all"
                >
                  Embassy Consultation
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold/25 via-transparent to-navy/10 rounded-[2rem] blur-2xl" />
              <div className="relative glass-strong rounded-3xl p-3 aspect-[4/5] overflow-hidden glow-soft">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/headshot.png"
                    alt="Syed Shahid Hassan, Former Additional Director, FIA"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Stat strip */}
      <Section className="py-0 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: 34, suffix: "+", label: "Years of Service" },
            { value: services.length, suffix: "", label: "Specialist Service Areas" },
            { value: credentials.length, suffix: "", label: "International Training Credentials" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06}>
              <div className="glass rounded-2xl p-5 text-center h-full">
                <p className="font-serif text-3xl md:text-4xl text-gradient-gold mb-1">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-charcoal/55 text-xs md:text-sm uppercase tracking-wide">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.18}>
            <div className="glass rounded-2xl p-5 text-center h-full flex flex-col items-center justify-center">
              <p className="font-serif text-3xl md:text-4xl text-gradient-gold mb-1">Global</p>
              <p className="text-charcoal/55 text-xs md:text-sm uppercase tracking-wide">
                Embassy &amp; Cross-Border Engagements
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Credibility strip */}
      <Section className="py-0 pb-8">
        <FadeIn>
          <div className="glass rounded-2xl px-6 py-5 flex flex-wrap justify-center gap-x-10 gap-y-3">
            {credibilityStrip.map((item) => (
              <span key={item} className="text-navy/60 font-medium text-sm uppercase tracking-wide">
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* About teaser */}
      <Section className="max-w-3xl text-center">
        <FadeIn>
          <p className="text-lg leading-relaxed text-charcoal/70 mb-5">{bioShort}</p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-gold font-medium hover:text-navy transition-colors"
          >
            Read Full Story <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </Section>

      {/* Services grid */}
      <Section>
        <FadeIn>
          <h2 className="font-serif text-3xl text-navy text-center mb-10">
            How I Can <span className="text-gradient-gold">Help</span>
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Featured video */}
      <Section>
        <FadeIn>
          <h2 className="font-serif text-3xl text-navy text-center mb-6">Featured Interview</h2>
          <div className="max-w-3xl mx-auto glass-strong rounded-3xl p-3">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getYouTubeId(featuredVideo.url)}`}
                title={featuredVideo.title}
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-charcoal/50 text-sm mt-3">{featuredVideo.title}</p>
        </FadeIn>
      </Section>

      {/* Media mentions strip */}
      <Section>
        <FadeIn>
          <h2 className="font-serif text-2xl text-navy text-center mb-6">As Featured In</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {pressItems.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-navy/70 hover:text-gold hover:border-gold/40 font-medium text-sm rounded-xl px-5 py-3 transition-all"
              >
                {item.platform}
              </a>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <FadeIn>
          <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <InvestigationOverlay />
            <div className="absolute -bottom-28 right-1/4 w-72 h-72 bg-gold/15 rounded-full blur-3xl" />
            <div className="absolute -top-20 left-1/4 w-56 h-56 bg-emerald-400/12 rounded-full blur-3xl" />
            <h2 className="relative z-10 font-serif text-3xl md:text-4xl text-navy mb-6 text-balance max-w-2xl mx-auto">
              Ready to get guidance from someone who&apos;s been inside the system?
            </h2>
            <div className="relative z-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/book"
                className="inline-block glow-gold bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white px-8 py-3.5 rounded-xl font-medium hover:brightness-110 transition-all"
              >
                Book a Session
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </FadeIn>
      </Section>
    </main>
  );
}

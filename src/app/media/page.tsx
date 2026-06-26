import { Metadata } from "next";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import InvestigationOverlay from "@/components/InvestigationOverlay";
import { mediaItems } from "@/data/content";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Media | Syed Shahid Hassan",
  description:
    "Video appearances, press coverage, and official references for Syed Shahid Hassan, former Additional Director of the FIA.",
};

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  return match ? match[1] : "";
}

export default function MediaPage() {
  const videos = mediaItems.filter((m) => m.type === "video");
  const press = mediaItems.filter((m) => m.type === "press");

  return (
    <main>
      <Section className="pt-6 md:pt-10 pb-6">
        <FadeIn>
          <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <InvestigationOverlay />
            <div className="absolute -top-20 left-1/4 w-64 h-64 bg-sky-400/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 right-1/4 w-48 h-48 bg-gold/15 rounded-full blur-3xl" />
            <p className="relative z-10 text-gold uppercase tracking-widest text-xs md:text-sm font-medium mb-4">Media</p>
            <h1 className="relative z-10 font-serif text-4xl md:text-5xl text-navy">
              Press & Public <span className="text-gradient-gold">Appearances</span>
            </h1>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="font-serif text-3xl text-navy mb-8 text-center">Video</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-5">
          {videos.map((v, i) => (
            <FadeIn key={v.url} delay={i * 0.08}>
              <div className="glass rounded-2xl p-3">
                <div className="aspect-video rounded-xl overflow-hidden mb-3">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${getYouTubeId(v.url)}`}
                    title={v.title}
                    allowFullScreen
                  />
                </div>
                <p className="text-sm font-medium text-gold px-2">{v.platform}</p>
                <p className="text-sm text-charcoal/60 px-2 pb-2">{v.title}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="font-serif text-3xl text-navy mb-8 text-center">Press Coverage & Official References</h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto space-y-3">
          {press.map((p, i) => (
            <FadeIn key={p.url} delay={i * 0.06}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-start justify-between gap-4 rounded-2xl p-5 hover:border-gold/40 hover:bg-white/80 transition-all"
              >
                <div>
                  <p className="font-medium text-navy">{p.platform}</p>
                  <p className="text-sm text-charcoal/60">{p.title}</p>
                </div>
                <ExternalLink size={16} className="text-gold flex-shrink-0 mt-1" />
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>
    </main>
  );
}

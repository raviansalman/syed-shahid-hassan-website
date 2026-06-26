import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="px-4 md:px-6 pb-6 mt-16">
      <div className="glass max-w-6xl mx-auto rounded-3xl overflow-hidden">
        <div className="px-6 md:px-10 py-10 grid gap-10 md:grid-cols-[auto_1fr_1fr]">
          <div>
            <Logo />
            <p className="text-sm leading-relaxed text-charcoal/60 mt-4 max-w-xs">
              {siteConfig.title}.<br />
              {siteConfig.location}
            </p>
          </div>

          <div>
            <p className="text-gold font-medium mb-3 text-xs uppercase tracking-widest">Site</p>
            <ul className="space-y-2 text-sm text-charcoal/70">
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/media" className="hover:text-gold transition-colors">Media</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-gold font-medium mb-3 text-xs uppercase tracking-widest">Connect</p>
            <ul className="space-y-2 text-sm text-charcoal/70">
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  LinkedIn
                </a>
              </li>
              <li><Link href="/book" className="hover:text-gold transition-colors">Book a Session</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy/10 px-6 md:px-10 py-4 text-xs text-charcoal/45">
          © {new Date().getFullYear()} {siteConfig.name}. All services offered in a private,
          individual capacity, not on behalf of FIA or the Government of Pakistan.
        </div>
      </div>
    </footer>
  );
}

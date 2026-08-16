import { Instagram, Linkedin } from "lucide-react";
import logoLight from "@/assets/ebron-logo-light.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--ebron-green-dark)] text-[color:var(--ebron-cream)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-24 pb-10">
        <div className="grid gap-14 lg:grid-cols-3">
          <div>
            <img
              src={logoLight.url}
              alt="Ebron"
              className="h-14 w-auto"
              style={{ filter: "none" }}
            />
            <p className="mt-8 font-[family-name:var(--font-display)] italic text-2xl leading-snug text-[color:var(--ebron-cream)]">
              Clean energy for a sustainable future.
            </p>
            <p className="mt-4 text-[15px] text-[color:var(--ebron-cream)]/80 max-w-sm leading-relaxed">
              Ebron Sustainable Solution brings clean cookstoves, solar home
              systems, and off-grid energy to rural communities across Nigeria.
            </p>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--ebron-yellow)]">Explore</p>
            <ul className="mt-6 space-y-3 text-[15px]">
              {[
                ["Our Work", "/#our-work"],
                ["Impact", "/#impact"],
                ["Story", "/#story"],
                ["Team", "/#team"],
                ["Recognition", "/#recognition"],
                ["Blog", "/blog"],
                ["Partner With Us", "/partner"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="link-underline text-[color:var(--ebron-cream)]/90 hover:text-[color:var(--ebron-cream)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--ebron-yellow)]">Contact</p>
            <ul className="mt-6 space-y-3 text-[15px] text-[color:var(--ebron-cream)]/90">
              <li>
                <a href="mailto:hello@ebronsustainable.com" className="link-underline">
                  hello@ebronsustainable.com
                </a>
              </li>
              <li>+234 (0) 000 000 0000</li>
              <li className="leading-relaxed max-w-xs">
                Based in Nigeria. Serving rural communities across the South.
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-[color:var(--ebron-cream)] hover:text-[color:var(--ebron-yellow)] transition-colors">
                <Instagram size={20} strokeWidth={1.25} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[color:var(--ebron-cream)] hover:text-[color:var(--ebron-yellow)] transition-colors">
                <Linkedin size={20} strokeWidth={1.25} />
              </a>
              <a href="#" aria-label="X" className="text-[color:var(--ebron-cream)] hover:text-[color:var(--ebron-yellow)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[color:var(--ebron-cream)]/15 text-[13px] text-[color:var(--ebron-cream)]/70 flex flex-wrap gap-4 justify-between">
          <p>© 2026 Ebron Sustainable Solution.</p>
          <p>Nigeria</p>
        </div>
      </div>
    </footer>
  );
}

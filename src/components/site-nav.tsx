import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoGreen from "@/assets/ebron-logo-green.png.asset.json";
import logoLight from "@/assets/ebron-logo-light.png.asset.json";

const links = [
  { label: "Our Work", href: "/#our-work" },
  { label: "Impact", href: "/#impact" },
  { label: "Story", href: "/#story" },
  { label: "Team", href: "/#team" },
  { label: "Recognition", href: "/#recognition" },
  { label: "Partner", href: "/partner" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[color:var(--ebron-cream)]/90 backdrop-blur-md border-b border-[color:var(--ebron-muted)]/15"
            : "bg-[color:var(--ebron-cream)]/70 backdrop-blur-md border-b border-[color:var(--ebron-muted)]/10"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" aria-label="Ebron home">
            <img
              src={logoGreen.url}
              alt="Ebron Sustainable Solution"
              className="h-9 w-auto"
              style={{ filter: "none" }}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="link-underline text-[15px] text-[color:var(--ebron-charcoal)] hover:text-[color:var(--ebron-green-dark)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="inline-flex items-center rounded-full bg-[color:var(--ebron-green)] hover:bg-[color:var(--ebron-green-dark)] text-[color:var(--ebron-cream)] px-5 py-2.5 text-[14px] font-medium tracking-wide transition-colors"
            >
              Get In Touch
            </a>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-[color:var(--ebron-green-dark)]"
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={1.25} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-[color:var(--ebron-green-dark)] text-[color:var(--ebron-cream)] flex flex-col">
          <div className="flex items-center justify-between h-20 px-6">
            <img
              src={logoLight.url}
              alt="Ebron"
              className="h-9 w-auto"
              style={{ filter: "none" }}
            />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X size={28} strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-start justify-center gap-6 px-8 pb-16">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-display)] italic text-5xl text-[color:var(--ebron-cream)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center rounded-full bg-[color:var(--ebron-green)] px-6 py-3 text-[color:var(--ebron-cream)]"
            >
              Get In Touch
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

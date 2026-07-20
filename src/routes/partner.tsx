import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { FadeUp } from "@/lib/fade-up";
import solarWater from "@/assets/solar-water.png.asset.json";
import cookstoveImg from "@/assets/ecozoom-stove.png.asset.json";
import solarHome from "@/assets/solar-home.jpg";

export const Route = createFileRoute("/partner")({
  component: PartnerPage,
  head: () => ({
    meta: [
      { title: "Partner with Ebron — Sustainable Solution" },
      {
        name: "description",
        content:
          "For NGOs, government agencies, corporate ESG teams, and philanthropic funders looking to expand access to clean energy and clean cooking in rural Nigeria.",
      },
      { property: "og:title", content: "Partner with Ebron" },
      { property: "og:description", content: "Fund, distribute, or build alongside Ebron in rural Nigeria." },
      { property: "og:url", content: "/partner" },
    ],
    links: [{ rel: "canonical", href: "/partner" }],
  }),
});

const partnerTypes = [
  {
    label: "Funding",
    title: "Funding Partners",
    image: solarHome.url,
    body: "Deploy capital toward measurable impact in rural health, gender, and climate.",
  },
  {
    label: "Distribution",
    title: "Distribution Partners",
    image: cookstoveImg.url,
    body: "Cooperatives, NGOs, and community organizations that can help us reach new areas.",
  },
  {
    label: "Government",
    title: "Government and Institutional Partners",
    image: solarWater.url,
    body: "Local government councils and agencies working on rural electrification, women's health, and climate resilience.",
  },
];

const process = [
  { n: "01", title: "Initial conversation", body: "A first call to understand your goals, timelines, and the region or population you want to reach." },
  { n: "02", title: "Community needs assessment", body: "We meet with community leaders, women's savings groups, and elders to map out what is actually needed on the ground." },
  { n: "03", title: "Pilot program", body: "A small, well-scoped deployment we can measure together, with real households and real feedback." },
  { n: "04", title: "Long-term deployment", body: "Once the pilot works, we scale it, with ongoing maintenance, spare parts, and community ambassadors in place." },
];

function PartnerPage() {
  return (
    <div className="bg-[color:var(--ebron-cream)] text-[color:var(--ebron-charcoal)]">
      <SiteNav />

      {/* HERO */}
      <section className="bg-[color:var(--ebron-cream)] pt-40 md:pt-52 pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <FadeUp>
            <p className="eyebrow">For Partners And Funders</p>
            <h1 className="mt-6 max-w-4xl" style={{ fontSize: "clamp(44px, 7vw, 72px)", fontWeight: 400, lineHeight: 1.02 }}>
              Partner with Ebron.
            </h1>
            <p className="mt-8 max-w-2xl text-[19px] leading-relaxed text-[color:var(--ebron-charcoal)]">
              We work with NGOs, government agencies, corporate ESG teams, and
              philanthropic funders to expand access to clean cookstoves, solar
              home systems, and off-grid energy across rural Nigeria. If you
              are exploring where your work and ours could meet, we would like
              to talk.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* WAYS TO PARTNER */}
      <section className="bg-[color:var(--ebron-sand)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-28 md:py-40">
          <FadeUp>
            <p className="eyebrow">Ways To Partner</p>
            <h2 className="mt-4" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400 }}>
              Three ways to work with us.
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {partnerTypes.map((p, i) => (
              <FadeUp key={p.title} delay={i * 90}>
                <article className="bg-[color:var(--ebron-cream)] border border-[color:var(--ebron-muted)]/20 rounded-[4px] overflow-hidden h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-[color:var(--ebron-sand)]">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-7 md:p-8">
                    <p className="eyebrow">{p.label}</p>
                    <h3 className="mt-3" style={{ fontSize: 26, fontWeight: 400 }}>
                      {p.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--ebron-charcoal)]">
                      {p.body}
                    </p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[color:var(--ebron-cream)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-28 md:py-40 grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:sticky lg:top-28 self-start">
            <FadeUp>
              <p className="eyebrow">The Process</p>
              <h2 className="mt-4" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400 }}>
                What partnership looks like.
              </h2>
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-[color:var(--ebron-charcoal)]">
                Every partnership starts with a conversation and moves at the
                pace the community requires. Here is roughly how it unfolds.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-3 space-y-14">
            {process.map((p, i) => (
              <FadeUp key={p.n} delay={i * 60}>
                <div className="flex gap-6 md:gap-8">
                  <div className="font-[family-name:var(--font-display)] italic text-[color:var(--ebron-yellow)] leading-none" style={{ fontSize: 40 }}>
                    {p.n}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 24, fontWeight: 400 }}>{p.title}</h3>
                    <p className="mt-3 text-[17px] leading-relaxed text-[color:var(--ebron-charcoal)]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[color:var(--ebron-sand)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-28 md:py-40 grid gap-14 lg:grid-cols-2">
          <FadeUp>
            <p className="eyebrow">Start The Conversation</p>
            <h2 className="mt-4" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400 }}>
              Tell us about your work.
            </h2>
            <p className="mt-8 max-w-md text-[18px] leading-relaxed text-[color:var(--ebron-charcoal)]">
              Send us a short note about your organization and where you would
              like to explore working together. A member of the Ebron team will
              be in touch.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <ContactForm defaultRole="Partner or funder" defaultSubject="Partnership enquiry" />
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

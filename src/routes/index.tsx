import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Modal } from "@/components/modal";
import { ContactForm } from "@/components/contact-form";
import { FadeUp } from "@/lib/fade-up";
import heroImg from "@/assets/hero-woman.png.asset.json";
import cookstoveImg from "@/assets/ecozoom-stove.png.asset.json";
import cookstoveBig from "@/assets/cookstove.jpg.asset.json";
import solarHome from "@/assets/solar-home.jpg";
import solarWater from "@/assets/solar-water.png.asset.json";
import boyFire from "@/assets/boy-fire.png.asset.json";
import amakaPortrait from "@/assets/amaka-portrait.jpg";
import nnennaImg from "@/assets/nnenna.png.asset.json";
import abimbolaImg from "@/assets/abimbola.jpg.asset.json";
import aruotureImg from "@/assets/aruoture.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
  }),
});

type Offering = {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  imageBig: string;
  card: string;
  subject: string;
  ctaLabel: string;
  sections: { label: string; body: string }[];
};

const offerings: Offering[] = [
  {
    id: "cookstoves",
    eyebrow: "Clean Cookstoves",
    title: "Clean Cookstoves",
    image: cookstoveImg.url,
    imageBig: cookstoveBig.url,
    card:
      "Our clean cookstoves use far less firewood than open fires and cut smoke inside the home significantly. They are designed to work with the pots and cooking styles rural households already use, so families do not have to change how they cook to benefit from the switch.",
    subject: "Cookstove enquiry",
    ctaLabel: "Ask us about a cookstove",
    sections: [
      {
        label: "What's included",
        body: "The stove itself, a training session for the primary cook, spare parts availability in the community, and follow-up visits during the first three months of use.",
      },
      {
        label: "How families use it",
        body: "Our stoves work with the pots and cooking methods that are already part of daily life in rural homes. Most families cut their firewood use by around half and report significantly less smoke in the kitchen.",
      },
      {
        label: "How the financing works",
        body: "Small installment payments arranged through community savings groups (esusu, ajo). Payment schedules are set with each household based on how income comes in through the year.",
      },
      {
        label: "What happens after installation",
        body: "We stay in contact through community ambassadors, most of whom cook on our stoves in their own homes. Repairs, spare parts, and additional training remain available as part of the ongoing relationship.",
      },
    ],
  },
  {
    id: "solar",
    eyebrow: "Solar Home Systems",
    title: "Solar Home Systems",
    image: solarHome,
    imageBig: solarHome,
    card:
      "Solar systems sized for rural households: reliable lighting after dark, phone charging, and enough power for fans and small appliances. Every system is installed by our team, and we stay in contact after setup to handle maintenance and upgrades.",
    subject: "Solar home system enquiry",
    ctaLabel: "Ask us about a solar system",
    sections: [
      {
        label: "What's included",
        body: "Solar panel or panels, battery storage, wiring, LED lighting, and phone-charging ports. Larger systems can also power fans, radios, and small appliances. Full installation is included.",
      },
      {
        label: "How we size the system",
        body: "We meet with the household first to understand what is actually needed. Some families want lighting and phone charging only. Others want power for a small business or fans during hot months. Every system is sized accordingly.",
      },
      {
        label: "How the financing works",
        body: "Same flexible installment plans as our cookstoves, structured through community savings groups.",
      },
      {
        label: "What happens after installation",
        body: "We handle maintenance, offer upgrades as households need more power, and keep spare parts stocked with community ambassadors.",
      },
    ],
  },
  {
    id: "offgrid",
    eyebrow: "Off-Grid Community Solutions",
    title: "Off-Grid Community Solutions",
    image: solarWater.url,
    imageBig: solarWater.url,
    card:
      "For projects larger than a single home: water pumping, shared solar for clinics or schools, streetlights, and business power for market vendors. We plan these projects alongside community leaders and cooperatives, sized to what the community actually needs.",
    subject: "Community project enquiry",
    ctaLabel: "Ask us about a community project",
    sections: [
      {
        label: "What we build",
        body: "Solar-powered water pumps, streetlights, shared solar for clinics or schools, and business-scale power for market vendors and small enterprises.",
      },
      {
        label: "How we start",
        body: "We begin by meeting with community leaders, cooperatives, and local government to understand which needs come first. Nothing is planned until those conversations have happened.",
      },
      {
        label: "How each project is designed",
        body: "Every deployment is specific to the community. There are no template projects. Sizing, siting, and ownership models are all worked out with the community involved.",
      },
      {
        label: "Partnership",
        body: "Larger installations usually involve a partner (an NGO, cooperative, or government agency) who helps sustain the system long-term. We build the partnership into the plan from the beginning.",
      },
    ],
  },
];

const approach = [
  {
    n: "01",
    title: "LISTEN FIRST",
    body: "Before we suggest anything, we spend time with community leaders, women's savings groups, and elders. We want to understand how families cook, what they currently spend on fuel, and what they would actually want from a change.",
  },
  {
    n: "02",
    title: "SHOW, DON'T SELL",
    body: "We cook a real meal on the stove in a real kitchen, so the person who cooks every day can feel the difference before she is ever asked to buy. No brochures, no slideshows.",
  },
  {
    n: "03",
    title: "FINANCE FOR REAL INCOMES",
    body: "Most rural households cannot pay for a stove or solar system upfront. We offer installment plans through community savings groups, so payments line up with harvests, market days, and other income patterns.",
  },
  {
    n: "04",
    title: "STAY AFTER INSTALLATION",
    body: "The relationship does not end when the stove is delivered. We provide spare parts, additional training, and connect households with community ambassadors who can help neighbors with questions as they come up.",
  },
];

const stats = [
  { num: "4–6 HRS", label: "daily firewood gathering, eliminated per household" },
  { num: "~50%", label: "reduction in cooking fuel consumption" },
  { num: "0", label: "kerosene lamps in homes we've electrified" },
  { num: "6", label: "people, on average, whose daily life changes per stove installed" },
];

const values = [
  ["Community", "Shared progress through local cooperation and participation."],
  ["Empowerment", "Communities with the resources to shape their own futures."],
  ["Sustainability", "Solutions that protect the environment for the next generation."],
  ["Accessibility", "Clean energy and clean cooking that rural households can afford and use."],
  ["Collaboration", "Partnerships built on trust and long-term commitment."],
  ["Trustworthiness", "Confidence earned through transparency and results."],
  ["Inclusiveness", "Every person treated with equal respect, regardless of background or status."],
];

const team = [
  {
    name: "Nnenna Ebem",
    role: "Chief Executive Officer",
    photo: nnennaImg.url,
    bio: "Nnenna is a lawyer with a background in energy policy and clean-energy advocacy. She studied law at the University of Uyo and the Nigerian Law School, and has worked with the Nigerian Electricity Regulatory Commission, the Renewable Energy and Energy Efficiency Alliance of Nigeria, and Talba & Co on energy law matters. She co-founded Youthspire Africa and volunteers with climate advocacy groups. At Ebron, she leads strategy and manages relationships with regulators and policy partners.",
  },
  {
    name: "Abimbola Abe",
    role: "Chief Operating Officer",
    photo: abimbolaImg.url,
    bio: "Abimbola runs Ebron's day-to-day operations, marketing, and customer relationships. She is a marketing professional and sustainability advocate, currently studying at Nexford University and certified in Green Digital Skills. Before Ebron, she led customer acquisition in the renewable energy sector, and she co-founded Youthspire, a nonprofit training young people in climate action.",
  },
  {
    name: "Aruoture Akpofure, Esq.",
    role: "Managing Director (Volunteer)",
    // Placeholder portrait until a real photo is available.
    photo: aruotureImg,
    bio: "Aruoture is a corporate lawyer with seven years of experience and a specialization in Nigerian renewable-energy regulation. He advises Ebron pro bono on corporate governance, compliance, and the licensing requirements that come with off-grid energy work. He is a member of the Nigerian Bar Association and the Chartered Institute of Arbitrators, and serves on the directorate of the Policy Round Table.",
  },
];

function HomePage() {
  const [activeOffering, setActiveOffering] = useState<Offering | null>(null);
  const [contactSubject, setContactSubject] = useState<string | undefined>();
  const contactRef = useRef<HTMLElement | null>(null);

  const openContactWithSubject = (subject: string) => {
    setContactSubject(subject);
    setActiveOffering(null);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="bg-[color:var(--ebron-cream)] text-[color:var(--ebron-charcoal)]">
      <SiteNav />

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[100dvh] w-full overflow-hidden flex items-end"
      >
        <img
          src={heroImg.url}
          alt="A woman carrying firewood home at golden hour in rural Nigeria"
          className="absolute inset-0 h-full w-full object-cover kenburns"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top right, rgba(31,76,44,0.65), rgba(31,76,44,0.2) 55%, transparent 90%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 lg:px-10 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "var(--ebron-yellow)" }}>
              Clean Cookstoves · Solar Home Systems · Off-Grid Power
            </p>
            <h1
              className="mt-6 text-[color:var(--ebron-cream)]"
              style={{
                fontSize: "clamp(52px, 8vw, 104px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              Clean energy and clean cooking for rural Nigeria.
            </h1>
            <p className="mt-8 max-w-2xl text-[18px] md:text-[20px] leading-relaxed text-[color:var(--ebron-cream)]/90">
              We partner with rural communities across Nigeria to bring clean
              cookstoves, solar home systems, and off-grid energy through
              education, trust, and financing that meets families where they
              are.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#our-work"
                className="inline-flex items-center rounded-full bg-[color:var(--ebron-green)] hover:bg-[color:var(--ebron-green-dark)] text-[color:var(--ebron-cream)] px-7 py-3.5 text-[15px] font-medium transition-colors"
              >
                See Our Work
              </a>
              <a
                href="/partner"
                className="inline-flex items-center rounded-full border border-[color:var(--ebron-cream)]/70 hover:border-[color:var(--ebron-cream)] text-[color:var(--ebron-cream)] px-7 py-3.5 text-[15px] font-medium transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-[color:var(--ebron-cream)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-32 md:py-44">
          <FadeUp className="max-w-[900px] mx-auto text-center">
            <p
              className="font-[family-name:var(--font-display)] text-[color:var(--ebron-green-dark)]"
              style={{ fontSize: "clamp(24px, 3.2vw, 32px)", lineHeight: 1.35, fontWeight: 400 }}
            >
              Millions of families in rural Nigeria still cook over open fires
              and rely on kerosene lamps after dark. That means hours spent
              gathering firewood, smoke inside the home, and health problems
              that a different technology would prevent. We are working to
              change that, one household at a time.
            </p>
            <div className="mt-12 mx-auto h-[3px] w-20 bg-[color:var(--ebron-yellow)]" />
          </FadeUp>
        </div>
      </section>

      {/* OUR WORK */}
      <section id="our-work" className="bg-[color:var(--ebron-sand)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-32 md:py-44">
          <FadeUp>
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-4 text-[color:var(--ebron-green-dark)]" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400 }}>
              Three ways we work with rural households.
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {offerings.map((o, i) => (
              <FadeUp key={o.id} delay={i * 90}>
                <article className="bg-[color:var(--ebron-cream)] border border-[color:var(--ebron-muted)]/20 rounded-[4px] overflow-hidden h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden bg-[color:var(--ebron-sand)]">
                    <img
                      src={o.image}
                      alt={o.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-7 md:p-8 flex flex-col flex-1">
                    <p className="eyebrow">{o.eyebrow}</p>
                    <h3
                      className="mt-3 font-[family-name:var(--font-display)] text-[color:var(--ebron-green-dark)]"
                      style={{ fontSize: 28, fontWeight: 400, lineHeight: 1.15 }}
                    >
                      {o.title}
                    </h3>
                    <p className="mt-4 text-[color:var(--ebron-charcoal)] text-[16px] leading-relaxed flex-1">
                      {o.card}
                    </p>
                    <button
                      onClick={() => setActiveOffering(o)}
                      className="link-underline mt-6 self-start text-[15px] text-[color:var(--ebron-green-dark)] font-medium"
                    >
                      Learn more →
                    </button>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="approach" className="bg-[color:var(--ebron-cream)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-32 md:py-44 grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:sticky lg:top-28 self-start">
            <FadeUp>
              <p className="eyebrow">How We Work</p>
              <h2 className="mt-4" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400 }}>
                Our approach.
              </h2>
              <p className="mt-8 text-[17px] leading-relaxed max-w-md text-[color:var(--ebron-charcoal)]">
                The families we work with do not need a sales pitch. What they
                need is to see the technology work in a home like theirs, from
                someone they already trust. That shapes how we do everything.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-3 space-y-14">
            {approach.map((a, i) => (
              <FadeUp key={a.n} delay={i * 60}>
                <div className="flex gap-6 md:gap-8">
                  <div
                    className="font-[family-name:var(--font-display)] italic text-[color:var(--ebron-yellow)] leading-none"
                    style={{ fontSize: 40 }}
                  >
                    {a.n}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 24, fontWeight: 400 }}>{a.title}</h3>
                    <p className="mt-3 text-[17px] leading-relaxed text-[color:var(--ebron-charcoal)]">
                      {a.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="bg-[color:var(--ebron-green-dark)] text-[color:var(--ebron-cream)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-32 md:py-44">
          <FadeUp>
            <p className="eyebrow" style={{ color: "var(--ebron-yellow)" }}>
              What We're Tracking
            </p>
            <h2 className="mt-4 text-[color:var(--ebron-cream)]" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400 }}>
              The change we can measure.
            </h2>
          </FadeUp>

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 80}>
                <div>
                  <div
                    className="font-[family-name:var(--font-display)] text-[color:var(--ebron-yellow)]"
                    style={{ fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.02em" }}
                  >
                    {s.num}
                  </div>
                  <p className="mt-5 eyebrow text-[color:var(--ebron-cream)]" style={{ letterSpacing: "0.14em" }}>
                    {s.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <p className="mt-24 text-center font-[family-name:var(--font-display)] italic text-[color:var(--ebron-cream)]/90" style={{ fontSize: 24, fontWeight: 400 }}>
              When Ifeoma stopped cooking on an open fire, her youngest stopped
              coughing at breakfast.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STORY FROM FIELD */}
      <section className="bg-[color:var(--ebron-sand)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-32 md:py-44 grid gap-14 lg:grid-cols-2 items-center">
          <FadeUp>
            <div className="aspect-[3/4] w-full overflow-hidden bg-[color:var(--ebron-cream)]">
              <img
                src={amakaPortrait}
                alt="Amaka in her kitchen"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="eyebrow">From the Field</p>
            <h2 className="mt-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400 }}>
              Amaka's story.
            </h2>
            <div className="mt-8 space-y-6 text-[18px] leading-relaxed text-[color:var(--ebron-charcoal)]">
              <p>
                Amaka is a mother of four in Imo State. Her days used to start
                before dawn, with four hours spent gathering firewood before
                she could even begin cooking. She spent the rest of the morning
                over an open fire, breathing smoke that gave her children coughs
                and left burns on her own hands.
              </p>
              <p>
                Amaka now cooks on one of our stoves, which she decided to buy
                after seeing her neighbor use one. She pays for it in small
                installments through her savings group. She has hours back in
                her day that she did not have before, and her kitchen is no
                longer full of smoke.
              </p>
              <p className="font-[family-name:var(--font-display)] italic text-[color:var(--ebron-green-dark)]" style={{ fontSize: 22 }}>
                "I did not know cooking could be like this. I did not know I
                could have this time back."
              </p>
            </div>
            <a href="#" className="link-underline mt-10 inline-block text-[15px] text-[color:var(--ebron-green-dark)] font-medium">
              Read more stories →
            </a>
          </FadeUp>
        </div>
      </section>

      {/* HOW EBRON STARTED */}
      <section id="story" className="bg-[color:var(--ebron-cream)]">
        <div className="mx-auto max-w-[800px] px-6 lg:px-10 py-32 md:py-44">
          <FadeUp>
            <p className="eyebrow">The Story</p>
            <h2 className="mt-4" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400 }}>
              How Ebron started.
            </h2>
          </FadeUp>
          <FadeUp delay={60}>
            <div className="mt-10 space-y-7 text-[18px] leading-relaxed text-[color:var(--ebron-charcoal)]">
              <p>
                Ebron started because our founder grew up seeing what it costs
                a household to live without clean energy. On visits to family
                in the rural south, she watched women spend hours gathering
                firewood and cooking over smoky open fires. She saw children
                coughing beside them, and evenings pass in complete darkness
                once the sun went down.
              </p>
              <p>
                She also saw how much these communities were already doing for
                themselves. The savings circles, the mutual support, the
                ambition parents held for their children. The problem was not
                a lack of resourcefulness. The problem was that affordable
                clean-energy technology already existed elsewhere, and it was
                not reaching the households that needed it.
              </p>
              <p>
                Ebron was built to close that gap. We work alongside the
                households and communities we serve. We listen first,
                demonstrate in real kitchens, offer financing that fits how
                income actually comes in, and stay reachable long after
                installation.
              </p>
              <p>
                That is the work. Simple to describe, harder to do well, and
                worth doing right.
              </p>
              <p className="pt-4 text-[color:var(--ebron-muted)] text-[15px]">
                — The Ebron team, Nigeria
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-[color:var(--ebron-cream)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pb-32 md:pb-44">
          <FadeUp>
            <p className="eyebrow">The Team</p>
            <h2 className="mt-4" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400 }}>
              The team.
            </h2>
            <p className="mt-6 max-w-[640px] text-[18px] leading-relaxed text-[color:var(--ebron-muted)]">
              Ebron is a small team with backgrounds in law, energy policy,
              marketing, and community advocacy. Here's who's building the work.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {team.map((m, i) => (
              <FadeUp key={m.name} delay={i * 80}>
                <div>
                  <div className="aspect-[4/5] w-full overflow-hidden bg-[color:var(--ebron-sand)]">
                    <img
                      src={m.photo}
                      alt={`Portrait of ${m.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6" style={{ fontSize: 26, fontWeight: 400 }}>
                    {m.name}
                  </h3>
                  <p className="eyebrow mt-2">{m.role}</p>
                  <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--ebron-charcoal)]">
                    {m.bio}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[color:var(--ebron-sand)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-32 md:py-44">
          <FadeUp>
            <p className="eyebrow">What We Stand On</p>
            <h2 className="mt-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400 }}>
              Our values.
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {values.map(([name, desc], i) => (
              <FadeUp key={name} delay={i * 50}>
                <div className="flex gap-6">
                  <div
                    className="font-[family-name:var(--font-display)] italic text-[color:var(--ebron-yellow)] leading-none"
                    style={{ fontSize: 32 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 24, fontWeight: 400 }}>{name}</h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-[color:var(--ebron-charcoal)]">
                      {desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-[color:var(--ebron-green)] text-[color:var(--ebron-cream)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-32 md:py-44 text-center">
          <FadeUp>
            <p className="eyebrow text-[color:var(--ebron-green-dark)]" style={{ color: "var(--ebron-green-dark)" }}>
              Partner With Us
            </p>
            <h2 className="mt-4 text-[color:var(--ebron-cream)] max-w-4xl mx-auto" style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 400, lineHeight: 1.05 }}>
              Help us reach more households.
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-[18px] leading-relaxed text-[color:var(--ebron-cream)]/92">
              We are always looking for partners: NGOs, government agencies,
              funders, corporate teams, and community organizations who want to
              help expand access to clean energy and clean cooking in rural
              Nigeria.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="/partner"
                className="inline-flex items-center rounded-full bg-[color:var(--ebron-green-dark)] hover:bg-[color:var(--ebron-charcoal)] text-[color:var(--ebron-cream)] px-7 py-3.5 text-[15px] font-medium transition-colors"
              >
                Become a Partner
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-[color:var(--ebron-cream)] text-[color:var(--ebron-cream)] hover:bg-[color:var(--ebron-cream)]/10 px-7 py-3.5 text-[15px] font-medium transition-colors"
              >
                Contact the Team
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef} className="bg-[color:var(--ebron-cream)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-32 md:py-44 grid gap-16 lg:grid-cols-2">
          <FadeUp>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-4" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400 }}>
              Get in touch.
            </h2>
            <p className="mt-8 max-w-md text-[18px] leading-relaxed text-[color:var(--ebron-charcoal)]">
              Whether you lead a community, work with a partner organization,
              write about clean energy, or are simply curious about the work,
              we would like to hear from you.
            </p>
            <div className="mt-10 space-y-3 text-[16px] text-[color:var(--ebron-charcoal)]">
              <p>
                <span className="eyebrow block mb-1">Email</span>
                <a href="mailto:hello@ebronsustainable.com" className="link-underline">
                  hello@ebronsustainable.com
                </a>
              </p>
              <p>
                <span className="eyebrow block mb-1">Phone</span>
                +234 (0) 000 000 0000
              </p>
              <p>
                <span className="eyebrow block mb-1">Location</span>
                Nigeria. Serving rural communities across the South.
              </p>
            </div>
            <div className="mt-14 aspect-[4/3] w-full max-w-md overflow-hidden">
              <img src={boyFire.url} alt="A boy tending a cooking fire" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <ContactForm defaultSubject={contactSubject} />
          </FadeUp>
        </div>
      </section>

      <SiteFooter />

      {/* Offering modals */}
      {activeOffering && (
        <Modal
          open={true}
          onClose={() => setActiveOffering(null)}
          labelledBy="offering-title"
        >
          <div className="aspect-[16/10] w-full overflow-hidden bg-[color:var(--ebron-sand)]">
            <img src={activeOffering.imageBig} alt={activeOffering.title} className="h-full w-full object-cover" />
          </div>
          <p className="eyebrow mt-8">{activeOffering.eyebrow}</p>
          <h3
            id="offering-title"
            className="mt-3"
            style={{ fontSize: 40, fontWeight: 400, lineHeight: 1.05 }}
          >
            {activeOffering.title}
          </h3>
          <div className="mt-8 space-y-6">
            {activeOffering.sections.map((s) => (
              <div key={s.label}>
                <p className="eyebrow">{s.label}</p>
                <p className="mt-2 text-[16px] leading-relaxed text-[color:var(--ebron-charcoal)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => openContactWithSubject(activeOffering.subject)}
            className="mt-10 inline-flex items-center rounded-full bg-[color:var(--ebron-green)] hover:bg-[color:var(--ebron-green-dark)] text-[color:var(--ebron-cream)] px-7 py-3.5 text-[15px] font-medium transition-colors"
          >
            {activeOffering.ctaLabel}
          </button>
        </Modal>
      )}
    </div>
  );
}

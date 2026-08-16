import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { FadeUp } from "@/lib/fade-up";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
  head: () => ({
    meta: [
      { title: "Journal — Ebron Sustainable Solution" },
      {
        name: "description",
        content:
          "Notes, milestones, and field updates from Ebron Sustainable Solution's clean energy work across rural Nigeria.",
      },
      { property: "og:title", content: "Ebron Journal" },
      {
        property: "og:description",
        content:
          "Notes, milestones, and field updates from Ebron's clean energy work in rural Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogIndexPage() {
  return (
    <div className="bg-[color:var(--ebron-cream)] text-[color:var(--ebron-charcoal)]">
      <SiteNav />
      <section className="pt-40 md:pt-52">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <FadeUp>
            <p className="eyebrow">Journal</p>
            <h1
              className="mt-4"
              style={{ fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 400 }}
            >
              Notes from the work.
            </h1>
            <p
              className="mt-4 text-[18px] leading-relaxed text-[color:var(--ebron-muted)]"
              style={{ maxWidth: 640 }}
            >
              Milestones, recognitions, and field updates from our clean energy
              work with rural communities across Nigeria.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 mt-16 md:mt-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <FadeUp key={post.slug} delay={(i % 3) * 60}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group block"
                >
                  <div
                    className="w-full overflow-hidden rounded-[4px] bg-[color:var(--ebron-muted)]/10"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{
                        objectPosition: post.imagePos,
                        filter: "saturate(0.97) contrast(1.02)",
                      }}
                    />
                  </div>
                  <p
                    className="text-[color:var(--ebron-green)]"
                    style={{
                      marginTop: 24,
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.category} · {post.dateLabel}
                  </p>
                  <h2
                    className="mt-2 font-[family-name:var(--font-display)] text-[24px] leading-snug"
                    style={{ fontWeight: 400 }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--ebron-muted)]">
                    {post.subtitle}
                  </p>
                  <span className="mt-4 inline-block text-[14px] text-[color:var(--ebron-green-dark)] link-underline">
                    Read more
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

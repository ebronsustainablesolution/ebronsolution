import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { FadeUp } from "@/lib/fade-up";
import { getPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Post not found — Ebron Journal" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Ebron Journal` },
        { name: "description", content: post.subtitle },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.subtitle },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="bg-[color:var(--ebron-cream)] text-[color:var(--ebron-charcoal)]">
      <SiteNav />
      <section className="pt-48 pb-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400 }}>
            We couldn't find that post.
          </h1>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center rounded-full bg-[color:var(--ebron-green)] px-6 py-3 text-[color:var(--ebron-cream)]"
          >
            Back to the journal
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="bg-[color:var(--ebron-cream)] text-[color:var(--ebron-charcoal)]">
      <SiteNav />

      <article className="pt-40 md:pt-52">
        <div className="mx-auto max-w-[760px] px-6">
          <FadeUp>
            <p
              className="text-[color:var(--ebron-green)]"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {post.category} · {post.dateLabel}
            </p>
            <h1
              className="mt-4"
              style={{ fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 400 }}
            >
              {post.title}
            </h1>
            <p className="mt-6 text-[19px] leading-relaxed text-[color:var(--ebron-muted)]">
              {post.subtitle}
            </p>
          </FadeUp>
        </div>

        <div className="mx-auto max-w-[1080px] px-6 lg:px-10 mt-12 md:mt-16">
          <FadeUp>
            <div
              className="w-full overflow-hidden rounded-[4px]"
              style={{ aspectRatio: "16 / 10" }}
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                className="h-full w-full object-cover"
                style={{
                  objectPosition: post.imagePos,
                  filter: "saturate(0.97) contrast(1.02)",
                }}
              />
            </div>
          </FadeUp>
        </div>

        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
          {post.body.map((para, i) => (
            <FadeUp key={i}>
              <p className="mb-7 text-[17px] leading-[1.75] text-[color:var(--ebron-charcoal)]">
                {para}
              </p>
            </FadeUp>
          ))}

          <div className="mt-10 pt-8 border-t border-[color:var(--ebron-muted)]/20">
            <Link
              to="/blog"
              className="text-[15px] text-[color:var(--ebron-green-dark)] link-underline"
            >
              ← Back to the journal
            </Link>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

import recAward from "@/assets/recognition/commitment_award_2026.jpeg.asset.json";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  subtitle: string;
  image: string;
  imagePos: string;
  imageAlt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "commitment-award-2026",
    title: "Commitment Award 2026 · University of Erfurt",
    category: "Awards",
    date: "2026-07-26",
    dateLabel: "July 2026",
    subtitle:
      "Our CEO received the Commitment Award 2026 at the Willy Brandt School of Public Policy, University of Erfurt, in recognition of sustained work on clean energy and community development.",
    image: recAward.url,
    imagePos: "center 40%",
    imageAlt: "Commitment Award 2026 ceremony at the University of Erfurt",
    body: [
      "We're proud to share that our CEO has been honored with the Commitment Award 2026 at the Willy Brandt School of Public Policy, University of Erfurt, Germany. The award recognizes individuals whose work reflects a genuine, sustained commitment to social and environmental impact, not a single project, but a body of work built over years.",
      "That work has taken many forms: clean cookstove initiatives that reduce indoor air pollution and cut household energy costs, community development programs that put decision-making in the hands of the people they serve, and environmental protection efforts designed to scale far beyond any one region. What connects all of it is a simple belief: that sustainability and empowerment aren't separate goals. Communities thrive when they have both the tools and the agency to shape their own future.",
      "This recognition belongs to everyone who has contributed to that mission, our team, our partners, and the communities who trusted us to work alongside them. It's a meaningful milestone, and also a reminder of how much more there is to do.",
      "We're grateful to the Willy Brandt School of Public Policy for this honor. It strengthens our resolve to keep building solutions that are both scalable and genuinely rooted in the needs of the people they're meant to serve.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

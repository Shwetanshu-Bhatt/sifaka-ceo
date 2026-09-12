export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  paragraphs: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "building-a-technology-company-from-scratch",
    title: "What I Learned Building a Technology Company from Scratch",
    description: "The practical lessons that shaped how I think about people, products, and progress at Sifaka Labs.",
    date: "2026-09-12",
    readTime: "5 min read",
    paragraphs: [
      "Building a company begins with an idea, but it is sustained by a thousand small decisions. The early stage is less about having every answer and more about learning how to ask better questions.",
      "The most useful shift for me has been moving from proving that an idea is good to discovering whether it is useful. Conversations with real people, small prototypes, and honest feedback create more clarity than a polished plan made in isolation.",
      "A technology company is ultimately a people company. The quality of the work depends on the quality of the conversations: clear ownership, direct feedback, and enough trust for someone to challenge the obvious path.",
      "There is no finish line where building becomes easy. The work is to keep the ambition high, keep the learning loop short, and make the next thoughtful decision.",
    ],
  },
  {
    slug: "how-ai-is-changing-business",
    title: "How AI Is Changing the Way Businesses Operate",
    description: "AI is becoming part of everyday business infrastructure. The opportunity is larger than adding a chatbot to a website.",
    date: "2026-09-12",
    readTime: "6 min read",
    paragraphs: [
      "AI is moving from an impressive demonstration to a practical layer in modern businesses. It can help teams understand information, reduce repetitive work, and make decisions with more context.",
      "The strongest implementations begin with workflow, not technology. Before choosing a model, a business should understand where time is lost, where judgment is repeated, and where better information would change an outcome.",
      "This also changes the role of leadership. Teams need room to experiment, but they also need standards for privacy, reliability, evaluation, and human review. Speed without responsibility creates a different kind of debt.",
      "The companies that benefit most will not necessarily be the ones using the most AI. They will be the ones that connect it to a real customer or operational problem and measure whether it made the work meaningfully better.",
    ],
  },
  {
    slug: "practical-ai-for-small-businesses",
    title: "Practical Uses of AI for Small and Mid-Sized Businesses",
    description: "A grounded guide to finding AI opportunities that save time, improve service, and support better decisions.",
    date: "2026-09-12",
    readTime: "5 min read",
    paragraphs: [
      "Small businesses do not need an enormous AI strategy to begin. They need one repeated problem where a modest improvement would matter every week.",
      "Useful starting points include summarising customer conversations, finding information across internal documents, preparing first drafts, classifying requests, and giving teams a faster view of operational data.",
      "The key is to keep a person in the loop where context and accountability matter. AI should remove friction from good work, not quietly make important decisions that nobody can explain.",
      "Start with a narrow workflow, define what good looks like, and review the result with the people who do the work. A small, trusted win is more valuable than a large experiment nobody adopts.",
    ],
  },
  {
    slug: "turning-business-problems-into-products",
    title: "How to Turn a Business Problem into a Technology Product",
    description: "The path from a recurring business frustration to a product people are willing to use.",
    date: "2026-09-12",
    readTime: "5 min read",
    paragraphs: [
      "A product idea usually arrives disguised as a feature request. Someone asks for a dashboard, an app, or an automation. The real opportunity is underneath: what decision or outcome is currently too difficult?",
      "The first step is to understand the problem in its environment. Who experiences it, how often does it happen, what workaround exists today, and what does the problem cost in time, money, or confidence?",
      "A first product should make one important job easier. Narrow scope is not a lack of ambition; it is how a team earns the evidence needed to expand with confidence.",
      "When the product meets real usage, the roadmap becomes clearer. The goal is not to build everything that could be built. It is to build the smallest useful system and learn from the people who rely on it.",
    ],
  },
  {
    slug: "building-software-people-want-to-use",
    title: "Building Software Customers Actually Want to Use",
    description: "Why adoption depends on clarity, trust, and the small details people experience every day.",
    date: "2026-09-12",
    readTime: "5 min read",
    paragraphs: [
      "A product can be technically correct and still feel difficult. People judge software through small moments: whether they understand what to do next, whether the system responds clearly, and whether they trust the result.",
      "Good product work makes the important path obvious. It removes unnecessary choices, uses familiar language, and gives people useful feedback before they have to ask for help.",
      "This is why design and engineering cannot be separate conversations. A fast system with confusing feedback is not a good experience, and a beautiful interface that cannot support the real workflow is not a finished product.",
      "The best measure of usability is not whether a team can demonstrate the product. It is whether customers can return to it, understand it, and make progress without needing the team beside them.",
    ],
  },
  {
    slug: "what-i-would-do-differently",
    title: "What I Would Do Differently If I Started Again Today",
    description: "A more honest look at the lessons that only become visible after building, shipping, and being wrong.",
    date: "2026-09-12",
    readTime: "6 min read",
    paragraphs: [
      "Experience does not remove uncertainty. It changes how quickly you recognise it and how willing you are to work with it in the open.",
      "I would speak to users earlier, write down assumptions before debating solutions, and treat distribution as part of the product from the beginning. A useful product still needs a clear path to the people it can help.",
      "I would also protect more time for the team to think. Urgency is sometimes necessary, but constant urgency makes it harder to see the difference between important work and merely visible work.",
      "Most importantly, I would keep building in public with the right people. Progress becomes more durable when the lessons, not just the wins, are shared.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

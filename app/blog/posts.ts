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
    readTime: "",
    paragraphs: [
      "Building a company begins with an idea, but it is sustained by thousands of small decisions. In the early days, the work is rarely about having every answer. It is about learning how to ask better questions: What is really difficult for the customer? What can we prove this week? What are we assuming because it feels comfortable?",
      "The most useful shift for me has been moving from trying to prove an idea is good to discovering whether it is useful. A polished plan made in isolation can look convincing. A conversation with the person who will actually use the product can expose the part that matters in ten minutes. Small prototypes and honest feedback create clarity that slides never can.",
      "A technology company is ultimately a people company. Great work depends on clear ownership, direct feedback, and enough trust for someone to challenge the obvious path. Skills matter, but the quality of the conversations around the work matters just as much. Teams move faster when people understand the context behind a decision, not just the task in front of them.",
      "I have learned that momentum is not the same as speed. Speed can produce a lot of motion without much progress. Momentum comes from making progress visible, keeping promises to one another, and giving people enough context to make good decisions without waiting for permission at every turn. It is quieter than urgency, but much more durable.",
      "The parts people do not see matter too: the note after a difficult customer conversation, the decision to fix a small rough edge, the patience to revisit an assumption. Those details become the character of a company. Building from scratch is an exercise in responsibility, because the work affects customers, teammates, and the future you are trying to create.",
      "That responsibility is becoming concrete in products like TravelnFlex: the work is not only to launch something, but to keep improving the details people depend on when the plan becomes real.",
    ],
  },
  {
    slug: "how-ai-is-changing-business",
    title: "How AI Is Changing the Way Businesses Operate",
    description: "AI is becoming part of everyday business infrastructure. The opportunity is larger than adding a chatbot to a website.",
    date: "2026-09-12",
    readTime: "",
    paragraphs: [
      "AI is moving from an impressive demonstration to a practical layer in modern businesses. It can help teams understand information, reduce repetitive work, and make decisions with more context. But the interesting question is not whether a business can use AI. It is whether it can use it to make work meaningfully better for customers and the people doing that work.",
      "The strongest implementations begin with a workflow, not a model. Before choosing a tool, a business should understand where time is lost, where judgment is repeated, and where better information would change an outcome. A support team may spend hours searching through previous conversations. An operations team may be copying data between systems. A sales team may be preparing the same kind of proposal again and again. Those are useful places to look.",
      "For many companies, the first opportunity is not replacing a person. It is giving people back the time they currently spend searching, copying, formatting, and moving information between disconnected systems. That time can return to judgment, creativity, and customer relationships—the parts of work where human context is most valuable.",
      "This changes the role of leadership too. Teams need room to experiment, but they also need standards for privacy, reliability, evaluation, and human review. A fast solution that leaks context, creates silent errors, or leaves no one accountable simply creates a different kind of debt. The model is only one part of the product; data, permissions, interface, monitoring, fallback behaviour, and ownership all matter.",
      "Trust becomes central as AI enters more important workflows. People need to know when a system is uncertain, where its information came from, and how to correct it. A confidently wrong answer is usually more expensive than a visible limitation. The best AI experiences help people make decisions; they do not pretend to remove the need for judgment.",
      "That is the standard we are carrying into Sentinel, a personal vault we are preparing to launch: privacy, clear boundaries, and dependable behaviour matter as much as the intelligence behind the product.",
      "The companies that benefit most will not necessarily be the ones using the most AI. They will be the ones that connect it to a real customer or operational problem, measure whether it improved the work, and keep learning from the people affected. Lasting advantage will come from thoughtful adoption, not novelty.",
    ],
  },
  {
    slug: "practical-ai-for-small-businesses",
    title: "Practical Uses of AI for Small and Mid-Sized Businesses",
    description: "A practical guide to finding AI opportunities that save time, improve service, and support better decisions.",
    date: "2026-09-12",
    readTime: "",
    paragraphs: [
      "Small businesses do not need an enormous AI strategy to begin. They need one repeated problem where a modest improvement would matter every week. The right starting point is rarely the flashiest use case. It is usually the piece of work people complain about, postpone, or quietly solve with a messy spreadsheet and a lot of manual effort.",
      "Customer support is often a useful place to start. AI can help organise incoming questions, identify the right topic, find relevant information, and prepare a first response for a team member to review. The goal is not to make every interaction sound automated. It is to help the right person respond faster and with better context, especially when the same questions arrive every day.",
      "Internal knowledge is another overlooked opportunity. Policies, proposals, product notes, operating procedures, and past client work often exist, but they are difficult to find when someone needs them. A carefully scoped assistant can make that knowledge easier to access while respecting permissions and keeping sensitive information protected. This is particularly valuable when a small team depends on a few people who hold too much context in their heads.",
      "AI can also help with first drafts: a follow-up email after a meeting, a job description, a product brief, a weekly summary, or a proposal outline. First drafts are not final decisions, and that is exactly why they are a good use case. The team keeps ownership of the message while spending less time facing a blank page.",
      "The key is to keep a person in the loop where context and accountability matter. AI should remove friction from good work, not quietly make important decisions that no one can explain. A useful rule is simple: if a poor answer could damage a customer relationship, create a financial risk, or affect someone unfairly, a responsible person should still review the outcome.",
      "The business case should be concrete. Measure response time, hours saved, repeat questions, conversion, error rates, or the quality of an outcome before introducing a change. If the result cannot be observed, it becomes difficult to distinguish a useful tool from an impressive demonstration. Small businesses have an advantage here: there are fewer layers between an idea and the people who use it, so learning can happen quickly.",
      "Start with a narrow workflow, define what good looks like, and review the result with the people who do the work. A small, trusted win is more valuable than a large experiment nobody adopts. The goal is not to make a business look advanced. It is to make a real part of the business work better.",
      "Before expanding, ask whether the new workflow is genuinely helping. Are customers receiving clearer answers? Is the team spending less time on repetitive work? Are mistakes easier to catch? The answer should come from the people closest to the work, not only from a dashboard. If the result is useful, build on it carefully. If it is not, learning that early is still a worthwhile outcome.",
      "The practical path is deliberately unglamorous: choose one job, improve it, measure the result, and earn trust before taking on the next one. Over time, those focused improvements can become a meaningful advantage. The business does not need to chase every new capability; it needs to get better at using the capabilities that genuinely fit its customers and its way of working.",
    ],
  },
  {
    slug: "turning-business-problems-into-products",
    title: "How to Turn a Business Problem into a Technology Product",
    description: "The path from a recurring business frustration to a product people are willing to use.",
    date: "2026-09-12",
    readTime: "",
    paragraphs: [
      "Most product ideas arrive disguised as feature requests. Someone asks for a dashboard, an app, or an automation. Those requests may be useful, but the more important question sits underneath: what decision or outcome is currently too difficult? A dashboard is not a problem. It is one possible answer to a problem that has not been understood yet.",
      "The first step is to see the problem in its environment. Who experiences it? How often does it happen? What workaround exists today? What does the problem cost in time, money, confidence, or missed opportunity? Ask people to show you how they handle it now rather than asking whether they like an idea. Workarounds reveal priorities much more clearly than opinions do.",
      "Good discovery is specific. A vague complaint such as ‘reporting is hard’ can mean many things: the data is late, no one trusts it, people cannot find the right number, or the report does not help anyone decide what to do next. Each version calls for a different product. If the problem is not named precisely, the team will be tempted to build a broad system that solves none of them well.",
      "A first product should make one important job easier. Narrow scope is not a lack of ambition; it is how a team earns the evidence needed to expand with confidence. The first version might help a manager spot delayed work, a salesperson prepare a more relevant follow-up, or an operator resolve a recurring request. It does not need to transform the entire business on day one.",
      "The promise should be understandable in one sentence. If the value requires a long explanation, the product may be solving too many things at once or speaking in the language of its creators instead of its users. Clear products create a clear expectation: ‘This helps me do this job faster, with fewer mistakes, or with more confidence.’",
      "Technology choices should serve the learning loop. A flexible prototype can be more valuable than sophisticated architecture while the team is still discovering what matters. That does not mean ignoring quality. It means spending the early effort on the parts that must be true for a customer to receive value, then strengthening the system around behaviour that has been proven in the real world.",
      "When a product meets real usage, the roadmap becomes clearer. Watch where people hesitate, what they ignore, what they ask for, and which workaround survives the new product. Usage is not a final validation step; it is the beginning of a better conversation. The goal is not to build everything that could be built. It is to build the smallest useful system and learn from the people who rely on it.",
      "A product becomes a business when it creates repeatable value. That means understanding why people return, what outcome improves because the product exists, and whether that value is strong enough to earn continued use. Building is only half the work. Earning trust, adoption, and a place in someone’s daily workflow is the other half.",
      "The best product teams stay close to the original problem even as the solution evolves. They do not fall in love with a feature simply because it took effort to build. They stay curious about the customer’s work, willing to remove what is not helping, and focused on the outcome that made the product worth creating in the first place.",
      "There is also a commercial question that should be present from the beginning: who receives enough value to pay, and what does the product replace or improve for them? Pricing is not only a financial decision. It is a test of whether the value is clear. When customers struggle to explain why a product matters, the issue may be the product, the positioning, or the problem definition—not simply the price.",
      "Good products create a reliable loop between discovery and delivery. A team learns from a real situation, makes one thoughtful change, watches what happens, and decides the next step. That loop must include support, sales, operations, and customers—not just product meetings. The quality of the loop determines the quality of the product over time.",
      "Teams should be cautious about confusing requests with priorities. Loud requests are not always the most important ones, and customers often describe a solution before they have had time to describe the underlying need. Looking for patterns across conversations protects the roadmap from becoming a collection of one-off promises.",
      "Progress also needs a clear measure. It might be time saved, fewer errors, faster turnaround, better retention, more successful decisions, or a simpler onboarding experience. The measure should connect to the customer’s reality. When a team tracks only activity—features released or screens built—it can mistake output for progress.",
      "Eventually, the product should feel less like a collection of capabilities and more like a dependable part of someone’s work. That is the standard worth building toward: not a product that impresses in a demo, but one people trust when the task is real, the time is short, and the outcome matters.",
    ],
  },
  {
    slug: "building-software-people-want-to-use",
    title: "Building Software Customers Actually Want to Use",
    description: "Why adoption depends on clarity, trust, and the small details people experience every day.",
    date: "2026-09-12",
    readTime: "",
    paragraphs: [
      "A product can be technically correct and still feel difficult to use. People judge software through small moments: whether they understand what to do next, whether the system responds clearly, and whether they trust the result. Those moments decide whether someone returns voluntarily or uses the product only because they have to.",
      "Clarity starts before the interface. A product needs a clear promise, a clear audience, and a clear idea of success for the person using it. When those decisions are vague, screens become crowded with explanations, options, and features that try to be useful to everyone. Good product work often begins by choosing what not to include.",
      "The important path should be obvious. People should not have to decode internal terminology or guess which button will move them forward. Familiar language, sensible defaults, useful feedback, and a clear next step reduce the mental effort required to make progress. This is not about making software simplistic; it is about respecting the attention people bring to it.",
      "Trust is built through consistency. Buttons should behave as expected. Errors should explain what happened and what someone can do next. Important actions should never feel mysterious. These details may seem small during development, but they determine whether a customer feels safe returning to the product when the work matters.",
      "This is why design and engineering cannot be separate conversations. A fast system with confusing feedback is not a good experience. A beautiful interface that cannot support a real workflow is not a finished product. The practical details of performance, reliability, content, and interaction are all part of how a customer experiences design.",
      "Listening to customers does not mean accepting every feature request. It means understanding the need behind the request. Sometimes the right answer is a new capability. Sometimes it is better guidance, a faster workflow, clearer language, or removing a step that should never have existed. The request is evidence; it is not always the solution.",
      "The best measure of usability is not whether the team can demonstrate the product. It is whether customers can return to it, understand it, and make progress without needing the team beside them. Adoption is a product outcome, not a marketing problem to solve later. When software respects people’s time and helps them feel capable, usage becomes much easier to sustain.",
      "The same test applies to Sentinel before launch: if keeping something important safe feels confusing, the product has more work to do no matter how capable the underlying system is.",
    ],
  },
  {
    slug: "what-i-would-do-differently",
    title: "What I Would Do Differently If I Started Again Today",
    description: "An honest look at the lessons that only become visible after building, shipping, and being wrong.",
    date: "2026-09-12",
    readTime: "",
    paragraphs: [
      "Experience does not remove uncertainty. It changes how quickly you recognise it and how willing you are to work with it openly. If I started again today, I would spend less time trying to make uncertainty look like certainty. Early plans are useful maps, but they are not promises from the future. The better habit is to name assumptions clearly and decide what evidence would change the plan.",
      "I would speak to users earlier and more often. It is easy to delay those conversations until a product feels polished enough to show. In reality, the rough version is often where the most valuable learning begins. The people closest to the problem can tell you what they need, but more importantly, they can show you the workarounds they have already created to survive without your product.",
      "I would make fewer decisions from a distance. The closer a founder stays to customers, product details, and the team’s daily reality, the faster small problems become visible. Distance can create the illusion that everything is fine until a problem is expensive. Being close does not mean doing every job. It means keeping a direct line to the evidence that should shape the important decisions.",
      "I would think about distribution earlier. A useful product still needs a clear path to the people it can help. Product, positioning, and distribution are not separate chapters that happen one after another. They inform each other. Knowing who needs a product and how they discover it often makes the product itself more focused.",
      "I would protect more time for the team to think. Urgency is sometimes necessary, but constant urgency makes it harder to see the difference between important work and merely visible work. A team that can pause, reflect, and improve its way of working will make better decisions than one that is always reacting to the latest pressure.",
      "I would celebrate consistency more than intensity. A team that can keep learning for years will outperform a team that can sprint for a few weeks. Sustainable pace is not a compromise with ambition; it is how ambition survives contact with reality. It gives people enough energy to care about the details, challenge poor decisions, and stay present for customers.",
      "Most importantly, I would share lessons more honestly with the right people. Progress becomes more durable when teams share what they learned, not just what they won. Mistakes are part of the tuition of building. The goal is not to avoid every one of them; it is to extract the lesson sooner and refuse to let pride turn a temporary error into a permanent direction.",
    ],
  },
];

posts.forEach((post) => {
  const wordCount = post.paragraphs.join(" ").trim().split(/\s+/).length;
  post.readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
});

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

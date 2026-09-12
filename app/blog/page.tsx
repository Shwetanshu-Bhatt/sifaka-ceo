import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";
import "./blog.css";

export const metadata: Metadata = {
  title: "Notes on Building",
  description: "Ideas and lessons on technology, AI, products, and building companies from Shwetanshu Bhatt.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="blog-shell">
      <nav className="navigation blog-nav" aria-label="Main navigation">
        <Link className="wordmark" href="/">SB<span>.</span></Link>
        <span className="nav-caption">SHWETANSHU BHATT<br /><span>CEO & CO-FOUNDER, SIFAKA LABS</span></span>
        <div className="nav-links"><Link href="/">Home</Link><a className="nav-contact" href="mailto:ceo@sifakalabs.in">Let’s talk <span>↗</span></a></div>
      </nav>
      <header className="blog-header section-pad">
        <div className="section-label"><span>NOTES / 01</span><span>THOUGHTS FROM THE BUILDING PROCESS</span></div>
        <p className="blog-kicker">FIELD NOTES</p>
        <h1>Thinking out loud.<br /><em>Building with intent.</em></h1>
        <p className="blog-intro">A collection of ideas on technology, leadership, products, and the decisions between an ambition and the thing it becomes.</p>
      </header>
      <section className="blog-grid" aria-label="Blog posts">
        {posts.map((post, index) => (
          <article className="blog-card" key={post.slug}>
            <div className="blog-card-top"><span>0{index + 1}</span><span>{post.readTime}</span></div>
            <p className="blog-date">{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
            <h2><Link href={"/blog/" + post.slug}>{post.title}</Link></h2>
            <p>{post.description}</p>
            <Link className="text-link" href={"/blog/" + post.slug}>Read note <span>↗</span></Link>
          </article>
        ))}
      </section>
      <footer className="blog-footer"><Link className="wordmark" href="/">SB<span>.</span></Link><span>© {new Date().getFullYear()} SHWETANSHU BHATT</span><Link href="/">BACK HOME ↑</Link></footer>
    </main>
  );
}

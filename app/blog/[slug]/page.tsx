import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "../posts";
import "../blog.css";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: "/blog/" + post.slug },
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return (
    <main className="blog-shell">
      <nav className="navigation blog-nav" aria-label="Main navigation">
        <Link className="wordmark" href="/">SB<span>.</span></Link>
        <span className="nav-caption">SHWETANSHU BHATT<br /><span>CEO & CO-FOUNDER, SIFAKA LABS</span></span>
        <div className="nav-links"><Link href="/blog">All notes</Link><a className="nav-contact" href="mailto:ceo@sifakalabs.in">Let’s talk <span>↗</span></a></div>
      </nav>
      <article className="blog-article">
        <Link className="back-link" href="/blog">← All notes</Link>
        <p className="blog-kicker">FIELD NOTE / {post.readTime.toUpperCase()}</p>
        <h1>{post.title}</h1>
        <p className="article-meta">{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        <div className="article-body">{post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </article>
      <footer className="blog-footer"><Link className="wordmark" href="/">SB<span>.</span></Link><span>© {new Date().getFullYear()} SHWETANSHU BHATT</span><Link href="/">BACK HOME ↑</Link></footer>
    </main>
  );
}

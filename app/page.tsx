"use client";

import { useEffect, useState } from "react";

const principles = [
  { title: "Curiosity before certainty.", text: "The useful questions rarely come with easy answers. I like getting close to a problem, challenging the obvious, and leaving room for a better idea." },
  { title: "Make it real. Then make it better.", text: "An idea becomes interesting when it meets the world. Build something small, put it in someone's hands, listen carefully, and keep going." },
  { title: "Great work is a team sport.", text: "Clear direction. Honest conversations. Space to take ownership. My job is to help people do work they can feel proud of." },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          entry.target.animate([{ opacity: 0, translate: "0 24px" }, { opacity: 1, translate: "0 0" }], { duration: 800, easing: "ease-out" });
        }
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  async function copyEmail() {
    try { await navigator.clipboard.writeText("ceo@sifakalabs.in"); setEmailCopied(true); }
    catch { window.location.href = "mailto:ceo@sifakalabs.in"; }
  }

  return (
    <main id="top">
      <nav className="navigation" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Shwetanshu Bhatt home">SB<span>.</span></a>
        <span className="nav-caption">SHWETANSHU BHATT<br /><span>CEO & CO-FOUNDER, SIFAKA LABS</span></span>
        <div className="nav-links"><a href="#about">About me</a><a href="#work">The pursuit</a><a className="nav-contact" href="#contact">Let’s talk <span>↗</span></a></div>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="status-dot" /> SHWETANSHU BHATT / CEO & CO-FOUNDER</div>
          <h1 id="hero-title"><span>VISION.</span><br /><span>CONVICTION.</span><br /><span className="hero-outline">EXECUTION.</span></h1>
          <div className="hero-bottom"><p>Building companies starts with seeing what could be.<br />Making it happen takes everything else.</p><a className="round-link" href="#work"><span>EXPLORE MY WORLD</span><b>↗</b></a></div>
        </div>
        <figure className="portrait-frame">
          <img className="hero-portrait" src="/shwetanshu.png" alt="Shwetanshu Bhatt, CEO and co-founder of Sifaka Labs" width="1285" height="1224" fetchPriority="high" />
          <div className="portrait-edge" aria-hidden="true" />
          <figcaption><span>SHWETANSHU<br /><strong>BHATT</strong></span><span>CO-FOUNDER.<br />BUILDER.<br />ALWAYS FORWARD.</span></figcaption>
          <span className="portrait-index" aria-hidden="true">01 — A LITTLE ABOUT ME</span>
        </figure>
        <div className="hero-footer"><span>INDEPENDENT MIND. COLLECTIVE AMBITION.</span><span>SCROLL TO GET THE FULL PICTURE ↓</span></div>
      </section>

      <div className="marquee" aria-hidden="true"><div>{[0, 1].map((group) => <div className="marquee-group" key={group}>{[0, 1, 2, 3].map((i) => <span key={i}>VISION <b>/</b> OWNERSHIP <b>/</b> EXECUTION <b>/</b> </span>)}</div>)}</div></div>

      <section className="about section-pad" id="about">
        <div className="section-label reveal"><span>01 / ABOUT ME</span><span>BEYOND THE JOB TITLE</span></div>
        <div className="about-layout"><div className="about-brand"><div className="about-art reveal"><div className="sifaka-card"><img src="/sifaka-full-logo.svg" alt="Sifaka Labs" /></div></div><div className="sifaka-details reveal"><span className="sifaka-details-kicker">CO-FOUNDER / SIFAKA LABS</span><h3>Co-founder of Sifaka Labs</h3><p>Building meaningful technology products across software, artificial intelligence, automation, and future systems.</p><a className="sifaka-card-link" href="https://sifakalabs.in/" target="_blank" rel="noreferrer">Visit Sifaka Labs <span>↗</span></a></div></div><div className="about-copy reveal"><h2>See the whole.<br /><em>Own the details.</em></h2><p className="lead">I’m drawn to the messy, exciting space between “this could exist” and “here it is.”</p><p>At Sifaka Labs, I turn that curiosity into products. I care about the details people feel, the problems worth solving, and the people who make the whole thing possible.</p><p>Less standing on the sidelines. More rolling up sleeves. There’s always something interesting to build.</p><a className="text-link" href="#principles">A few things I believe <span>↘</span></a></div></div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-label reveal"><span>02 / THE PURSUIT</span><span>THINKING IS GOOD. MAKING IS BETTER.</span></div>
        <div className="work-title reveal"><h2>Ideas are the start.<br /><em>Execution is the work.</em></h2><p>A home for ambitious ideas.<br />And the energy to see them through.</p></div>
        <a className="project-card reveal" href="#contact"><div className="project-visual"><span className="project-overline">INDEPENDENT THINKING. REAL-WORLD BUILDING.</span><div className="lab-art" aria-hidden="true"><div className="lab-beam" /><div className="lab-beam" /><div className="lab-beam" /></div><span className="lab-word">Sifaka<span>LABS</span></span><span className="project-chip">THE VENTURE STUDIO</span><span className="project-circle">↗</span></div><div className="project-caption"><div><span>01</span><h3>Sifaka Labs</h3></div><p>Where curiosity becomes something you can use.</p><span>LET’S BUILD SOMETHING ↗</span></div></a>
      </section>

      <section className="principles section-pad" id="principles"><div className="section-label reveal"><span>03 / THE OPERATING SYSTEM</span><span>STRONG BELIEFS. OPEN MIND.</span></div><div className="principles-layout"><h2 className="reveal">No playbook.<br />A few <em>principles.</em></h2><div className="accordion reveal">{principles.map((item, index) => <div className={`principle ${open === index ? "expanded" : ""}`} key={item.title}><h3><button aria-expanded={open === index} aria-controls={`principle-${index}`} onClick={() => setOpen(open === index ? null : index)}><span className="principle-number">0{index + 1}</span><span>{item.title}</span><b>{open === index ? "−" : "+"}</b></button></h3><div id={`principle-${index}`} hidden={open !== index}><p>{item.text}</p></div></div>)}</div></div></section>

      <section className="contact section-pad" id="contact"><div className="section-label"><span>04 / WHAT’S NEXT?</span><span><span className="status-dot" /> OPEN TO GOOD CONVERSATIONS</span></div><div className="contact-content reveal"><p>For the next venture. The difficult problem. The bigger ambition.</p><h2>LET’S BUILD<br /><em>WHAT’S NEXT.</em></h2><div className="contact-actions"><a href="mailto:ceo@sifakalabs.in">ceo@sifakalabs.in <span>↗</span></a><button onClick={copyEmail} aria-label="Copy email address">{emailCopied ? "COPIED ✓" : "COPY EMAIL ⧉"}</button><span className="sr-only" role="status">{emailCopied ? "Email address copied" : ""}</span></div></div><footer><a className="wordmark" href="#top">SB<span>.</span></a><span>© {new Date().getFullYear()} SHWETANSHU BHATT</span><span>BUILT WITH INTENT. ALWAYS EVOLVING.</span><a href="#top">BACK TO TOP ↑</a></footer></section>
    </main>
  );
}

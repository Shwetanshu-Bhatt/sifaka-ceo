"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import "./chat.css";

type Message = { role: "user" | "assistant"; content: string };
const suggestions = ["Tell me about Shwetanshu", "What does Sifaka Labs do?", "How can we collaborate?"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const field = useRef<HTMLInputElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const sending = useRef(false);

  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, busy, open]);

  function close() { setOpen(false); launcher.current?.focus(); }

  async function send(text: string) {
    const content = text.trim();
    if (!content || sending.current) return;
    sending.current = true;
    setBusy(true);
    setError("");
    setInput("");
    const history: Message[] = [...messages, { role: "user", content }];
    setMessages(history);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-11) }),
        signal: AbortSignal.timeout(25_000),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Chat is unavailable. Please try again.");
      if (typeof data.reply !== "string") throw new Error("Could not read the reply. Please try again.");
      setMessages([...history, { role: "assistant", content: data.reply }]);
    } catch (issue) {
      setMessages(messages);
      setInput(content);
      setError(issue instanceof Error && issue.name !== "TimeoutError" && issue.name !== "TypeError" ? issue.message : "Could not connect. Please try again or email ceo@sifakalabs.in.");
    } finally {
      sending.current = false;
      setBusy(false);
      field.current?.focus();
    }
  }

  function submit(event: FormEvent) { event.preventDefault(); void send(input); }

  return <div className="ceo-chat">
    {open && <section className="chat-panel" id="ceo-chat-panel" role="region" aria-labelledby="chat-title" onKeyDown={(event) => { if (event.key === "Escape") close(); }}>
      <header className="chat-header"><div><span className="chat-eyebrow">A LITTLE MORE ABOUT ME</span><h2 id="chat-title">Ask my AI assistant<span>.</span></h2></div><button type="button" onClick={close} aria-label="Close chat">×</button></header>
      <div className="chat-log" ref={log} role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions text">
        <p className="chat-message chat-assistant">Hi! I’m Shwetanshu’s AI website assistant. Ask me about his work, Sifaka Labs, or getting in touch.</p>
        {messages.map((message, index) => <p key={index} className={`chat-message chat-${message.role}`}><span className="sr-only">{message.role === "user" ? "You: " : "AI assistant: "}</span>{message.content}</p>)}
        {busy && <p className="chat-thinking" role="status">Thinking…</p>}
      </div>
      {messages.length === 0 && <div className="chat-suggestions">{suggestions.map((text) => <button type="button" key={text} disabled={busy} onClick={() => void send(text)}>{text} ↗</button>)}</div>}
      {error && <p className="chat-error" role="alert">{error}</p>}
      <form className="chat-form" onSubmit={submit}><label htmlFor="chat-input" className="sr-only">Your message</label><input ref={field} id="chat-input" value={input} onChange={(event) => setInput(event.target.value)} maxLength={2000} placeholder="What would you like to know?" autoComplete="off" readOnly={busy} /><button type="submit" disabled={busy || !input.trim()} aria-label="Send message">↑</button></form>
      <div className="chat-note">AI can make mistakes. Messages are sent to Groq. Avoid sensitive details. <a href="mailto:ceo@sifakalabs.in">Email directly ↗</a>{messages.length > 0 && <button type="button" disabled={busy} onClick={() => { setMessages([]); setError(""); setInput(""); field.current?.focus(); }}>New chat</button>}</div>
    </section>}
    <button ref={launcher} type="button" className="chat-launcher" aria-expanded={open} aria-controls={open ? "ceo-chat-panel" : undefined} onClick={() => open ? close() : setOpen(true)}>{open ? "Close chat ×" : "Ask about me ↗"}</button>
  </div>;
}

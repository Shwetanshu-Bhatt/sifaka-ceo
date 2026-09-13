"use client";

import { FormEvent, PointerEvent, useEffect, useRef, useState } from "react";
import "./chat.css";

type Message = { role: "user" | "assistant"; content: string };
type Position = { x: number; y: number };
const suggestions = ["Tell me about Shwetanshu", "Who are Sifaka co-founders?", "How can we collaborate?"];

function RobotIcon() {
  return <svg className="chat-robot-icon" viewBox="0 0 64 48" aria-hidden="true">
    <path className="chat-robot-antenna" d="M32 9V4M29 4h6" />
    <path className="chat-robot-fill" d="M15 15h34a5 5 0 0 1 5 5v17a5 5 0 0 1-5 5H15a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5ZM7 22H3v12h4M57 22h4v12h-4M22 42h20l-3 4H25l-3-4Z" />
    <circle className="chat-robot-face" cx="24" cy="26" r="3" />
    <circle className="chat-robot-face" cx="40" cy="26" r="3" />
    <path className="chat-robot-face-line" d="M25 33c4 2 10 2 14 0" />
  </svg>;
}

function cleanAssistantText(value: string) {
  return value.replace(/\\([*_])/g, "$1").replace(/\*\*(.*?)\*\*/g, "$1").replace(/__(.*?)__/g, "$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)").replace(/^\s*[-*]\s+/gm, "• ").replace(/\n{3,}/g, "\n\n").trim();
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const field = useRef<HTMLInputElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const sending = useRef(false);
  const drag = useRef({ active: false, moved: false, startX: 0, startY: 0, originX: 0, originY: 0 });

  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, busy, open]);

  function close() { setOpen(false); launcher.current?.focus(); }
  function clampPosition(x: number, y: number) {
    const widget = launcher.current?.parentElement;
    if (!widget) return { x, y };
    const { width, height } = widget.getBoundingClientRect();
    const rightInset = parseFloat(getComputedStyle(widget).right) || 0;
    const bottomInset = parseFloat(getComputedStyle(widget).bottom) || 0;
    const leftLimit = -(window.innerWidth - rightInset - width);
    const topLimit = -(window.innerHeight - bottomInset - height);
    return { x: Math.max(leftLimit, Math.min(0, x)), y: Math.max(topLimit, Math.min(0, y)) };
  }
  function move(event: globalThis.PointerEvent) {
    if (!drag.current.active) return;
    const nextX = drag.current.originX + event.clientX - drag.current.startX;
    const nextY = drag.current.originY + event.clientY - drag.current.startY;
    if (Math.abs(event.clientX - drag.current.startX) > 4 || Math.abs(event.clientY - drag.current.startY) > 4) drag.current.moved = true;
    setPosition(clampPosition(nextX, nextY));
  }
  function stopDragging() {
    drag.current.active = false;
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stopDragging);
  }
  function startDragging(event: PointerEvent<HTMLButtonElement>) {
    drag.current = { active: true, moved: false, startX: event.clientX, startY: event.clientY, originX: position.x, originY: position.y };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stopDragging);
  }
  function toggleLauncher() {
    if (drag.current.moved) { drag.current.moved = false; return; }
    if (open) close(); else setOpen(true);
  }
  async function send(text: string) {
    const content = text.trim();
    if (!content || sending.current) return;
    sending.current = true; setBusy(true); setError(""); setInput("");
    const history: Message[] = [...messages, { role: "user", content }];
    setMessages(history);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: history.slice(-11) }), signal: AbortSignal.timeout(25_000) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The assistant is unavailable right now.");
      setMessages([...history, { role: "assistant", content: cleanAssistantText(data.reply || "I’m sorry, I couldn’t prepare a reply.") }]);
    } catch (issue) {
      setError(issue instanceof Error && issue.name === "TimeoutError" ? "That took too long. Please try again." : "Something went wrong. Please try again or email ceo@sifakalabs.in.");
    } finally {
      sending.current = false; setBusy(false); field.current?.focus();
    }
  }
  function submit(event: FormEvent) { event.preventDefault(); void send(input); }

  return <div className="ceo-chat" style={{ "--chat-x": position.x + "px", "--chat-y": position.y + "px" } as React.CSSProperties}>
    {open && <section className="chat-panel" id="ceo-chat-panel" aria-labelledby="chat-title">
      <header className="chat-header"><div><span className="chat-eyebrow">A LITTLE MORE ABOUT ME</span><h2 id="chat-title">Ask North<span>.</span></h2></div><button type="button" onClick={close} aria-label="Close chat">×</button></header>
      <div className="chat-log" aria-label="Conversation" aria-live="polite" aria-relevant="additions"><p className="chat-message chat-assistant">Hi! I’m North. Ask me about Shwetanshu, Sifaka Labs, or how we could work together.</p>{messages.map((message) => <p className={"chat-message chat-" + message.role} key={message.role + message.content}><span className="sr-only">{message.role === "user" ? "You: " : "North: "}</span>{message.role === "assistant" ? cleanAssistantText(message.content) : message.content}</p>)}{busy && <p className="chat-thinking" role="status">Thinking…</p>}</div>
      {messages.length === 0 && <div className="chat-suggestions">{suggestions.map((text) => <button type="button" key={text} disabled={busy} onClick={() => void send(text)}>{text} ↗</button>)}</div>}
      {error && <p className="chat-error" role="alert">{error}</p>}
      <form className="chat-form" onSubmit={submit}><label htmlFor="chat-input" className="sr-only">Your message</label><input ref={field} id="chat-input" value={input} onChange={(event) => setInput(event.target.value)} maxLength={2000} placeholder="What would you like to know?" autoComplete="off" readOnly={busy} /><button type="submit" disabled={busy || !input.trim()} aria-label="Send message">↑</button></form>
      <div className="chat-note">AI can make mistakes. Messages are sent to Groq. Avoid sensitive details. <a href="mailto:ceo@sifakalabs.in">Email directly ↗</a>{messages.length > 0 && <button type="button" disabled={busy} onClick={() => { setMessages([]); setError(""); setInput(""); field.current?.focus(); }}>New chat</button>}</div>
    </section>}
    <button ref={launcher} type="button" className="chat-launcher" aria-label={open ? "Close chat" : "Ask North"} title={open ? "Close chat" : "Ask North"} aria-expanded={open} aria-controls={open ? "ceo-chat-panel" : undefined} onPointerDown={startDragging} onClick={toggleLauncher}>{open ? <span className="chat-close-icon" aria-hidden="true">×</span> : <RobotIcon />}</button>
  </div>;
}

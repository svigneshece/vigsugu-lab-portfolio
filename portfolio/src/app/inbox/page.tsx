"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, RefreshCw, Send, Check, Copy, MessageSquare, Bell, Shield, Sparkles } from "lucide-react";
import { site } from "@/data/site";

type Dispatch = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

export default function InboxPage() {
  const [messages, setMessages] = useState<Dispatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function fetchMessages() {
    setLoading(true);
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (data.messages && Array.isArray(data.messages)) {
        setMessages(data.messages);
      }
    } catch (e) {
      console.error("Failed to load messages", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  const filtered = messages.filter(
    (m) =>
      !search ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.message.toLowerCase().includes(search.toLowerCase())
  );

  const copyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#101310] text-[#F1F4EF] py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navigation & Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B6E778]/15 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#9EAA9A] hover:text-[#B6E778] transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={fetchMessages}
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#B6E778]/30 bg-[#1B211D] px-3.5 py-1.5 font-mono text-xs text-[#F1F4EF] hover:border-[#B6E778] transition-all disabled:opacity-50"
            >
              <RefreshCw className={`size-3 text-[#B6E778] ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778]">
                DISPATCH CONSOLE
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                LIVE INBOX
              </span>
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Recruiter &amp; Project Inquiries
            </h1>
            <p className="mt-1 text-xs text-[#9EAA9A]">
              All dispatches received through the portfolio contact form are logged here.
            </p>
          </div>

          <div className="font-mono text-xs text-[#9EAA9A]">
            Total Messages: <span className="font-bold text-[#B6E778]">{messages.length}</span>
          </div>
        </div>

        {/* Free Mobile Push Alert Tip (Telegram Bot) */}
        <div className="rounded-xl border border-[#B6E778]/30 bg-[#1B211D] p-5 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#B6E778]/30 bg-[#101310] text-[#B6E778]">
                <Bell className="size-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  Want instant notifications on your phone without Gmail?
                  <span className="rounded bg-[#B6E778]/20 px-1.5 py-0.5 font-mono text-[10px] text-[#B6E778]">
                    100% Free
                  </span>
                </h4>
                <p className="mt-1 text-xs text-[#9EAA9A] leading-relaxed">
                  You can connect a free <strong>Telegram Bot</strong> in 30 seconds. Every time someone sends a message, your phone will receive an instant push notification with the recruiter&apos;s name and text!
                </p>
              </div>
            </div>

            <div className="shrink-0 font-mono text-xs">
              <span className="text-[#8B9C8E]">Telegram &amp; Discord Ready</span>
            </div>
          </div>
        </div>

        {/* Search Filter */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search messages by name, email, or subject..."
            className="w-full rounded-xl border border-[#B6E778]/20 bg-[#1B211D] px-4 py-2.5 font-mono text-xs text-[#F1F4EF] placeholder:text-[#9EAA9A] focus:border-[#B6E778] focus:outline-none"
          />
        </div>

        {/* Messages List */}
        {loading ? (
          <div className="rounded-2xl border border-[#B6E778]/20 bg-[#1B211D] p-12 text-center font-mono text-xs text-[#9EAA9A]">
            Loading messages from database...
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-[#B6E778]/20 bg-[#1B211D] p-12 text-center space-y-3">
            <MessageSquare className="size-8 mx-auto text-[#7D8F80]" />
            <p className="font-bold text-white">No dispatches found</p>
            <p className="font-mono text-xs text-[#9EAA9A]">
              Test submissions will appear here once visitors submit the contact form.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((msg) => (
              <div
                key={msg.id}
                className="rounded-2xl border border-[#B6E778]/20 bg-[#1B211D] p-6 shadow-xl transition-all hover:border-[#B6E778]/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#232F26] pb-3 mb-4">
                  <div>
                    <h3 className="font-bold text-white text-base">{msg.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5 font-mono text-xs text-[#B6E778]">
                      <span>{msg.email}</span>
                      <button
                        type="button"
                        onClick={() => copyEmail(msg.email, msg.id)}
                        className="text-[#7D8F80] hover:text-[#B6E778] transition-colors"
                        title="Copy email"
                      >
                        {copiedId === msg.id ? (
                          <Check className="size-3 text-emerald-400" />
                        ) : (
                          <Copy className="size-3" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#7E8F81]">
                      {new Date(msg.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>

                    <a
                      href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                      className="inline-flex items-center gap-1 rounded-md border border-[#B6E778]/30 bg-[#101310] px-3 py-1 font-mono text-xs text-[#B6E778] hover:bg-[#B6E778]/10 transition-all"
                    >
                      <Send className="size-3" />
                      Reply
                    </a>
                  </div>
                </div>

                <div>
                  <span className="inline-block rounded-md border border-[#27352B] bg-[#101310] px-2.5 py-0.5 font-mono text-[11px] text-[#9EAA9A] mb-2 font-semibold">
                    Subject: {msg.subject}
                  </span>
                  <p className="text-sm leading-relaxed text-[#D2DDD3] whitespace-pre-wrap">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

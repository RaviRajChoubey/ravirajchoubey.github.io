import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GmailIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* Left Column: Direct Contact Info */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-teal-400 font-semibold">
              LET'S TALK
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Interested in collaborating on AI engineering projects, full-stack systems, data pipelines, or software roles? Feel free to reach out directly.
            </p>

            {/* Email Card with One-Click Copy & Gmail Web Compose */}
            <div className="mt-8 rounded-xl border border-rose-500/30 bg-rose-500/10 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-lg bg-rose-500/20 p-2 text-rose-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-400 block uppercase tracking-wider">
                    Direct Email Address
                  </span>
                  <span className="font-mono font-bold text-white text-sm sm:text-base">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-teal-400/40 bg-teal-500/20 px-4 py-2.5 font-mono text-xs font-semibold text-teal-300 hover:bg-teal-500/30 hover:text-white transition-all shadow-md"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-rose-500/40 bg-rose-500/20 px-4 py-2.5 font-mono text-xs font-semibold text-rose-300 hover:bg-rose-500/30 hover:text-white transition-colors"
                >
                  <GmailIcon className="h-4 w-4 text-rose-400" />
                  <span>Open Gmail</span>
                </a>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                href={portfolioData.personal.github}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 font-mono text-xs text-slate-300 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-sky-400" /> GitHub Profile
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={portfolioData.personal.linkedin}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 font-mono text-xs text-slate-300 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-sky-400" /> LinkedIn Network
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md relative shadow-2xl">
            <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-teal-400" /> Send a Message
            </h3>
            <p className="mt-1 text-xs text-slate-400 mb-6">
              Drop a note and I will get back to you promptly.
            </p>

            {formSubmitted ? (
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/40 p-6 text-center animate-fadeIn">
                <Check className="mx-auto h-12 w-12 text-emerald-400 mb-2" />
                <h4 className="font-heading text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="mt-2 text-xs text-slate-300">
                  Thank you for reaching out, {formData.name}. I'll respond to {formData.email} soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full rounded-lg border border-white/10 bg-[#0b0f17] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full rounded-lg border border-white/10 bg-[#0b0f17] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5 uppercase tracking-wider">
                    Message Content
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full rounded-lg border border-white/10 bg-[#0b0f17] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-teal-400/40 bg-teal-500/20 px-6 py-3 font-mono text-sm font-semibold text-teal-300 hover:bg-teal-500/30 hover:text-white transition-all shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

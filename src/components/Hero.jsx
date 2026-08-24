import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, FileText, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, GmailIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ArchitectureCanvas from './ArchitectureCanvas';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-600/15 via-teal-500/10 to-purple-600/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left Column: Bio & Headings */}
          <div>
            {/* Top Pill Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-sky-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-teal-400 animate-pulse" />
              <span>Software Engineering · AI Systems · Data Science</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Building software systems across{' '}
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
                AI, backend microservices &amp; data pipelines.
              </span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="mt-6 text-base text-slate-300 sm:text-lg leading-relaxed max-w-2xl">
              Computer Science (Data Science) undergraduate at{' '}
              <strong className="text-white">VIT Chennai</strong>. Full-Stack Developer Intern at{' '}
              <strong className="text-teal-300">National Informatics Centre (NIC), Govt. of India</strong> and Data Science Intern at <strong className="text-sky-300">Cestrum</strong>. Smart India Hackathon Finalist &amp; TRL-4 certified defence contributor.
            </p>

            {/* Quick Metrics Strip */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-slate-300 border-l-2 border-teal-500/50 pl-4 py-1">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-teal-400">Internships:</span> NIC (Govt. of India) &amp; Cestrum
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sky-400">SIH:</span> {portfolioData.personal.sihRank}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-purple-400">Defence:</span> TRL-4 Certified
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                href={portfolioData.personal.github}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 font-mono text-sm font-medium text-white transition-all hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
              >
                <GithubIcon className="h-4 w-4 text-sky-400" />
                <span>GitHub</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href={portfolioData.personal.linkedin}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 font-mono text-sm font-medium text-white transition-all hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
              >
                <LinkedinIcon className="h-4 w-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href={portfolioData.personal.leetcode}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 font-mono text-sm font-medium text-white transition-all hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              >
                <LeetCodeIcon className="h-4 w-4 text-amber-400" />
                <span>LeetCode</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>

              {/* Working Gmail Compose Button */}
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 font-mono text-sm font-medium text-rose-300 transition-all hover:border-rose-400 hover:bg-rose-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(244,63,94,0.3)]"
                title="Open Web Gmail Compose"
              >
                <GmailIcon className="h-4 w-4 text-rose-400" />
                <span>Gmail</span>
                <ArrowUpRight className="h-4 w-4 text-rose-300/70" />
              </a>

              {/* Resume Button */}
              <a
                target="_blank"
                rel="noreferrer"
                href={portfolioData.personal.resumeUrl}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-teal-500/40 bg-teal-500/10 px-4 font-mono text-sm font-medium text-teal-300 transition-all hover:border-teal-400 hover:bg-teal-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(45,212,191,0.3)]"
                title="View Resume on Google Drive"
              >
                <FileText className="h-4 w-4 text-teal-400" />
                <span>Resume</span>
                <ArrowUpRight className="h-4 w-4 text-teal-300/70" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Architecture Canvas */}
          <div className="w-full">
            <ArchitectureCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}

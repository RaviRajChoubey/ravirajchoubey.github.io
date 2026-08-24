import React, { useState } from 'react';
import { Menu, X, Code2, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, GmailIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleGmailClick = (e) => {
    // Open Gmail web compose in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f17]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-wide text-white group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-all group-hover:border-sky-400 group-hover:bg-sky-500/20 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="text-slate-100 group-hover:text-sky-300 transition-colors">
            Ravi Raj Choubey
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition-all hover:bg-white/[0.06] hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons & Social Links */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Social Links */}
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            href={portfolioData.personal.github}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-white"
            title="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            href={portfolioData.personal.linkedin}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-white"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            href={portfolioData.personal.leetcode}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400"
            title="LeetCode Profile"
          >
            <LeetCodeIcon className="h-4 w-4" />
          </a>

          {/* Working Gmail Action Button */}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`}
            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-rose-500/40 bg-rose-500/10 px-3 font-mono text-xs font-medium text-rose-300 transition-all hover:border-rose-400 hover:bg-rose-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(244,63,94,0.25)]"
            title="Compose Email in Gmail"
          >
            <GmailIcon className="h-3.5 w-3.5 text-rose-400" />
            <span>Gmail</span>
          </a>

          {/* Resume Download/View Button */}
          <a
            target="_blank"
            rel="noreferrer"
            href={portfolioData.personal.resumeUrl}
            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-teal-500/40 bg-teal-500/10 px-3 font-mono text-xs font-medium text-teal-300 transition-all hover:border-teal-400 hover:bg-teal-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(45,212,191,0.25)]"
            title="View Resume on Google Drive"
          >
            <FileText className="h-3.5 w-3.5 text-teal-400" />
            <span>Resume</span>
            <ArrowUpRight className="h-3 w-3 opacity-70" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            target="_blank"
            rel="noreferrer"
            href={portfolioData.personal.resumeUrl}
            className="inline-flex h-9 items-center gap-1 rounded-md border border-teal-500/40 bg-teal-500/10 px-2.5 font-mono text-xs font-medium text-teal-300"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0b0f17] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-3 flex items-center justify-around border-t border-white/10 pt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-300 hover:text-rose-200"
              >
                <GmailIcon className="h-4 w-4" /> Gmail
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={portfolioData.personal.github}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={portfolioData.personal.linkedin}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

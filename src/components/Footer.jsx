import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#090d16] py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
              <Code2 className="h-4 w-4" />
            </span>
            <div>
              <p className="font-mono text-sm font-bold text-white">
                Ravi Raj Choubey
              </p>
              <p className="font-mono text-[11px] text-slate-400">
                Software Engineer · AI, Data Science &amp; Systems
              </p>
            </div>
          </div>

          {/* Center Copyright & Status */}
          <div className="text-center font-mono text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Ravi Raj Choubey. Built with React &amp; Tailwind CSS.</p>
            <p className="mt-1 text-[11px] text-slate-500">VIT Chennai · Dept of Computer Science (Data Science)</p>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              href={portfolioData.personal.github}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              href={portfolioData.personal.linkedin}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

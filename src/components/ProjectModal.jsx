import React from 'react';
import { X, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-teal-500/30 bg-[#0f172a] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Subtle Gradient */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-400 hover:border-white/30 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 font-mono text-xs font-semibold text-teal-300">
              {project.category}
            </span>
            {project.badge && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-300">
                {project.badge}
              </span>
            )}
            <span className="font-mono text-xs text-slate-400">
              {project.period}
            </span>
          </div>

          <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-sky-300">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Banner */}
        {project.metrics && (
          <div className="mt-6 rounded-xl border border-teal-500/40 bg-teal-500/10 p-4 font-mono text-xs text-teal-200 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-teal-400 shrink-0" />
            <div>
              <span className="font-bold uppercase tracking-wider text-teal-400 block mb-0.5">Key Performance Metric</span>
              <span>{project.metrics}</span>
            </div>
          </div>
        )}

        {/* Overview */}
        <div className="mt-6">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Project Overview & Architecture
          </h4>
          <p className="text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>
        </div>

        {/* Technical Implementation Points */}
        <div className="mt-6">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Implementation Details &amp; Engineering Solutions
          </h4>
          <ul className="space-y-3">
            {project.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Technologies &amp; Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-black/40 px-3 py-1 font-mono text-xs text-sky-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              rel="noreferrer"
              href={project.github}
              className="inline-flex items-center gap-2 rounded-lg border border-sky-500/40 bg-sky-500/10 px-4 py-2 font-mono text-xs font-semibold text-sky-300 hover:bg-sky-500/20 hover:text-white transition-colors"
            >
              <GithubIcon className="h-4 w-4" /> GitHub Repository
            </a>

            {project.liveUrl && (
              <a
                target="_blank"
                rel="noreferrer"
                href={project.liveUrl}
                className="inline-flex items-center gap-2 rounded-lg border border-teal-500/40 bg-teal-500/20 px-4 py-2 font-mono text-xs font-semibold text-teal-300 hover:bg-teal-500/30 hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Open Live Application
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

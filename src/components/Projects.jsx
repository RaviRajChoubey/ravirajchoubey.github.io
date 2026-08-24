import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full-Stack + AI', 'Embedded + CV', 'CV + NLP', 'Data Science'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24 border-t border-white/5 bg-[#0b0f17]/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-teal-400 font-semibold">
              ENGINEERING PORTFOLIO
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-slate-300 sm:text-lg max-w-2xl">
              Enterprise ticket booking systems, production database engines, autonomous defense rovers, explainable AI healthcare diagnostic tools, and retail data mining algorithms.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 font-mono text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'border border-teal-400 bg-teal-500/20 text-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.25)]'
                    : 'border border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-all duration-300 hover:border-sky-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]"
            >
              <div>
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 font-mono text-xs font-semibold text-teal-300">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] text-amber-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Key Metric Badge */}
                {project.metrics && (
                  <div className="mt-4 flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-slate-300">
                    <ShieldCheck className="h-4 w-4 text-teal-400 shrink-0" />
                    <span className="line-clamp-1">{project.metrics}</span>
                  </div>
                )}
              </div>

              {/* Bottom Tech Tags & Details CTA */}
              <div className="mt-6 border-t border-white/5 pt-4">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/10 bg-black/30 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="rounded border border-white/10 bg-black/30 px-1.5 py-0.5 font-mono text-[11px] text-slate-400">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-teal-300 hover:text-white transition-colors"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.liveUrl}
                        className="inline-flex h-8 items-center gap-1 rounded-md border border-teal-500/40 bg-teal-500/10 px-2.5 font-mono text-[11px] text-teal-300 hover:bg-teal-500/20 hover:text-white transition-colors"
                        title="Live Hosted Application"
                      >
                        <span>Live</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.github}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-400 hover:border-sky-400/40 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}

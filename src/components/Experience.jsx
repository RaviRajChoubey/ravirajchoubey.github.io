import React from 'react';
import { Calendar, Building2, Award, CheckCircle2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-teal-400 font-semibold">
            CAREER PATH
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Internship experience building production software systems for government organizations and AI platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-teal-500 via-sky-500 to-transparent md:block"></div>

          <div className="space-y-8">
            {portfolioData.experience.map((exp) => (
              <article
                key={exp.id}
                className="relative grid gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-sky-500/40 hover:bg-white/[0.05] md:ml-12 md:grid-cols-[0.8fr_1.2fr] md:p-8 shadow-xl"
              >
                {/* Timeline Icon Node */}
                <div className="absolute -left-[3.25rem] top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-teal-400/50 bg-[#0b0f17] text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.4)] md:flex">
                  <Building2 className="h-4 w-4" />
                </div>

                {/* Left Column: Metadata & Tags */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 font-mono text-xs font-semibold text-teal-300">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-300 font-medium">
                    <span className="text-sky-300">{exp.company}</span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                        <MapPin className="h-3 w-3" /> {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Impact Highlight Badge */}
                  <div className="mt-5 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs font-mono text-amber-300 flex items-start gap-2">
                    <Award className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
                    <span>{exp.impact}</span>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Accomplishments */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Key Contributions &amp; Achievements
                  </h4>

                  <ul className="space-y-3">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-teal-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

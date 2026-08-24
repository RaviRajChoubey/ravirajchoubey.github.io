import React from 'react';
import { Server, BrainCircuit, Cpu, BarChart3 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  BrainCircuit: BrainCircuit,
  Cpu: Cpu,
  BarChart3: BarChart3
};

export default function EngineeringRange() {
  return (
    <section className="scroll-mt-24 py-16 sm:py-24 border-t border-white/5 bg-[#0b0f17]/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-teal-400 font-semibold">
            ENGINEERING RANGE
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I Build
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            A breakdown of systems, machine learning architectures, and analytics infrastructure engineered across internships and major projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Server;
            return (
              <article
                key={pillar.id}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-sky-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
              >
                <div>
                  <div className="inline-flex rounded-lg border border-teal-500/30 bg-teal-500/10 p-3 text-teal-300 transition-transform group-hover:scale-110">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/10 bg-black/40 px-2 py-1 font-mono text-[11px] text-slate-300 group-hover:border-sky-500/30 group-hover:text-sky-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

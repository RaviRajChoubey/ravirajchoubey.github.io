import React, { useState } from 'react';
import { Trophy, ShieldCheck, Award, Users, GraduationCap, Calendar, Star, Building2, BrainCircuit, ExternalLink, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Trophy: Trophy,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Users: Users,
  Building2: Building2,
  BrainCircuit: BrainCircuit
};

export default function Achievements() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Internships', 'Hackathons', 'Certifications', 'Leadership'];

  const filteredAchievements = filter === 'All'
    ? portfolioData.achievements
    : portfolioData.achievements.filter(item => item.category === filter || (filter === 'Certifications' && item.category === 'Certification'));

  return (
    <section id="achievements" className="scroll-mt-24 py-16 sm:py-24 border-t border-white/5 bg-[#0b0f17]/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Column: Achievements, Internships & Honors */}
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-teal-400 font-semibold">
                  INTERNSHIPS, HONORS &amp; CERTIFICATES
                </p>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Achievements &amp; Internships
                </h2>
                <p className="mt-3 text-base text-slate-300">
                  Government internships, national hackathon recognitions, defence operational certifications, and leadership roles.
                </p>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-lg px-3 py-1 font-mono text-xs font-medium transition-all ${
                    filter === cat
                      ? 'border border-teal-400 bg-teal-500/20 text-teal-300'
                      : 'border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredAchievements.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Trophy;
                const CardWrapper = item.certificateUrl ? 'a' : 'div';
                const wrapperProps = item.certificateUrl ? {
                  href: item.certificateUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-teal-400 hover:bg-teal-500/10 hover:shadow-[0_0_25px_rgba(45,212,191,0.25)] flex flex-col justify-between cursor-pointer"
                } : {
                  className: "group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-teal-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] flex flex-col justify-between"
                };

                return (
                  <CardWrapper key={idx} {...wrapperProps}>
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border border-teal-500/30 bg-teal-500/10 p-2.5 text-teal-300 group-hover:scale-110 transition-transform">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[11px] text-teal-400 block font-semibold uppercase tracking-wider">
                            {item.subtitle}
                          </span>
                          <h3 className="font-heading text-base font-bold text-white group-hover:text-teal-300 transition-colors flex items-center gap-1.5">
                            <span>{item.title}</span>
                            {item.certificateUrl && (
                              <ExternalLink className="h-3.5 w-3.5 text-teal-400 shrink-0 inline-block" />
                            )}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="rounded border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                        {item.category}
                      </span>
                      {item.certificateUrl && (
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-teal-300 group-hover:underline">
                          <FileText className="h-3 w-3" /> View Certificate
                        </span>
                      )}
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education Background */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <div className="rounded-lg border border-sky-500/30 bg-sky-500/10 p-2.5 text-sky-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Education
                  </h3>
                  <p className="font-mono text-xs text-sky-300">
                    Academic Qualifications
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="relative border-l-2 border-sky-500/40 pl-4">
                    <span className="font-mono text-xs font-semibold text-teal-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {edu.period}
                    </span>
                    <h4 className="mt-1 font-bold text-white text-base">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-sky-300 font-medium mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-sky-500/30 bg-sky-500/10 p-4 font-mono text-xs text-sky-200 flex items-center gap-3">
              <Star className="h-5 w-5 text-sky-400 shrink-0" />
              <span>Smart India Hackathon Finalist (Top 50 of 850+ teams)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

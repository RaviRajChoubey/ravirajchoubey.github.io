import React from 'react';
import { Code2, BrainCircuit, Eye, Server, Terminal, ExternalLink, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'text-sky-400',
      border: 'border-sky-500/30',
      items: portfolioData.skills.languages
    },
    {
      title: 'AI / ML & Data Science',
      icon: BrainCircuit,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      items: portfolioData.skills.aiMlDataScience
    },
    {
      title: 'Computer Vision',
      icon: Eye,
      color: 'text-teal-400',
      border: 'border-teal-500/30',
      items: portfolioData.skills.computerVision
    },
    {
      title: 'Full-Stack, Backend & Databases',
      icon: Server,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      items: portfolioData.skills.fullStackBackend
    },
    {
      title: 'CS Fundamentals & Tools',
      icon: Terminal,
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      items: portfolioData.skills.toolsFundamentals
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-teal-400 font-semibold">
            TECHNICAL PROFICIENCY
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills &amp; Competencies
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Core technologies, machine learning frameworks, databases, developer tools, and problem-solving foundations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-sky-500/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                  <div className={`rounded-lg border ${cat.border} bg-white/[0.04] p-2.5 ${cat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-base">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-xs text-slate-300 transition-all hover:border-teal-400/40 hover:text-teal-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* LeetCode Profile Highlight Card */}
          <div className="flex flex-col justify-between rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-950/20 to-black/50 p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Trophy className="h-32 w-32 text-amber-400" />
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-amber-500/20 pb-4 mb-4">
                <div className="rounded-lg border border-amber-500/40 bg-amber-500/20 p-2.5 text-amber-400">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.135.703-1.815.703s-1.35-.253-1.815-.703L4.17 15.023c-.985-.952-1.025-2.525-.09-3.522l6.81-7.295c.467-.5 1.12-.782 1.803-.782s1.336.282 1.803.782l2.697 2.89a1.18 1.18 0 0 1-.065 1.637 1.11 1.11 0 0 1-1.6-.065L12.73 5.78a.29.29 0 0 0-.41-.017l-6.81 7.295a.302.302 0 0 0 .018.423l5.604 5.515c.112.11.266.172.424.172s.312-.062.424-.172l2.697-2.607a1.11 1.11 0 0 1 1.6.065 1.18 1.18 0 0 1-.065 1.637zm5.228-4.63l-9.155 8.847a3.486 3.486 0 0 1-4.965 0l-5.604-5.515a3.527 3.527 0 0 1-.225-4.82l6.81-7.296C8.932 3.652 10.377 3 11.91 3s2.977.652 3.717 1.446l2.697 2.89a3.5 3.5 0 0 1 .18 4.793l.006.006.012.012a3.473 3.473 0 0 1-2.84 5.513h-4.32a1.13 1.13 0 0 1 0-2.26h4.32a1.22 1.22 0 0 0 1.208-1.224 1.238 1.238 0 0 0-.348-.867z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base">
                    Problem Solving &amp; DSA
                  </h3>
                  <p className="font-mono text-xs text-amber-300">
                    @{portfolioData.personal.leetcodeUsername}
                  </p>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate-300 mb-4">
                Active problem solver practicing Data Structures, Algorithms, Dynamic Programming, Graph Theory, and SQL optimizations on LeetCode.
              </p>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href={portfolioData.personal.leetcode}
              className="inline-flex items-center justify-between gap-2 rounded-lg border border-amber-500/40 bg-amber-500/20 px-4 py-2.5 font-mono text-xs font-semibold text-amber-300 hover:bg-amber-500/30 hover:text-white transition-all shadow-md"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

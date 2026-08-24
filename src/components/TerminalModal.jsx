import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Ravi Raj Choubey CLI v2.6.0 (x86_64-pc-linux-gnu)' },
    { type: 'sys', text: 'Type "help" to list available interactive commands.' }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'cmd', text: `raviraj@vit-chennai:~$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'out',
          text: `Available CLI Commands:
  help        - Show this help menu
  about       - Brief intro & credentials
  skills      - List programming languages & ML skills
  projects    - View key software & AI projects
  experience  - View work experience (NIC, Cestrum)
  education   - View VIT Chennai degree & CGPA
  contact     - Display email & social profile URLs
  hire        - Express interest in hiring Ravi
  clear       - Clear screen history`
        });
        break;

      case 'about':
      case 'bio':
        newHistory.push({
          type: 'out',
          text: `${portfolioData.personal.name} — ${portfolioData.personal.title}
Education: ${portfolioData.education[0].degree}
Institution: ${portfolioData.education[0].institution} (${portfolioData.education[0].grade})
Highlights: ${portfolioData.personal.sihRank} | ${portfolioData.personal.defenceCert}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'out',
          text: `Languages: ${portfolioData.skills.languages.join(', ')}
AI/ML: ${portfolioData.skills.aiMlDataScience.join(', ')}
Vision: ${portfolioData.skills.computerVision.join(', ')}
Backend & DB: ${portfolioData.skills.fullStackBackend.join(', ')}
Fundamentals: ${portfolioData.skills.toolsFundamentals.join(', ')}`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'out',
          text: portfolioData.projects.map((p, i) => `[${i + 1}] ${p.title} (${p.category})\n    Tech: ${p.tech.slice(0, 4).join(', ')}\n    Metric: ${p.metrics}`).join('\n\n')
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'out',
          text: portfolioData.experience.map(e => `• ${e.role} @ ${e.company} (${e.period})\n  Impact: ${e.impact}`).join('\n\n')
        });
        break;

      case 'education':
        newHistory.push({
          type: 'out',
          text: `${portfolioData.education[0].degree}\n${portfolioData.education[0].institution}\nGrade: ${portfolioData.education[0].grade}`
        });
        break;

      case 'contact':
      case 'email':
        newHistory.push({
          type: 'out',
          text: `Email: ${portfolioData.personal.email}
GitHub: ${portfolioData.personal.github}
LinkedIn: ${portfolioData.personal.linkedin}
LeetCode: ${portfolioData.personal.leetcode}`
        });
        break;

      case 'hire':
      case 'sudo hire':
        newHistory.push({
          type: 'special',
          text: `🚀 SYSTEM NOTICE: Candidate availability confirmed!
Sending direct message signal to: ${portfolioData.personal.email}...
Thank you for your interest! Please send a note to ravirajchoubey0@gmail.com.`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl rounded-xl border border-teal-500/40 bg-[#090d16] shadow-2xl overflow-hidden font-mono text-xs text-slate-200">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-slate-400 text-xs">raviraj@vit-chennai: ~ (bash)</span>
          </div>

          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Output Screen */}
        <div className="p-4 sm:p-6 h-[380px] overflow-y-auto space-y-3 font-mono leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'cmd' && (
                <div className="text-teal-400 font-bold">{item.text}</div>
              )}
              {item.type === 'sys' && (
                <div className="text-slate-400 font-mono">{item.text}</div>
              )}
              {item.type === 'out' && (
                <div className="text-slate-200 whitespace-pre-wrap pl-2 border-l border-teal-500/30 my-1">{item.text}</div>
              )}
              {item.type === 'special' && (
                <div className="text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded whitespace-pre-wrap font-bold">{item.text}</div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Form Prompt */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-white/10 bg-[#0f172a] px-4 py-3">
          <span className="text-teal-400 font-bold">raviraj@vit-chennai:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type 'help' or 'skills'..."
            className="flex-1 bg-transparent text-slate-100 focus:outline-none font-mono text-xs"
            autoFocus
          />
          <button
            type="submit"
            className="rounded bg-teal-500/20 px-2 py-1 text-[11px] text-teal-300 border border-teal-500/30 hover:bg-teal-500/30 transition-colors flex items-center gap-1"
          >
            <span>Run</span>
            <CornerDownLeft className="h-3 w-3" />
          </button>
        </form>
      </div>
    </div>
  );
}

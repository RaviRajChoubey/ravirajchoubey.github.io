import React, { useState, useEffect } from 'react';
import { Server, Database, BrainCircuit, Activity, ShieldCheck, Cpu, Terminal, Sparkles } from 'lucide-react';

export default function ArchitectureCanvas() {
  const [activeNode, setActiveNode] = useState('api');
  const [logTrace, setLogTrace] = useState([]);

  const nodes = [
    {
      id: 'input',
      name: 'Client / Sensor Telemetry',
      subtitle: 'e-Jagriti JSON Payload & LoRa RF Stream',
      icon: Activity,
      color: 'text-sky-400',
      border: 'border-sky-500/40',
      bg: 'bg-sky-500/10',
      pos: 'top-[15%] left-[8%] md:left-[10%]',
      metrics: 'Latency: 12ms | Throughput: 1.2k req/s',
      details: 'Captures incoming HTTP requests from e-Jagriti system or raw long-range LoRa sensor data from field rovers.'
    },
    {
      id: 'api',
      name: 'FastAPI Microservice',
      subtitle: 'REST Orchestrator & Router',
      icon: Server,
      color: 'text-teal-400',
      border: 'border-teal-500/40',
      bg: 'bg-teal-500/10',
      pos: 'top-[36%] left-[34%] md:left-[36%]',
      metrics: 'Status: 200 OK | Async Execution',
      details: 'Modular REST API backend built with FastAPI, dispatching schema validation jobs and handling live frontend socket streams.'
    },
    {
      id: 'db',
      name: 'PostgreSQL & Checksum Audit',
      subtitle: 'Row-Level Validation Engine',
      icon: Database,
      color: 'text-amber-400',
      border: 'border-amber-500/40',
      bg: 'bg-amber-500/10',
      pos: 'top-[16%] left-[64%] md:left-[66%]',
      metrics: 'Data Loss: 0.00% | Checksum Reconciled',
      details: 'Production database instance executing schema-diff comparisons, generating rollback SQL scripts, and maintaining audit trails.'
    },
    {
      id: 'ai',
      name: 'AI & Inference Pipeline',
      subtitle: 'YOLO / nnU-Net / RAG Engine',
      icon: BrainCircuit,
      color: 'text-purple-400',
      border: 'border-purple-500/40',
      bg: 'bg-purple-500/10',
      pos: 'top-[68%] left-[20%] md:left-[22%]',
      metrics: 'TRL-4 Verified | Heat-Map XAI Active',
      details: 'Executes real-time YOLO object detection for landmine rovers or nnU-Net medical image segmentation with heat-map explainability.'
    },
    {
      id: 'output',
      name: 'Real-time Dashboard & Logs',
      subtitle: 'React Status & Telemetry UI',
      icon: Cpu,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      pos: 'top-[66%] left-[68%] md:left-[70%]',
      metrics: 'Live Monitoring | Websockets Stream',
      details: 'Renders live migration status, threat detection alerts, and clinical report summaries with high visual fidelity.'
    }
  ];

  // Dynamic log generator simulation
  useEffect(() => {
    const logs = [
      '[TRACE] e-Jagriti payload received from NIC Gateway',
      '[FASTAPI] Schema diff executed: 0 conflicts detected',
      '[CHECKSUM] Row hash verified: 48,290 / 48,290 records (100%)',
      '[YOLO INFERENCE] Object detected: Confidence 0.96 @ Edge Node',
      '[NNU-NET] Explainability heat-map generated successfully',
      '[AUDIT] Rollback SQL script compiled & stored in audit-trail'
    ];

    let index = 0;
    const interval = setInterval(() => {
      setLogTrace(prev => [
        { time: new Date().toLocaleTimeString(), text: logs[index % logs.length] },
        ...prev.slice(0, 3)
      ]);
      index++;
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const activeNodeObj = nodes.find(n => n.id === activeNode) || nodes[1];

  return (
    <div className="relative min-h-[500px] sm:min-h-[540px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0f172a]/80 p-4 sm:p-6 shadow-2xl backdrop-blur-md">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

      {/* SVG Connecting Paths */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none" role="img" aria-label="System architecture flows">
        <defs>
          <linearGradient id="glowTrace" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Trace Lines */}
        <path d="M 120 110 C 220 110, 240 210, 360 210 S 520 120, 660 120" fill="none" stroke="url(#glowTrace)" strokeWidth="2.5" strokeDasharray="6 4" className="animate-pulse" />
        <path d="M 360 210 C 300 280, 260 340, 210 370" fill="none" stroke="url(#glowTrace)" strokeWidth="2" />
        <path d="M 360 210 C 480 240, 560 320, 680 360" fill="none" stroke="url(#glowTrace)" strokeWidth="2" />
      </svg>

      {/* Header Banner */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400 animate-ping"></span>
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-300 uppercase">
            Live System Architecture Trace
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
          <Sparkles className="h-3 w-3 text-sky-400" /> Interactive Nodes
        </span>
      </div>

      {/* Interactive System Nodes */}
      <div className="relative h-[340px] sm:h-[360px] w-full my-2">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`absolute w-36 sm:w-44 rounded-xl border ${isSelected ? 'border-teal-400 bg-teal-950/60 shadow-[0_0_20px_rgba(45,212,191,0.3)] scale-105' : `${node.border} bg-[#0b0f17]/90 hover:border-white/40 hover:scale-102`} ${node.pos} p-3 transition-all duration-300 backdrop-blur-md cursor-pointer text-left z-20 group`}
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-lg p-2 ${node.bg} ${node.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                {isSelected && (
                  <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                )}
              </div>
              <p className="mt-2.5 font-mono text-xs font-semibold text-white group-hover:text-teal-300 transition-colors">
                {node.name}
              </p>
              <p className="mt-0.5 text-[10px] leading-3 text-slate-400 line-clamp-1">
                {node.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details & Live Log Feed */}
      <div className="relative z-10 grid gap-3 rounded-lg border border-white/10 bg-[#0b0f17]/90 p-3 sm:p-4 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-teal-400" />
            <span className="font-mono font-semibold text-white">{activeNodeObj.name}</span>
            <span className="rounded bg-teal-500/10 px-2 py-0.5 font-mono text-[10px] text-teal-300">
              {activeNodeObj.metrics}
            </span>
          </div>
          <span className="text-[11px] text-slate-400">{activeNodeObj.details}</span>
        </div>

        {/* Live log stream */}
        <div className="space-y-1 font-mono text-[11px]">
          {logTrace.map((log, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-400">
              <span className="text-teal-400 font-bold">[{log.time}]</span>
              <span className="text-slate-200">{log.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

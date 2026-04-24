import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FONTS = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Share+Tech+Mono&family=Rajdhani:wght@400;600;700&display=swap";
const mono  = { fontFamily: "'Share Tech Mono', monospace" };
const bebas = { fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" };
const glow  = { textShadow: "0 0 18px rgba(255,107,91,0.35)" };

const SOLUTIONS = [
  { tag: "FIELD_AI_OPS",    title: "NEURAL_TRACKING",   link: "ENTER_OS_DELTA_WELL", text: "Real-time tracking for high-value assets across contested environments." },
  { tag: "KINETIC_ASSET",   title: "AUTONOMOUS_FLEET",  link: "DEPLOY_UNITS",        text: "Adaptive routing for ground and aerial operations with maximum accuracy." },
  { tag: "COLLECT_SECURE",  title: "KINETIC_VAULT",     link: "ACCESS_STORAGE",      text: "End-to-end shipment insurance with cold tracking and dynamic indemnity."  },
];

const FOOTER_COLS = [
  { heading: "NAVIGATION", links: ["DASHBOARD_OS", "MANIFEST_SPACE", "FLEET_AP", "API_INTEGRATION"] },
  { heading: "LEGAL",      links: ["PRIVACY_NOTICE", "PRIVACY_CONNECT", "ASSET_ARCHIVE", "SERVICE_LICENSE"] },
  { heading: "SUPPORT",    links: ["DOCS_CENTER", "INCIDENT_REPORT", "SLA_TERMS", "CONTACT_OPS"] },
  { heading: "PLATFORM",   links: ["STATUS_PAGE", "CHANGELOG", "SECURITY", "OPEN_SOURCE"] },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ nodes: 0, recovery: 0, latency: 0, network: 0 });

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet"; link.href = FONTS;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const targets = { nodes: 1402, recovery: 99.9, latency: 14, network: 642 };
    let step = 0;
    const t = setInterval(() => {
      step++;
      const p = step / 80;
      setCounts({ nodes: Math.round(targets.nodes * p), recovery: Math.round(targets.recovery * p * 10) / 10, latency: Math.round(targets.latency * p), network: Math.round(targets.network * p) });
      if (step >= 80) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#E5E5E5] min-h-screen" style={{ fontFamily: "'Rajdhani', sans-serif" }}>

      {/* NAV */}
      <nav className="flex items-center justify-between px-10 py-4 border-b border-[#1e1e1e]">
        <span className="text-white font-bold tracking-[4px] text-sm" style={mono}>SHIPGUARD_OS</span>
        <ul className="flex gap-8 list-none m-0 p-0">
          {["DASHBOARD","MANIFESTS","FLEET_MAP"].map(item => (
            <li key={item}><span className="text-[#888] text-[11px] tracking-[2px] cursor-pointer hover:text-[#ff6b5b] transition-colors" style={mono}>{item}</span></li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/login")} className="text-[#999] text-[11px] tracking-[2px] cursor-pointer hover:text-white transition-colors px-4 py-1.5 border border-[#333] hover:border-[#ff6b5b]" style={mono}>LOGIN</button>
          <button onClick={() => navigate("/register")} className="bg-[#ff6b5b] text-black text-[11px] tracking-[2px] px-4 py-1.5 font-semibold hover:bg-[#ff4d3d] transition-colors" style={mono}>REGISTER</button>
          <div className="flex items-center gap-2 ml-2">
            <span className="w-2 h-2 rounded-full bg-[#ff6b5b] animate-pulse" />
            <span className="text-[#ff6b5b] text-[11px] tracking-[3px]" style={mono}>LIVE</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[580px] flex items-stretch">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#ff6b5b 1px,transparent 1px),linear-gradient(90deg,#ff6b5b 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* LEFT */}
        <div className="relative z-10 flex flex-col justify-center px-10 py-16 w-full lg:w-1/2">
          <p className="text-[#ff6b5b] text-[11px] tracking-[4px] mb-4" style={mono}>▶ SYSTEM_ACTIVE / LINK_READY</p>
          <h1 className="text-[clamp(56px,8vw,110px)] leading-none text-white uppercase" style={bebas}>YOUR PACKAGE<br />LOST.</h1>
          <h1 className="text-[clamp(56px,8vw,110px)] leading-none uppercase mb-6 text-[#ff6b5b]" style={bebas}>WE FIX THAT.</h1>
          <p className="text-[#A0A0A0] text-[13px] leading-[1.7] max-w-sm mb-8 tracking-[1px]" style={mono}>
            SHIPGUARD OS IS THE UNCOMPROMISING KINETIC ENGINE FOR INDUSTRIAL RECOVERY, ZERO LATENCY, AND ABSOLUTE MANIFEST INTEGRITY.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button onClick={() => navigate("/register")} className="bg-[#ff6b5b] text-black px-6 py-2.5 text-[11px] font-bold tracking-[3px] hover:bg-[#ff4d3d] transition-colors" style={mono}>GET_STARTED</button>
            <button onClick={() => navigate("/login")} className="border border-[#555] text-[#C0C0C0] px-6 py-2.5 text-[11px] tracking-[3px] hover:border-[#ff6b5b] hover:text-white transition-colors" style={mono}>LOGIN</button>
          </div>
          <p className="text-[#3d3d3d] text-[10px] tracking-widest mt-8" style={mono}>LAT: 23.0225° N / LNG: 72.5714° E / ALT: 53M / SIG: LOCKED</p>
        </div>

        {/* RIGHT — tactical SVG */}
        <div className="hidden lg:flex w-1/2 relative items-center justify-center border-l border-[#1a1a1a]">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%,rgba(255,107,91,0.07) 0%,transparent 65%)" }} />
          <svg viewBox="0 0 520 520" className="w-full h-full max-w-[520px] max-h-[520px]" xmlns="http://www.w3.org/2000/svg">
            {Array.from({length:13}).map((_,i) => <line key={`h${i}`} x1="0" y1={i*40} x2="520" y2={i*40} stroke="#1a1a1a" strokeWidth="1"/>)}
            {Array.from({length:13}).map((_,i) => <line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="520" stroke="#1a1a1a" strokeWidth="1"/>)}
            <circle cx="260" cy="260" r="200" stroke="#1e1e1e" strokeWidth="1" fill="none"/>
            <circle cx="260" cy="260" r="160" stroke="#2a2a2a" strokeWidth="1" fill="none" strokeDasharray="6 4"/>
            <circle cx="260" cy="260" r="100" stroke="#ff6b5b" strokeWidth="0.5" fill="none" opacity="0.3"/>
            {[["260","60","260","180"],["260","340","260","460"],["60","260","180","260"],["340","260","460","260"]].map(([x1,y1,x2,y2],i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff6b5b" strokeWidth="0.8" opacity="0.4"/>)}
            {[[80,80],[440,80],[80,440],[440,440]].map(([cx,cy],i) => { const dx=cx<260?1:-1,dy=cy<260?1:-1; return <g key={i}><line x1={cx} y1={cy} x2={cx+dx*20} y2={cy} stroke="#ff6b5b" strokeWidth="1.5" opacity="0.6"/><line x1={cx} y1={cy} x2={cx} y2={cy+dy*20} stroke="#ff6b5b" strokeWidth="1.5" opacity="0.6"/></g>; })}
            <ellipse cx="260" cy="175" rx="28" ry="32" fill="#111" stroke="#2a2a2a" strokeWidth="1"/>
            <path d="M218 220 Q220 300 230 360 L260 365 L290 360 Q300 300 302 220 Q280 208 260 208 Q240 208 218 220Z" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
            <path d="M218 230 Q185 265 178 300" stroke="#222" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <path d="M302 230 Q335 265 342 300" stroke="#222" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <path d="M240 362 Q235 400 232 440" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" fill="none"/>
            <path d="M280 362 Q285 400 288 440" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" fill="none"/>
            <line x1="60" y1="260" x2="460" y2="260" stroke="#ff6b5b" strokeWidth="0.6" opacity="0.12"><animateTransform attributeName="transform" type="translate" values="0,-200;0,200;0,-200" dur="4s" repeatCount="indefinite"/></line>
            {[[140,160],[380,190],[100,350],[400,370],[260,450]].map(([nx,ny],i) => <g key={i}><circle cx={nx} cy={ny} r="3" fill="#ff6b5b" opacity="0.8"/><circle cx={nx} cy={ny} r="8" fill="none" stroke="#ff6b5b" strokeWidth="0.8" opacity="0.3"><animate attributeName="r" values="4;14;4" dur={`${2+i*0.4}s`} repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0;0.3" dur={`${2+i*0.4}s`} repeatCount="indefinite"/></circle></g>)}
            <text x="80" y="76" fill="#ff6b5b" fontSize="9" fontFamily="Share Tech Mono" opacity="0.7">SIG_LOCK</text>
            <text x="360" y="76" fill="#666" fontSize="9" fontFamily="Share Tech Mono">NODE_04</text>
            <text x="80" y="458" fill="#666" fontSize="9" fontFamily="Share Tech Mono">TRACE_ON</text>
            <text x="340" y="458" fill="#ff6b5b" fontSize="9" fontFamily="Share Tech Mono" opacity="0.7">MANIFEST</text>
            <rect x="244" y="244" width="32" height="32" fill="none" stroke="#ff6b5b" strokeWidth="0.8" opacity="0.4"/>
            <circle cx="260" cy="260" r="4" fill="#ff6b5b" opacity="0.8"/>
          </svg>
          <div className="absolute top-6 right-6 text-right" style={mono}>
            <p className="text-[#ff6b5b] text-[10px] tracking-widest">● TRACKING_LIVE</p>
            <p className="text-[#555] text-[9px] mt-1">PKG_ID: SG-2048-X</p>
            <p className="text-[#555] text-[9px]">STATUS: IN_TRANSIT</p>
          </div>
          <div className="absolute bottom-6 left-6" style={mono}>
            <p className="text-[#555] text-[9px]">SCAN_RATE: 120Hz</p>
            <p className="text-[#555] text-[9px]">INTEGRITY: NOMINAL</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="border-t border-b border-[#1e1e1e] px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-14 items-center">
          {[
            { label: "ACTIVE_NODES", value: counts.nodes.toLocaleString(), suffix: "",   sub: "▲ 0.4" },
            { label: "TERMINALS",    value: `${counts.recovery}`,           suffix: "%",  sub: "ONLINE SATS" },
            { label: "LATENCY",      value: `${counts.latency}`,            suffix: "ms", sub: "OPTIMAL" },
            { label: "NETWORK_MESH", value: `${counts.network}`,            suffix: "",   sub: "ACTIVE NODES" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[#6E6E6E] text-[11px] tracking-[2px] mb-1.5" style={mono}>{s.label}</p>
              <p className="text-white text-4xl font-bold leading-none" style={{...mono,...glow}}>{s.value}<span className="text-[#ff6b5b]">{s.suffix}</span></p>
              {s.sub && <p className="text-[#ff6b5b] text-[11px] mt-1.5 tracking-[2px]" style={mono}>{s.sub}</p>}
            </div>
          ))}
          <div className="hidden lg:block">
            <div className="w-52 h-28 border border-[#222] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle,#ff6b5b 1px,transparent 1px)", backgroundSize: "10px 10px" }} />
              <span className="text-[#555] text-[10px] tracking-[3px]" style={mono}>GLOBAL_MESH</span>
            </div>
          </div>
        </div>
      </div>

      {/* TACTICAL SOLUTIONS */}
      <section className="px-10 py-20">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-5xl text-white uppercase" style={{...bebas, letterSpacing:"4px"}}>TACTICAL_SOLUTIONS</h2>
          <span className="text-[#555] text-[10px] tracking-[2px] hidden md:block" style={mono}>[ REF_04_A ]</span>
        </div>
        <p className="text-[#888] text-[12px] tracking-[2px] mb-10 leading-[1.6]" style={mono}>FIELD-MODULAR INFRASTRUCTURE SYSTEMS FOR ZERO-FAILURE LOGISTICS UNIONS.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SOLUTIONS.map(s => (
            <div key={s.title} className="border border-[#1e1e1e] bg-[#0e0e0e] p-6 hover:border-[#ff6b5b66] hover:bg-[#111] transition-all group">
              <p className="text-[#ff6b5b] text-[11px] tracking-[3px] mb-6" style={mono}>{s.tag}</p>
              <div className="w-full h-28 border border-[#1e1e1e] flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#ff6b5b 1px,transparent 1px),linear-gradient(90deg,#ff6b5b 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
                <span className="text-[#444] text-[11px] tracking-[3px]" style={mono}>MODULE</span>
              </div>
              <h3 className="text-white text-2xl uppercase mb-3 leading-tight" style={{...bebas, letterSpacing:"3px"}}>{s.title}</h3>
              <p className="text-[#A0A0A0] text-[12px] leading-[1.65] mb-6" style={mono}>{s.text}</p>
              <p className="text-[#ff6b5b] text-[11px] tracking-[2px] cursor-pointer group-hover:text-white group-hover:underline transition-colors" style={mono}>{s.link}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-10 border-t border-[#1e1e1e]">
        <p className="text-[#666] text-[11px] tracking-[4px] mb-6" style={mono}>ESTABLISH_CONNECTION</p>
        <h2 className="text-[clamp(48px,8vw,96px)] text-white uppercase leading-none mb-10" style={{...bebas, letterSpacing:"3px"}}>READY TO PROTECT<br />THE ASSET?</h2>
        <div className="flex justify-center max-w-md mx-auto">
          <input type="email" placeholder="PROTECT@SHIPGUARD.OP" className="flex-1 bg-[#0f0f0f] border border-[#2e2e2e] text-[#C0C0C0] text-[11px] px-4 py-3 outline-none focus:border-[#ff6b5b] transition-colors placeholder-[#555]" style={mono} />
          <button onClick={() => navigate("/register")} className="bg-[#ff6b5b] text-black px-5 py-3 text-[11px] font-bold tracking-[2px] hover:bg-[#ff4d3d] transition-colors whitespace-nowrap" style={mono}>REQUEST_ACCESS</button>
        </div>
        <p className="text-[#444] text-[10px] tracking-widest mt-4" style={mono}>NO CONTRACTS. NO DORMANCY. FULL ASSET RECOVERY COMMITMENT.</p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e1e1e] bg-[#080808]">
        <div className="px-10 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <p className="text-white text-[13px] tracking-[4px] mb-4" style={mono}>SHIPGUARD_OS</p>
            <p className="text-[#7A7A7A] text-[11px] leading-[1.8]" style={mono}>
              THE UNCOMPROMISING INDUSTRIAL SYSTEM FOR LOGISTICS SECURITY AND MANIFEST INTEGRITY. BUILT FOR THE EDGE.
            </p>
            <div className="flex gap-3 mt-6">
              {["◈","◉","◎"].map((icon,i) => (
                <span key={i} className="w-8 h-8 border border-[#2a2a2a] flex items-center justify-center text-[#555] text-xs cursor-pointer hover:border-[#ff6b5b] hover:text-[#ff6b5b] transition-colors">{icon}</span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.heading}>
              <p className="text-[#ff6b5b] text-[10px] tracking-[3px] mb-5" style={mono}>{col.heading}</p>
              <ul className="space-y-3 list-none p-0 m-0">
                {col.links.map(l => (
                  <li key={l}>
                    <span className="text-[#666] text-[11px] tracking-[1.5px] cursor-pointer hover:text-[#E5E5E5] transition-colors" style={mono}>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bar */}
        <div className="border-t border-[#1a1a1a] px-10 py-5 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[#444] text-[10px] tracking-widest" style={mono}>© {new Date().getFullYear()} SHIPGUARD OS — ALL ASSET RIGHTS RESERVED</p>
          <p className="text-[#444] text-[10px] tracking-widest" style={mono}>PRIME_FIELD_ONLINE / PLATFORM_SS / CONTINUUM_SG-1</p>
        </div>
      </footer>

    </div>
  );
}
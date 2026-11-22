'use client';

import { useMemo, useState } from 'react';
import overview from '@/content/01-overview';
import investigation from '@/content/02-investigation';
import recovery from '@/content/03-recovery';
import stakeholders from '@/content/04-stakeholders';
import aiDemo from '@/content/05-ai-demo';
import close from '@/content/06-close';
import { reconcileMigrations } from '@/lib/reconciliation';

type SectionId = 'overview' | 'investigation' | 'recovery' | 'stakeholders' | 'ai' | 'close';
const nav: { id: SectionId; number: string; label: string }[] = [
  { id: 'overview', number: '01', label: 'Executive overview' },
  { id: 'investigation', number: '02', label: 'Investigation' },
  { id: 'recovery', number: '03', label: 'Solution & recovery' },
  { id: 'stakeholders', number: '04', label: 'Ownership' },
  { id: 'ai', number: '05', label: 'AI demonstration' },
  { id: 'close', number: '06', label: 'Outcomes & prevention' },
];

function SpeakerNotes({ notes }: { notes: string[] }) {
  const [open, setOpen] = useState(false);
  return <div className="notes-wrap"><button className="notes-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Hide' : 'Show'} speaker notes <span>{open ? '−' : '+'}</span></button>{open && <div className="notes-panel">{notes.map((note, i) => <p key={i}>{note}</p>)}</div>}</div>;
}

function SectionHeading({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <div className="section-heading"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2><p>{lead}</p></div>;
}

function Overview() {
  return <>
    <div className="hero-panel">
      <div className="hero-top"><span className="status-dot"/> EXECUTIVE RECOVERY BRIEFING <span className="hero-tag">PROPOSED APPROACH</span></div>
      <div className="hero-copy"><div><div className="hero-kicker">UNITED ENERGY</div><h1>Product migration<br/><em>incident.</em></h1><p>{overview.summary}</p></div><div className="hero-mark">UE<span>/</span></div></div>
      <div className="stat-row">{overview.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
    </div>
    <div className="section-heading compact"><div className="eyebrow">IMMEDIATE RESPONSE</div><h2>Three priorities. One coordinated response.</h2></div>
    <div className="priority-grid">{overview.priorities.map((item) => <article className="priority-card" key={item.number}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    <div className="principle"><span className="principle-label">LEADERSHIP PRINCIPLE</span><p>{overview.leadership}</p></div>
    <SpeakerNotes notes={overview.speakerNotes}/>
  </>;
}

function Investigation() {
  return <><SectionHeading eyebrow={investigation.eyebrow} title={investigation.title} lead={investigation.lead}/>
    <div className="flow-list">{investigation.stages.map((stage, i) => <article className="flow-card" key={stage.name}><div className="flow-index">0{i + 1}</div><div className="flow-content"><h3>{stage.name}</h3><strong>{stage.question}</strong><p>{stage.detail}</p></div><div className="flow-arrow">↘</div></article>)}</div>
    <div className="output-panel"><div className="eyebrow">INVESTIGATION OUTPUTS</div><div className="chip-list">{investigation.outputs.map((item) => <span className="chip" key={item}>{item}</span>)}</div></div>
    <SpeakerNotes notes={investigation.speakerNotes}/>
  </>;
}

function Recovery() {
  return <><SectionHeading eyebrow={recovery.eyebrow} title={recovery.title} lead={recovery.lead}/>
    <div className="gate-grid">{recovery.gates.map((gate) => <article className="gate-card" key={gate.number}><div className="gate-top"><span>{gate.number}</span><span className="gate-check">○</span></div><h3>{gate.name}</h3><p>{gate.description}</p><div className="evidence"><small>EXIT EVIDENCE</small><strong>{gate.evidence}</strong></div></article>)}</div>
    <div className="solution-panel"><div className="eyebrow">SOLUTION ROUTING</div>{recovery.routes.map((route) => <div className="route-row" key={route.label}><strong>{route.label}</strong><span>{route.route}</span></div>)}</div>
    <div className="warning-note"><span>IMPORTANT DISTINCTION</span><p>{recovery.callout}</p></div>
    <SpeakerNotes notes={recovery.speakerNotes}/>
  </>;
}

function Stakeholders() {
  return <><SectionHeading eyebrow={stakeholders.eyebrow} title={stakeholders.title} lead={stakeholders.lead}/>
    <div className="workstream-list">{stakeholders.workstreams.map((item, i) => <article className="workstream" key={item.name}><div className="workstream-number">0{i + 1}</div><div className="workstream-main"><h3>{item.name}</h3><div className="owner-line"><small>CLIENT BUSINESS OWNER</small><strong>{item.owner}</strong></div><div className="owner-line"><small>DELIVERY COLLABORATION</small><strong>{item.partners}</strong></div><p className="outcome-line">{item.outcome}</p></div></article>)}</div>
    <div className="oversight-grid"><div><small>PROGRAMME OVERSIGHT</small><p>{stakeholders.oversight}</p></div><div><small>MY ROLE AS COMMERCIALS CDL</small><p>{stakeholders.role}</p></div></div>
    <div className="impact-panel"><div className="eyebrow">WIDER IMPACT TO ASSESS — NOT ASSUMED</div><div className="impact-grid">{stakeholders.impacts.map((impact) => <div className="impact-item" key={impact.name}><strong>{impact.name}</strong><p>{impact.detail}</p></div>)}</div></div>
    <SpeakerNotes notes={stakeholders.speakerNotes}/>
  </>;
}

function AIDemo() {
  const result = useMemo(() => reconcileMigrations(), []);
  const [ran, setRan] = useState(false);
  const [copied, setCopied] = useState(false);
  const prompt = aiDemo.prompt + '\n\nAggregated findings from the synthetic prototype:\n' + result.patterns.map((p) => `${p.label}: ${p.count}`).join('\n');
  async function copyPrompt() {
    try { await navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  }
  return <><SectionHeading eyebrow={aiDemo.eyebrow} title={aiDemo.title} lead={aiDemo.lead}/>
    <div className="ai-intro"><div className="ai-icon">✳</div><div><strong>Illustrative migration reconciliation</strong><p>Fictional dataset · 100 records · No customer data</p></div><span className="demo-label">LIVE PROTOTYPE</span></div>
    <div className="ai-step-grid">{aiDemo.steps.map((step) => <div className="ai-step" key={step.number}><span>{step.number}</span><strong>{step.title}</strong><p>{step.detail}</p></div>)}</div>
    <div className="demo-console"><div className="console-head"><div><span className="console-dot"/> RECONCILIATION ENGINE</div><span>LOCAL DEMO</span></div>
      <div className="console-body"><div className="console-intro"><div><small>RECORDS ANALYSED</small><strong>{ran ? result.total : '—'}</strong></div><div><small>MISMATCHES</small><strong className="accent-number">{ran ? result.mismatches : '—'}</strong></div><div><small>MATCHED</small><strong>{ran ? result.matched : '—'}</strong></div></div>
        {!ran ? <div className="run-placeholder"><div className="run-symbol">↳</div><p>Run the reconciliation to compare expected and actual product assignments.</p><button className="primary-button" onClick={() => setRan(true)}>Run reconciliation <span>→</span></button></div> : <div className="results"><div className="result-title"><strong>Mismatch patterns identified</strong><span className="result-pill">{result.mismatches} exceptions</span></div>{result.patterns.map((pattern) => <div className="pattern-row" key={pattern.key}><div className="pattern-count">{pattern.count}</div><div className="pattern-copy"><strong>{pattern.label}</strong><p>{pattern.description}</p></div></div>)}<div className="batch-bars"><strong>Exceptions by migration batch</strong>{result.byBatch.map((batch) => <div className="bar-row" key={batch.batch}><span>{batch.batch}</span><div className="bar-track"><div className="bar-fill" style={{ width: `${batch.count / result.mismatches * 100}%` }}/></div><b>{batch.count}</b></div>)}</div></div>}
      </div>
    </div>
    <div className="ai-prompt"><div><div className="eyebrow">AI ASSISTED NEXT STEP</div><p>Pass the aggregated findings to an approved AI tool to cluster patterns, propose investigation paths and draft a prioritised checklist. The prototype does not call an external LLM.</p></div><button className="secondary-button" onClick={copyPrompt}>{copied ? 'Copied' : 'Copy AI prompt'} ↗</button></div>
    <div className="guardrail"><span>HUMAN ACCOUNTABILITY</span><p>{aiDemo.guardrail}</p></div>
    <SpeakerNotes notes={aiDemo.speakerNotes}/>
  </>;
}

function Close() {
  return <><SectionHeading eyebrow={close.eyebrow} title={close.title} lead={close.lead}/>
    <div className="outcome-grid">{close.outcomes.map((outcome, i) => <article className="outcome-card" key={outcome.title}><span className="outcome-index">0{i + 1}</span><h3>{outcome.title}</h3><ul>{outcome.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
    <div className="communication-panel"><div className="eyebrow">COMMUNICATION BY AUDIENCE</div>{close.communications.map((item) => <div className="communication-row" key={item.audience}><strong>{item.audience}</strong><p>{item.method}</p></div>)}</div>
    <div className="closing-banner"><span>THE OUTCOME</span><h3>{close.closing}</h3></div>
    <SpeakerNotes notes={close.speakerNotes}/>
  </>;
}

export default function BriefingApp() {
  const [active, setActive] = useState<SectionId>('overview');
  const [menuOpen, setMenuOpen] = useState(false);
  const current = nav.findIndex((item) => item.id === active);
  const section = nav[current];
  function go(id: SectionId) { setActive(id); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function next() { if (current < nav.length - 1) go(nav[current + 1].id); }
  function previous() { if (current > 0) go(nav[current - 1].id); }
  return <div className="app-shell">
    <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><div className="brand-mark">K<span>.</span></div><div><strong>DELIVERY BRIEF</strong><small>CLIENT DELIVERY · COMMERCIALS</small></div></div>
      <div className="side-label">PRESENTATION</div>
      <nav>{nav.map((item) => <button key={item.id} className={`nav-item ${active === item.id ? 'active' : ''}`} onClick={() => go(item.id)}><span className="nav-number">{item.number}</span><span>{item.label}</span>{active === item.id && <i/>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="sidebar-rule"/><div className="sidebar-meta">UNITED ENERGY<br/>PRODUCT MIGRATION INCIDENT</div><div className="sidebar-meta muted">PROPOSED RECOVERY APPROACH</div></div>
    </aside>
    <main className="main-area">
      <header className="topbar"><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button><div className="breadcrumb">CASE STUDY <span>/</span> {section.label.toUpperCase()}</div><div className="topbar-right"><span className="confidential">INTERVIEW PRESENTATION</span><button className="print-button" onClick={() => window.print()}>Print / PDF ↗</button></div></header>
      <div className="content-wrap"><div className="content-meta"><span>UNITED ENERGY</span><span>{String(current + 1).padStart(2, '0')} / 06</span></div>
        {active === 'overview' && <Overview/>}{active === 'investigation' && <Investigation/>}{active === 'recovery' && <Recovery/>}{active === 'stakeholders' && <Stakeholders/>}{active === 'ai' && <AIDemo/>}{active === 'close' && <Close/>}
        <footer className="section-footer"><button onClick={previous} disabled={current === 0}>← Previous</button><div className="progress-dots">{nav.map((item, i) => <button key={item.id} aria-label={`Go to ${item.label}`} className={i === current ? 'selected' : ''} onClick={() => go(item.id)}/>)}</div><button onClick={next} disabled={current === nav.length - 1}>Next section →</button></footer>
      </div>
      <div className="bottom-note">ILLUSTRATIVE RECOVERY PLAN · FICTIONAL SCENARIO · SYNTHETIC DEMONSTRATION DATA</div>
    </main>
  </div>;
}

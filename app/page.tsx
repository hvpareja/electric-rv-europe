const pillars = [
  { number: "01", title: "Electric by intent", copy: "Quiet, considered travel with the range and confidence to go further." },
  { number: "02", title: "Ready for Europe", copy: "A disciplined path through compliance, adaptation, support and service." },
  { number: "03", title: "Built around living", copy: "Thoughtful spaces for longer weekends, slower mornings and wider horizons." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Northline EV home"><span>northline</span><i>EV</i></a>
        <div className="nav-links"><a href="#approach">Approach</a><a href="#vision">Vision</a><a className="nav-cta" href="#early-access">Early access</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Conceptual electric motorhome on a coastal road" />
        <div className="hero-overlay" />
        <div className="hero-content shell">
          <p className="eyebrow"><span className="signal" /> European electric road travel / 01</p>
          <h1>Electric freedom.<br /><em>Beyond the road.</em></h1>
          <p className="hero-copy">We are exploring a new generation of premium electric motorhomes for Europe — thoughtfully selected, rigorously prepared, and made for the long way around.</p>
          <a className="button button-light" href="#early-access">Join early access <span>↗</span></a>
        </div>
        <div className="hero-note">Concept direction<br /><span>Not a commercial vehicle</span></div>
        <div className="scroll-cue"><span /> Scroll to explore</div>
      </section>

      <section className="intro shell" id="vision">
        <p className="eyebrow dark">A different kind of distance / 02</p>
        <div className="intro-grid"><h2>The open road<br /><em>is changing.</em></h2><div><p className="lead">The next chapter of road travel will be quieter, more capable and more connected to the places it takes you.</p><p className="muted">Northline is being built to help make that chapter real in Europe. We are currently validating technology, manufacturers and the route to market — before a single vehicle is offered.</p></div></div>
      </section>

      <section className="dark-section" id="approach">
        <div className="shell"><p className="eyebrow">The northline approach / 03</p><h2>From new energy<br /><em>to real freedom.</em></h2><div className="pillar-grid">{pillars.map((pillar) => <article className="pillar" key={pillar.number}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.copy}</p></article>)}</div></div>
      </section>

      <section className="manifesto shell"><div className="manifesto-mark">N<span>/</span>L</div><div><p className="eyebrow dark">What we are building / 04</p><h2>A trusted bridge between<br /><em>ambition and arrival.</em></h2><p className="lead">The product is only part of the journey.</p><p className="muted">We are investigating a complete European path: product selection at the source, adaptation for local use, homologation, transparent import, and the aftercare that makes ownership feel simple.</p><a className="text-link" href="#early-access">Follow the journey <span>↗</span></a></div></section>

      <section className="early-access" id="early-access"><div className="shell early-grid"><div><p className="eyebrow">An early signal / 05</p><h2>Be first to see<br /><em>what comes next.</em></h2><p className="early-copy">We are speaking with future owners, partners and people who believe road travel can be designed differently.</p></div><div className="access-card"><p className="card-label">Early access is opening soon</p><p className="card-copy">Leave your interest and we will share the first validated concepts, availability and launch updates.</p><div className="fake-form"><span>Your email address</span><button type="button">Notify me <span>↗</span></button></div><p className="privacy">No vehicle orders. No noise. Just the occasional meaningful update.</p></div></div></section>

      <footer className="footer shell"><a className="wordmark" href="#top"><span>northline</span><i>EV</i></a><p>Exploring the future of European road travel.<br />A project in validation — 2026</p><div className="footer-links"><a href="#vision">Vision</a><a href="#approach">Approach</a><a href="#early-access">Early access</a></div></footer>
    </main>
  );
}

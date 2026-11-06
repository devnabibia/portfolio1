import Rail from "../components/Rail";
import Board from "../components/Board";
import CopyEmail from "../components/CopyEmail";
import { site, nav, roles, stops, projects, stamps } from "../data";

export default function Home() {
  return (
    <>
      <Rail items={nav} />
      <main>
        <section id="top" className="hero"><div className="wrap">
          <div className="grid">
            <div>
              <h1>{site.first}<br />{site.last}</h1>
              <p>{site.tagline}</p>
              <div className="btns">
                <a className="btn f" href="#routes" data-c="Go">See my projects</a>
                <a className="btn" href="#arrive" data-c="Hi">Get in touch</a>
              </div>
            </div>
            <div className="pass" aria-label="Boarding pass">
              <div className="top"><span>BOARDING PASS</span><span>{site.code}</span></div>
              <div className="fields">
                <div className="code"><b>{site.home.slice(0, 3).toUpperCase()}</b><span></span><b>YOU</b></div>
                <div><small>PASSENGER</small><b>{site.name}</b></div>
                <div><small>CLASS</small><b>Software developer</b></div>
                <div><small>FROM</small><b>{site.home}</b></div>
                <div><small>TO</small><b>Your next product</b></div>
              </div>
              <div className="stub"><div className="barcode"></div></div>
            </div>
          </div>
          <Board rows={roles} />
        </div></section>

        <section id="about"><div className="wrap">
          <h2>About</h2>
          <div className="about">
            <div>
              {site.about.map((t) => <p key={t}>{t}</p>)}
              <div className="stats">{site.stats.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div>
            </div>
            <div className="kit">{site.kit.map(([a, b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}</div>
          </div>
        </div></section>

        <section id="line"><div className="wrap">
          <h2>Experience</h2>
          <p className="lede">Each stop on the way, newest first.</p>
          <ol className="stops">
            {stops.map(([when, role, co, text]) => (
              <li key={when}><time>{when}</time><h3>{role} <em>· {co}</em></h3><p>{text}</p></li>
            ))}
          </ol>
        </div></section>

        <section id="routes"><div className="wrap">
          <h2>Projects</h2>
          <p className="lede">A few things I have shipped.</p>
          <div className="routes">
            {projects.map((p) => {
              const inner = (<><h3>{p.name}</h3><span className="t"><i className={"dot" + (p.live ? "" : " off")}></i>{p.live ? "Live" : "Archived"}</span><p>{p.text}</p></>);
              return p.href
                ? <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" data-c="Open">{inner}</a>
                : <div key={p.name} className="r">{inner}</div>;
            })}
          </div>
        </div></section>

        <section id="pass"><div className="wrap">
          <h2>Awards</h2>
          <p className="lede">Stamps in the passport.</p>
          <div className="stamps">
            {stamps.map(([a, b, c, r]) => (
              <div key={b} className="stamp" style={{ "--r": r + "deg" }}><b>{a}</b><h3>{b}</h3><span>{c}</span></div>
            ))}
          </div>
        </div></section>

        <section id="arrive" className="arrive"><div className="wrap">
          <h2>You have arrived.</h2>
          <p className="lede" style={{ marginInline: "auto" }}>Tell me what you are building.</p>
          <CopyEmail email={site.email} />
          <div className="btns">{site.links.map(([n, h]) => <a key={n} className="btn" href={h} data-c="Visit">{n}</a>)}</div>
        </div></section>
      </main>
      <footer><span>© 2026 {site.name}</span><span>Flight {site.code} · Landed in {site.home}</span></footer>
    </>
  );
}

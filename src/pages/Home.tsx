import photoSimon from '../assets/images/PhotoSimon.jpg';

// src/pages/Home.tsx
export default function Home({ id = 'home' }: { id?: string }) {
  return (
    <section id={id} className="section-block section-hero" tabIndex={-1}>
      <div className="section-title">
        <h1>Simon Billet, développeur de jeux</h1>
      </div>

      <div className="hero">
        <div className="hero-left">
          <p className="muted">Passionné par la création de jeux vidéo, je souhaite contribuer à des projets toujours plus ambitieux.</p>
          <p>Fort de 4 ans d’expérience en développement dont 2 ans spécifiquement en création de jeux vidéo, j’allie compétences techniques, capacités d'adaptation et de communication pour être efficace en équipe</p>
          {/* <a className="btn" href="#projects">Voir mes projets</a> */}
        </div>
        <div className="hero-right">
          <div className="profile-card">
            <img src={photoSimon} alt="Simon portrait" className="avatar-pixel"/>
            <h4 style={{marginTop:12}}>Simon - Game Dev</h4>
            <div style={{marginTop:8, display:'flex', gap:8, flexWrap:'wrap'}}>
              <span className="pixel-badge pixel-font">Unity</span>
              <span className="pixel-badge pixel-font">Unreal</span>
              <span className="pixel-badge pixel-font">C++</span>
              <span className="pixel-badge pixel-font">C#</span>
              <span className="pixel-badge pixel-font">TS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

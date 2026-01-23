import photoSimon from '../assets/images/PhotoSimon.jpg';

// src/pages/Home.tsx
export default function Home({ id = 'home' }: { id?: string }) {
  return (
    <section id={id} className="section-block section-hero" tabIndex={-1}>
      <div className="section-title">
        <h1>Simon Billet</h1>
        <h2 className="subtitle">Développeur de jeux</h2>
      </div>

      <div className="hero">
        <div className="hero-left">
          <p className="muted">Développeur jeux vidéo basé à Lyon, je conçois des expériences interactives depuis 2 ans. </p>
          <p>Mon approche combine rigueur technique (C++, C#, Unity, Unreal) et sens du gameplay, acquis à travers 15+ projets collaboratifs menés en cycles courts.</p>
          <p>J'ai touché à toutes les étapes : prototypage rapide pour tester des mécaniques, architecture de systèmes gameplay, optimisation, intégration d'assets et déploiement.</p>
          <p>Mon passage par le développement web (3 stages en startup et ESN) m'a également donné une solide base en méthodologie et travail d'équipe.</p>
          <p>Je cherche à rejoindre des équipes ambitieuses pour contribuer à des productions toujours plus qualitatives.</p>

          <p></p>
          {/* Compétences déplacées ici pour meilleur équilibre */}
          <div style={{marginTop:20, display:'flex', gap:8, flexWrap:'wrap'}}>
            <span className="pixel-badge pixel-font">Unity</span>
            <span className="pixel-badge pixel-font">Unreal</span>
            <span className="pixel-badge pixel-font">C++</span>
            <span className="pixel-badge pixel-font">C#</span>
            <span className="pixel-badge pixel-font">TS</span>
            <span className="pixel-badge pixel-font">SQL</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-card">
            <img src={photoSimon} alt="Simon portrait" className="avatar-pixel"/>
            {/* <h4 style={{marginTop:12}}>Simon - Game Dev</h4> */}
          </div>
        </div>
      </div>
    </section>
  )
}

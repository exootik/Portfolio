
export default function Home(){
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Simon Billet, développeur de jeux</h1>
        <p className="muted">Passionné par la création de jeux vidéo, je souhaite contribuer à des projets toujours plus ambitieux.</p>
        <p>Fort de 4 ans d’expérience en développement dont 2 ans spécifiquement en création de jeux vidéo, j’allie compétences techniques, capacités d'adaptation et de communication pour être efficace en équipe</p>
        {/* <a className="btn" href="#projects">Voir mes projets</a> */}
      </div>
      <div className="hero-right">
        <div className="profile-card">
          <img src="/images/imgTest.png" alt="Simon portrait" style={{width:'100%', borderRadius:12}}/>
          <h4 style={{marginTop:12}}>Simon - Game Dev</h4>
          <p className="muted">Unity • Unreal Engine • C++ • C# • TS  </p>
        </div>
      </div>
    </section>
  )
}

import '../index2.css'

type Item = {
  id: string
  title: string
  role?: string
  desc?: string
  date?: string 
}

/**
 * Ordre du tableau : du plus ancien (index 0) au plus récent (dernier élément).
 * Le rendu visuel place le plus ancien en bas et le plus récent en haut.
 */
const ITEMS: Item[] = [
  { id: 'naissance', 
    title: 'Naissance', 
    role: 'Vivre - Respirer - Pleurer', 
    desc: 'Premier chapitre, premières curiosités', 
    date: '2003 - 2003' 
  },
  { id: 'enfance', 
    title: 'Enfance', 
    role: 'Courir - Decouvrir - Jouer', 
    desc: 'Enfance heureuse à la campagne avec mes frères', 
    date: '2003 - 2014' 
  },
  { id: 'college', 
    title: 'Collège', 
    role: 'Castor Informatique - Amitiés', 
    desc: "Petit établissement de campagne, découverte du concours castor informatique et création d'amitiés solides ", 
    date: '2014 - 2018' 
  },
  { id: 'bac', 
    title: 'Baccalauréat', 
    role: 'Général - Maths / Éco / NSI', 
    desc: "Des sciences et de l'informatique dans un lycée en ville", 
    date: '2018 - 2021' 
  },
  { id: 'fac', 
    title: "Fac d'économie", 
    role: 'Economie - Développement personnel', 
    desc: "Expérience utile pour apprendre à me connaître, réorientation assumée", 
    date: '2021 - 2022' 
  },
  { id: 'bts', 
    title: 'BTS SIO', 
    role: 'Base solides en dev full stack',
    desc: 'Formation technique en systèmes informatiques et réseaux', 
    date: '2022 - 2024' 
  },
  { id: 'stageBiopath', 
    title: 'Stage Biopath',
    role: 'Developpement - Laravel - php',
    desc: 'Stage dans une équipe de taille moyenne dans un laboratoire', 
    date: '2023' 
  },
  { id: 'stageCapgemini', 
    title: 'Stage Capgemini',
    role: "Developpement - javaScript - Gestion d'équipe",
    desc: 'Stage dans une grande entreprise', 
    date: '2024' 
  },
  { id: 'stageShopify', 
    title: 'Stage Sellify (App Shopify)',
    role: 'Developpement - TypeScript - Autonomie',
    desc: 'Stage dans une startup qui créer des applications Shopify', 
    date: '2025' 
  },
  { id: 'gaming', 
    title: 'Bachelor dev jeux vidéo', 
    role: "Dev gameplay - gestion de projet - travail d'équipe", 
    desc: 'Bachelor orienté jeux vidéo, pédagogie par projets', 
    date: '2024 - 2026' }
]

export default function Timeline(){
  return (
    <section className="timeline-section">
      <h2>Parcours</h2>

      <div className="timeline-wrapper" aria-hidden={false}>
        <div className="timeline">
          {ITEMS.map((it, index) => {
            const visualIndex = ITEMS.length - 1 - index
            const side = visualIndex % 2 === 0 ? 'right' : 'left'

            return (
              <div key={it.id} className={`timeline-item ${side}`}>
                <div className="timeline-item-inner">
                  <div className="timeline-card">
                    <div className="timeline-card-head">
                      <div>
                        <div className="timeline-title">{it.title}</div>
                        {it.role && <div className="timeline-role muted" style={{marginTop:4}}>{it.role}</div>}
                      </div>
                      {it.date && <div className="timeline-date">{it.date}</div>}
                    </div>
                    {it.desc && <div className="timeline-detail" style={{marginTop:8}}>{it.desc}</div>}
                  </div>

                  <div className="timeline-connector" aria-hidden="true">
                    <span className="timeline-dot" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

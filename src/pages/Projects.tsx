
import ProjectCard from '../components/ProjectCard'

// Import images et videos
// Where We Hide
import whereWeHidePoster from '../assets/images/imgWhereWeHide.jpg';
import whereWeHideVideo  from '../assets/videos/videoWhereWeHide.mp4';
// Strangeraria
import strangerariaPoster from '../assets/images/imgStrangeraria.jpg';
import strangerariaVideo  from '../assets/videos/videoStrangeraria.mp4';
// Zombie Fps
import zombieFpsPoster from '../assets/images/imgZombieFps.jpg';
import zombieFpsVideo  from '../assets/videos/videoZombieFps.mp4';
// Pokemon-like
import pokemonPoster from '../assets/images/imgPokemon.jpg';
import pokemonVideo  from '../assets/videos/videoPokemon.mp4';
// Slime
import slime3DPoster from '../assets/images/imgSlime3D.jpg';
import slime3DVideo  from '../assets/videos/videoSlime3D.mp4';
// Moteur3D
import moteur3DPoster from '../assets/images/imgMoteur3D.jpg';
import moteur3DVideo  from '../assets/videos/videoMoteur3D.mp4';
// Multi
import multijoueurPoster from '../assets/images/imgMultijoueur.jpg';
// Shooter2D
import shooter2DPoster from '../assets/images/imgShooter2D.jpg';
import shooter2DVideo  from '../assets/videos/videoShooter2D.mp4';
// Rugby IA
import rugbyIAPoster from '../assets/images/imgRugbyIA.jpg';
import rugbyIAVideo  from '../assets/videos/videoRugbyIA.mp4';
// Casse Brique
import casseBriquePoster from '../assets/images/imgCasseBrique.jpg';
import casseBriqueVideo  from '../assets/videos/videoCasseBrique.mp4';

type Project = {
  id: string
  title: string
  role?: string
  desc: string
  itchUrl?: string
  githubUrl?: string
  poster?: string
  videoUrl?: string | undefined
  date?: string
  duree?: string
}

const PROJECTS: Project[] = [
  {
    id: '3C',
    title: 'Where we hide',
    role: "Unity • 3C • Navmesh • Animation",
    desc: "Jeu d'horreur avec un personnage miniature qui résout des énigmes",
    itchUrl: 'https://billetsimon.itch.io/where-we-hide',
    githubUrl: 'https://github.com/exootik/11-25-WhereWeHide',
    poster: whereWeHidePoster,
    videoUrl: whereWeHideVideo,
    date: 'Novembre 2025',
    duree: '1 semaine'
  },
  {
    id: 'genProcedural',
    title: 'Strangeraria',
    role: "Unity • Génération procédural • Création d'inventaire",
    desc: "Jeu d'exploration, de construction, de combat similaire à Terraria",
    itchUrl: 'https://billetsimon.itch.io/strangeraria',
    githubUrl: 'https://github.com/exootik/11-25-TerrariaLike',
    poster: strangerariaPoster,
    videoUrl: strangerariaVideo,
    date: 'Novembre 2025',
    duree: '1 semaine'
  },
  {
    id: 'zombie-fps',
    title: 'Zombie FPS',
    role: 'Unity • Navmesh • Animation',
    desc: "FPS créé sur Unity : système de vagues, plusieurs armes, IA avec un navmesh",
    itchUrl: 'https://billetsimon.itch.io/zombiefps',
    githubUrl: 'https://github.com/exootik/10-24-Fps-ZombieSurvivor',
    poster: zombieFpsPoster,
    videoUrl: zombieFpsVideo,
    date: 'Octobre 2025',
    duree: '1 semaine'
  },
  {
    id: 'pokemon-like',
    title: 'Pokemon-like',
    role: 'C# • Programmation • Sauvegarde',
    desc: "Jeu en console créé pour apprendre le C#",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/09-25-PokeLike',
    poster: pokemonPoster,
    videoUrl: pokemonVideo,
    date: 'Septembre 2025',
    duree: '1 semaine'
  },
  {
    id: 'slime',
    title: 'Slime 3D',
    role: 'C++ • DirectX12 • Dev Gameplay',
    desc: "Jeu d'aventure basé sur notre propre moteur de jeu 3D",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/04-25-Slime3D',
    poster: slime3DPoster,
    videoUrl: slime3DVideo,
    date: 'Avril 2025',
    duree: '3 semaines'
  },
  {
    id: 'moteur',
    title: 'Moteur de jeu 3D',
    role: 'C++ • DirectX12 • Dev Moteur',
    desc: "Création d'un moteur de jeu 3D avec DirectX12",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/03-25-Creation-MoteurDeJeu3D',
    poster: moteur3DPoster,
    videoUrl: moteur3DVideo,
    date: 'Mars 2025',
    duree: '3 semaines'
  },
  {
    id: 'multijoueur',
    title: 'Multijoueur',
    role: 'C++ • Principe du multijoueur • SFML',
    desc: "Création d'un serveur UDP puis connexion de deux joueurs avec SFML",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/01-25-Multijoueur-SFML',
    poster: multijoueurPoster,
    videoUrl: undefined,
    date: 'Janvier 2025',
    duree: '2 semaines'
  },
  {
    id: 'shooter2D',
    title: 'shooter 2D',
    role: 'C++ • Interdisciplinaire • SFML',
    desc: "Jeu de tir réalisé pour le musée automobile Henri Malartre en colaboration avec les artistes de 2eme années",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/12-24-Shooter-Game2D',
    poster: shooter2DPoster,
    videoUrl: shooter2DVideo,
    date: 'Decembre 2024',
    duree: '3 semaines'
  },
  {
    id: 'rugby-ia',
    title: 'Rugby IA',
    role: 'C++ • IA • State machine',
    desc: "Jeu de rugby joué par deux IA",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/11-24-IA-Rugby2D',
    poster: rugbyIAPoster,
    videoUrl: rugbyIAVideo,
    date: 'Novembre 2024',
    duree: '1 semaine'
  },
  {
    id: 'casse-brique',
    title: 'Casse Brique',
    role: 'C++ • Encapsulation • SFML',
    desc: "Premier projet de jeu au Gaming Campus pour apprendre les bases du C++",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/10-24-Break-Brick-SFML',
    poster: casseBriquePoster,
    videoUrl: casseBriqueVideo,
    date: 'Octobre 2024',
    duree: '2 semaines'
  }
]

export default function Projects({ id = 'projects' }: { id?: string }) {
  return (
    <section id={id} className="section-block section-projects" tabIndex={-1}>
      <div className="section-title">
        <h2>Projets</h2>
      </div>

      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
        <div />
      </div>

      <div className="grid" style={{marginTop:16}}>
        {PROJECTS.map(p => (
          <ProjectCard
            key={p.id}
            title={p.title}
            role={p.role}
            desc={p.desc}
            itchUrl={p.itchUrl}
            githubUrl={p.githubUrl}
            poster={p.poster}
            videoUrl={p.videoUrl}
            date={p.date}
            duree={p.duree}
          />
        ))}
      </div>
    </section>
  )
}

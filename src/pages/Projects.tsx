
import ProjectCard from '../components/ProjectCard'

// Import images et videos
// framed
import framedPoster from '../assets/images/imgFramed.png';
//import framedVideo  from '../assets/videos/videoAngryBirdLike.mp4';
// angryBirdLike
import angryBirdLikePoster from '../assets/images/imgAngryBirdLike.jpg';
import angryBirdLikeVideo  from '../assets/videos/videoAngryBirdLike.mp4';
// shaderZelda
//import pharaonEnigmaPoster from '../assets/images/imgShaderZelda.jpg';
//import pharaonEnigmaVideo  from '../assets/videos/videoShaderZelda.mp4';

// shaderZelda
import shaderZeldaPoster from '../assets/images/imgShaderZelda.jpg';
import shaderZeldaVideo  from '../assets/videos/videoShaderZelda.mp4';
// Card Game Mafia
import cardGameMafiaPoster from '../assets/images/imgCardGameMafia.jpg';
import cardGameMafiaVideo  from '../assets/videos/videoCardGameMafia.mp4';
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
  personnes?: number
}

const PROJECTS: Project[] = [
  {
    id: 'Framed',
    title: 'Framed',
    role: "Unreal Engine • Lead Tech • Architecture • Animation",
    desc: "En cours de déploiement : Jeu de fin d'études réalisé sur Unreal Engine en collaboration avec des artistes, business et TV. Incarnez un gardien de musée et immergez vous à l'intérieur des tableaux maudits pour lever leur malédiction",
    itchUrl: '',
    githubUrl: '',
    poster: framedPoster,
    videoUrl: "",
    date: '04/2026',
    duree: '8 semaines',
    personnes: 15
  },
  {
    id: 'AngryBirdLike',
    title: 'Angry Bird Like',
    role: "Unreal Engine • Physiques • fracture",
    desc: "Jeu angry bird réalisé pour apprendre la physique avancée et les systemes de fracture d'Unreal Engine",
    itchUrl: '',
    githubUrl: 'https://github.com/exootik/Game-UE-AngryBirdLike',
    poster: angryBirdLikePoster,
    videoUrl: angryBirdLikeVideo,
    date: '03/2026',
    duree: '1 semaine',
    personnes: 2
  },
  // {
  //   id: 'PharaonEnigma',
  //   title: 'Pharaon Enigma',
  //   role: "Unreal Engine • Puzzles • Blueprints",
  //   desc: "Jeu de puzzle avec des énigmes pour découvrir le fonctionnement du moteur Unreal Engine",
  //   itchUrl: '',
  //   githubUrl: 'https://github.com/exootik/Game-UE-PharaonEnigma',
  //   poster: pharaonEnigmaPoster,
  //   videoUrl: pharaonEnigmaVideo,
  //   date: '02/2026',
  //   duree: '2 semaines',
  //   personnes: 2
  // },
  {
    id: 'Shader',
    title: 'Zelda Game',
    role: "Unity • Shader • Particle • Feedback",
    desc: "Jeu Zelda réalisé sur Unity pour apprendre à utiliser les Shaders et les particles. Explorez le monde et combattez des ennemies",
    itchUrl: 'https://billetsimon.itch.io/zelda-awakening-like',
    githubUrl: 'https://github.com/exootik/Game-Shader-ZeldaAwakening',
    poster: shaderZeldaPoster,
    videoUrl: shaderZeldaVideo,
    date: '01/2026',
    duree: '1 semaine',
    personnes: 2
  },
  {
    id: 'UiUx',
    title: 'Game Card Mafia',
    role: "Unity • MVC • UI • Scriptable Object • Tour par tour",
    desc: "Jeu de cartes tour par tour, il faut survivre à des manches successives d'attaques de la mafia en utilisant des cartes pour se défendre",
    itchUrl: 'https://billetsimon.itch.io/game-card-mafia',
    githubUrl: 'https://github.com/exootik/Game-UI-CardGameMafia',
    poster: cardGameMafiaPoster,
    videoUrl: cardGameMafiaVideo,
    date: '12/2025',
    duree: '1 semaine',
    personnes: 2
  },
  {
    id: '3C',
    title: 'Where we hide',
    role: "Unity • 3C • Navmesh • Animation",
    desc: "Jeu d'horreur avec un personnage miniature qui résout des énigmes",
    itchUrl: 'https://billetsimon.itch.io/where-we-hide',
    githubUrl: 'https://github.com/exootik/Game-Unity3C-WhereWeHide',
    poster: whereWeHidePoster,
    videoUrl: whereWeHideVideo,
    date: '11/2025',
    duree: '1 semaine',
    personnes: 2
  },
  {
    id: 'genProcedural',
    title: 'Strangeraria',
    role: "Unity • Génération procédural • Création d'inventaire",
    desc: "Jeu d'exploration, de construction, de combat similaire à Terraria",
    itchUrl: 'https://billetsimon.itch.io/strangeraria',
    githubUrl: 'https://github.com/exootik/Game-UnityGenProcedurale-TerrariaLike',
    poster: strangerariaPoster,
    videoUrl: strangerariaVideo,
    date: '11/2025',
    duree: '1 semaine',
    personnes: 2
  },
  {
    id: 'zombie-fps',
    title: 'Zombie FPS',
    role: 'Unity • Navmesh • Animation',
    desc: "FPS créé sur Unity : système de vagues, plusieurs armes, IA avec un navmesh",
    itchUrl: 'https://billetsimon.itch.io/zombiefps',
    githubUrl: 'https://github.com/exootik/Game-UnityFps-ZombieSurvivor',
    poster: zombieFpsPoster,
    videoUrl: zombieFpsVideo,
    date: '10/2025',
    duree: '1 semaine',
    personnes: 2
  },
  {
    id: 'pokemon-like',
    title: 'Pokemon-like',
    role: 'C# • Programmation • Sauvegarde',
    desc: "Jeu en console créé pour apprendre le C#",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/Game-POO-PokeLikeConsole',
    poster: pokemonPoster,
    videoUrl: pokemonVideo,
    date: '09/2025',
    duree: '1 semaine',
    personnes: 3
  },
  {
    id: 'slime',
    title: 'Slime 3D',
    role: 'C++ • DirectX12 • Dev Gameplay',
    desc: "Jeu d'aventure basé sur notre propre moteur de jeu 3D",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/Game-DirectX12-Slime3D',
    poster: slime3DPoster,
    videoUrl: slime3DVideo,
    date: '04/2025',
    duree: '3 semaines',
    personnes: 3
  },
  {
    id: 'moteur',
    title: 'Moteur de jeu 3D',
    role: 'C++ • DirectX12 • Dev Moteur',
    desc: "Création d'un moteur de jeu 3D avec DirectX12",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/Game-DirectX12-CreationMoteurDeJeu3D',
    poster: moteur3DPoster,
    videoUrl: moteur3DVideo,
    date: '03/2025',
    duree: '3 semaines',
    personnes: 3
  },
  {
    id: 'multijoueur',
    title: 'Multijoueur',
    role: 'C++ • Principe du multijoueur • SFML',
    desc: "Création d'un serveur UDP puis connexion de deux joueurs avec SFML",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/Game-SFML-Multijoueur2D',
    poster: multijoueurPoster,
    videoUrl: undefined,
    date: '01/2025',
    duree: '2 semaines',
    personnes: 2
  },
  {
    id: 'shooter2D',
    title: 'shooter 2D',
    role: 'C++ • Interdisciplinaire • SFML',
    desc: "Jeu de tir réalisé pour le musée automobile Henri Malartre en colaboration avec les artistes de 2eme années",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/Game-SFML-Shooter2D',
    poster: shooter2DPoster,
    videoUrl: shooter2DVideo,
    date: '12/2024',
    duree: '3 semaines',
    personnes: 3
  },
  {
    id: 'rugby-ia',
    title: 'Rugby IA',
    role: 'C++ • IA • State machine',
    desc: "Jeu de rugby joué par deux IA",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/Game-IA-Rugby2D',
    poster: rugbyIAPoster,
    videoUrl: rugbyIAVideo,
    date: '11/2024',
    duree: '1 semaine',
    personnes: 2
  },
  {
    id: 'casse-brique',
    title: 'Casse Brique',
    role: 'C++ • Encapsulation • SFML',
    desc: "Premier projet de jeu au Gaming Campus pour apprendre les bases du C++",
    itchUrl: undefined,
    githubUrl: 'https://github.com/exootik/Game-SFML-BreakBrick2D',
    poster: casseBriquePoster,
    videoUrl: casseBriqueVideo,
    date: '10/2024',
    duree: '2 semaines',
    personnes: 2
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
            personnes={p.personnes}
          />
        ))}
      </div>
    </section>
  )
}

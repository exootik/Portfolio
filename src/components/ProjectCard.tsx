import { useState } from 'react'

type Props = {
  title: string
  role?: string
  desc: string
  itchUrl?: string
  githubUrl?: string

  poster?: string
  videoUrl?: string

  date?: string
  duree?: string
  personnes?: number
}

export default function ProjectCard({ title, role, desc, itchUrl, githubUrl, poster, videoUrl, date, duree, personnes }: Props){
  const [showVideo, setShowVideo] = useState(false)

  const hasVideo = !!videoUrl
  const handleToggle = () => {
    if (hasVideo) setShowVideo(v => !v)
  }

  const handleKeyOnMedia = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }
  
  // Construction des métadonnées avec icône pour les personnes
  const metaParts = []
  if (date) metaParts.push(date)
  if (duree) metaParts.push(duree)
  if (personnes) {
    metaParts.push(`Équipe de ${personnes}`)
  }
  const meta = metaParts.join(' • ')  

  return (
    <article className="project">
      {hasVideo && showVideo ? (
        <video className="media" src={videoUrl} poster={poster} controls muted playsInline />
      ) : (
        <>
          {/* Si on a une vidéo on transforme l'image en "bouton" cliquable/accessible */}
          {hasVideo ? (
            <button
              type="button"
              className={`media-button ${poster ? 'pixel-frame' : ''}`}
              onClick={handleToggle}
              onKeyDown={handleKeyOnMedia}
              aria-pressed={showVideo}
              aria-label={showVideo ? `Afficher l'image de ${title}` : `Voir la vidéo de ${title}`}
            >
              <img className="media" src={poster} alt={title} />
            </button>
          ) : (
            /* sinon on affiche une image statique */
            <img className={`media ${poster ? 'pixel-frame' : ''}`} src={poster} alt={title} />
          )}

          <div className="pixel-overlay" aria-hidden="true" />
        </>
      )}

      <h3 style={{marginTop:12}}>{title}</h3>
      {role && <div className="muted" style={{marginTop:2}}>{role}</div>}
      <p style={{marginTop:8}}>{desc}</p>

      <div className="project-footer">
        {meta && <div className="muted meta">{meta}</div>}
        <div className="project-buttons">
          {itchUrl && (
            <a className="btn pixel" href={itchUrl} target="_blank" rel="noreferrer">
              Jouer
            </a>
          )}

          {githubUrl && (
            <a
              className="btn github"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir ${title} sur GitHub`}
            >
              GitHub
            </a>
          )}

          {hasVideo && (
            <button className="btn btn-video" onClick={handleToggle}>
              {showVideo ? "Afficher l'image" : "Voir la vidéo"}
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

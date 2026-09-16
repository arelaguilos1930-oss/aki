import { useRef, useState, useEffect } from 'react'
import musicFile from './assets/mylove.ogg'

function MusicPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)



  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }
    useEffect(() => {
    const audio = audioRef.current
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Some browsers still block even muted autoplay
        setIsPlaying(false)
      })
  }, [])

  return (
    <div className="music-player">
      <audio ref={audioRef} src={musicFile} loop />
      <button onClick={togglePlay}>
        {isPlaying ? "⏸" : "▶"}
      </button>
     
    </div>
  )
}

export default MusicPlayer
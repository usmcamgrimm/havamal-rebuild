import React from 'react'

export default function HavamalVIdeo ({ videoURL, videoTitle, ...props }) {
  return (
    <iframe className="video">
      src={videoURL}
      title={videoTitle}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    </iframe>
  )
}
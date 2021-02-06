import React from 'react'

export default function HavamalVIdeo ({ videoURL, videoTitle, ...props }) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={videoURL}
        title={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
import React from 'react';

export default function HavamalVideo ({ videoURL, videoTitle, ...props )} {
  return (
    <div>
      <iframe
        src={videoURL}
        title={videoTitle}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

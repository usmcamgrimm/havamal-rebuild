import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const VideoPlaylist = () => {
    const videos = useStaticQuery(graphql` query {
        allYoutubeVideo(filter: {channelId: {eq: "UCmGfesgQAVTgpJqGf9dt3wA"}}) {
            edges {
                node {
                    id
                    title
                    description
                    videoId
                    channelTitle
                }
            }
        }
    }`)

    const Playlist = videos.allYoutubeVideo.edges
    return (
        <div>
            <div className="flex flex-nowrap justify-center">
                {Playlist.map((video,index) => (
                    <div key={`${index}-yt`}>
                        <iframe src={video.node.id} className="m-0 text-center" />
                    </div>
                ))}
            </div>
        </div>
    )
}
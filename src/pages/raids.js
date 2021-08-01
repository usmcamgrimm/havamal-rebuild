import React from 'react'
import SEO from "../components/seo"
import styled from 'styled-components'

const Line = styled.hr`
  width: 40%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #606060;
`;

export default function RaidsPage() {
  return (
    <>
      <SEO title="Raids" />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Upcoming Raids
      </h1>
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col justify-center items-center font-grenze text-white text-2xl">
          <p>Raise Your Horns - 10 Sept 2021</p>
          <p>Musikhuzet, Rønne, Denmark</p>
        </div>
        <div className="flex flex-row place-content-center space-x-16 font-grenze text-white text-xl">
          <a href="https://www.facebook.com/raiseyourhornsdk/" target="_blank" rel="noreferrer">
            <p className="font-grenze text-white hover:text-yellow">INFO</p>
          </a>
          <a href="https://www.google.com/maps/place/Musikhuzet/@55.1025185,14.6967818,17z/data=!3m1!4b1!4m5!3m4!1s0x46551ae2afe105cf:0xdfa50fd55375a00e!8m2!3d55.1025185!4d14.6989705" target="_blank" rel="noreferrer">
            <p className="font-grenze text-white hover:text-yellow">MAP</p>
          </a>
        </div>
      </div>
      <Line />
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col justify-center items-center font-grenze text-white text-2xl">
          <p>Järfälla Metal Fest - 28 May 2022</p>
          <p>Fredagsmangel, Järfälla, Sweden</p>
        </div>
        <div className="flex flex-row place-content-center space-x-16 font-grenze text-white text-xl">
          <a href="https://www.facebook.com/2228032767282124/posts/3635924743159579/?sfnsn=mo" target="_blank" rel="noreferrer">
            <p className="font-grenze text-white hover:text-yellow">INFO</p>
          </a>
          <a href="https://www.google.com/maps/place/Drabantv%C3%A4gen+11,+177+50+J%C3%A4rf%C3%A4lla,+Sweden/@59.4246958,17.8351142,17.75z/data=!4m5!3m4!1s0x465fa1d8b6ffe2eb:0x853a0a00e50acb6!8m2!3d59.4240721!4d17.8380435" target="_blank" rel="noreferrer">
            <p className="font-grenze text-white hover:text-yellow">MAP</p>
          </a>
        </div>
      </div>
    </>
  )
}
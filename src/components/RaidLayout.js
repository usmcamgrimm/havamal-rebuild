import React from 'react'

export default function RaidLayout({ children }) {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex flex-col justify-center items-center font-grenze text-white text-2xl">
        {children}
      </div>
      <div className="flex flex-row place-content-center space-x-16 font-grenze text-white text-xl">
        {children}
      </div>
    </div>
  )
}
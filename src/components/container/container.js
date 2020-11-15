import React from "react"
import ContainerStyle from "./container.module.less"

export default function Container({ children }) {
  return (
    <div className={ContainerStyle.container}>
      <div className={ContainerStyle.welcomeWrapper}>
        {children}
      </div>
    </div>
  )
}

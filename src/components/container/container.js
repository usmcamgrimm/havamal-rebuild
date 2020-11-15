import React from "react"
import ContainerStyle from "./container.module.less"

export default function Container({ children }) {
  return (
    <div className={ContainerStyle.container}>
        {children}
    </div>
  )
}

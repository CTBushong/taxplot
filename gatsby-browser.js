import React from "react"
import UserContext from "./src/components/UserContext"

export const wrapRootElement = ({ element }) => {
  return <UserContext>{element}</UserContext>
}
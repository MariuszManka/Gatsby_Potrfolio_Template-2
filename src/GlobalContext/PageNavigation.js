import React, { createContext } from "react"

export const NavContext = createContext()

const NavigationData = [
  {
    id: 1,
    name: "home",
    slug: "#home",
  },
  {
    id: 2,
    name: "services",
    slug: "#services",
  },
  {
    id: 3,
    name: "portfolio",
    slug: "#portfolio",
  },
  {
    id: 4,
    name: "contact",
    slug: "#contact",
  },
]

export function NavProvider({ children }) {
  return (
    <NavContext.Provider value={{ NavigationData }}>
      {children}
    </NavContext.Provider>
  )
}

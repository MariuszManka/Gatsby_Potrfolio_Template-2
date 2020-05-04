import React, { createContext } from "react"

export const CardContext = createContext()

export const CardData = [
  {
    id: 1,
    slug: "nature",
  },
  {
    id: 2,
    slug: "new-york-city",
  },
  {
    id: 3,
    slug: "bella-parker",
  },
  {
    id: 4,
    slug: "twenty-one-pilots",
  },
  {
    id: 5,
    slug: "landscape",
  },
  {
    id: 6,
    slug: "weddings",
  },
]

export function CardProvider({ children }) {
  return (
    <CardContext.Provider value={{ CardData }}>{children}</CardContext.Provider>
  )
}

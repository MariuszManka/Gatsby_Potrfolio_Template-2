import React from "react"
import { NavProvider } from "./index"

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<NavProvider />]}>{children}</ProviderComposer>
  )
}

export { ContextProvider }

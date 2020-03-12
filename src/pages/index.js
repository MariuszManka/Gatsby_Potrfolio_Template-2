import React from "react"
import MainLayout from "src/layouts/MainLayout"
import {
  HomePage,
  PortfolioPage,
  ContactPage,
  ServicesPage,
} from "src/components/pages/PagesExport"
import lax from "lax.js"

window.onload = function() {
  lax.setup() // init

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}

const IndexPage = () => (
  <MainLayout>
    <HomePage />
    <ServicesPage />
    <PortfolioPage />
    <ContactPage />
  </MainLayout>
)

export default IndexPage

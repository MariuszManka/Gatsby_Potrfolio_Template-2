import React from "react"
import MainLayout from "src/layouts/MainLayout"
import {
  HomePage,
  PortfolioPage,
  ContactPage,
  ServicesPage,
} from "src/components/pages/PagesExport"

const IndexPage = () => (
  <MainLayout>
    <HomePage />
    <ServicesPage />
    <PortfolioPage />
    <ContactPage />
  </MainLayout>
)

export default IndexPage

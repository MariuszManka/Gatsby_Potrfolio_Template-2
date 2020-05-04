import React from "react"
import MainLayout from "src/layouts/MainLayout"
import {
  HomePage,
  PortfolioPage,
  ContactPage,
  ServicesPage,
} from "src/components/pages/PagesExport"
import { ContextProvider } from "src/GlobalContext/GlobalProvider"

const IndexPage = () => (
  <ContextProvider>
    <MainLayout>
      <HomePage />
      <ServicesPage />
      <PortfolioPage />
      <ContactPage />
    </MainLayout>
  </ContextProvider>
)

export default IndexPage

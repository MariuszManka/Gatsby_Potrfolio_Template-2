import React from "react"
import MainLayout from "src/layouts/index"
import { HomePage, PortfolioPage } from "src/components/pages/PagesExport"

const IndexPage = () => (
  <MainLayout>
    <HomePage />

    <div id="services" style={{ height: `100vh`, background: "#353b48" }}></div>
    <PortfolioPage />
    <div id="about" style={{ height: `100vh`, background: "#353b48" }}></div>
  </MainLayout>
)

export default IndexPage

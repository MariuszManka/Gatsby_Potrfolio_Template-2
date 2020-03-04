import React from "react"
import MainLayout from "src/layouts/index"
import { HomePage } from "src/components/pages/PagesExport"

const IndexPage = () => (
  <MainLayout>
    <HomePage />

    <div id="contact" style={{ height: `100vh`, background: "#0fbcf9" }}></div>
    <div id="services" style={{ height: `100vh`, background: "#ff5e57" }}></div>
    <div id="about" style={{ height: `100vh`, background: "#353b48" }}></div>
    <div
      id="portfolio"
      style={{ height: `100vh`, background: "#fff200" }}
    ></div>
  </MainLayout>
)

export default IndexPage

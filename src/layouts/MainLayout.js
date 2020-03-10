import React from "react"
// import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "src/assets/globalStyles/globalStyle"
import { ThemeProvider } from "styled-components"
import theme from "src/assets/globalStyles/theme"
import Menu from "src/components/organisms/Menu/Menu"

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Menu />
        {children}
      </ThemeProvider>
    </>
  )
}

export default MainLayout

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  PortfolioWrapper,
  PortfolioHeading,
  PortfolioParagraph,
  Overlay,
} from "./StyledPortfolioPage"
import Cards from "src/components/molecules/Cards/Cards"

export const Portfolio = graphql`
  {
    datoCmsPortfolio {
      portfolioparagraph
      portfolioheading
      portfoliobackground {
        fluid(maxWidth: 700, maxHeight: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
export const PortfolioPage = () => {
  const portfolio = useStaticQuery(Portfolio)

  const {
    datoCmsPortfolio: {
      portfolioparagraph,
      portfolioheading,
      portfoliobackground,
    },
  } = portfolio

  return (
    <PortfolioWrapper background={portfoliobackground.fluid.src} id="portfolio">
      <Overlay style={{ gridArea: "header cards" }} />
      <div style={{ gridArea: "header" }}>
        <PortfolioHeading dark>{portfolioheading}</PortfolioHeading>
        <PortfolioParagraph light size={"2.5rem"}>
          {portfolioparagraph}
        </PortfolioParagraph>
      </div>

      <Cards />
    </PortfolioWrapper>
  )
}

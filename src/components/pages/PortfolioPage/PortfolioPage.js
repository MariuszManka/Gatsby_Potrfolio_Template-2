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
        <PortfolioHeading
          data-sal-duration="700"
          data-sal="fade"
          data-sal-easing="ease-out-back"
          dark
        >
          {portfolioheading}
        </PortfolioHeading>
        <PortfolioParagraph
          data-sal-duration="700"
          data-sal="slide-up"
          data-sal-easing="ease-out-back"
          light
          size={"2.5rem"}
        >
          {portfolioparagraph}
        </PortfolioParagraph>
      </div>

      <Cards />
    </PortfolioWrapper>
  )
}

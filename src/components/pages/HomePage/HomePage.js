import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroImage from "src/components/templates/HeroImage/HeroImage"

import {
  HomeWrapper,
  HomeHeading,
  HomeParagraph,
  Overlay,
} from "./StyledHomePage"

export const Home = graphql`
  {
    datoCmsHome {
      homeparagraph
      homeheading
      homeheroimage {
        fluid(maxWidth: 700, maxHeight: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export const HomePage = props => {
  // const form = context.useContext()

  console.log(props)
  const home = useStaticQuery(Home)
  const {
    datoCmsHome: { homeparagraph, homeheading, homeheroimage },
  } = home

  return (
    <>
      <HomeWrapper id="home">
        <Overlay />
        <HeroImage homeImage fluid={homeheroimage.fluid} />
        <HomeParagraph
          data-sal-duration="700"
          data-sal="fade"
          data-sal-easing="ease-out-back"
          light
        >
          {homeparagraph}
        </HomeParagraph>
        <HomeHeading
          data-sal-duration="700"
          data-sal="fade"
          data-sal-easing="ease-out-back"
          light
        >
          {homeheading}
        </HomeHeading>
      </HomeWrapper>
    </>
  )
}

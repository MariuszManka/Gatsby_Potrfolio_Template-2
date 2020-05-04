import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  StyledImage,
  CardWrapper,
  Card,
  CardContent,
  CardLine,
} from "./StyledCard"
import Heading from "src/components/atoms/Heading/Heading"
import Paragraph from "src/components/atoms/Paragraph/Paragraph"

export const CardsQuery = graphql`
  query getAllCards {
    allDatoCmsCard {
      nodes {
        card {
          cardcontent
          cardheading
          cardimage {
            fluid(maxWidth: 300, maxHeight: 200) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          slug
        }
      }
    }
  }
`

const Cards = () => {
  const cards = useStaticQuery(CardsQuery)

  const {
    allDatoCmsCard: { nodes },
  } = cards

  return (
    <CardWrapper>
      {nodes[0].card.map(card => {
        return (
          <Card
            data-sal-duration="700"
            data-sal="slide-up"
            data-sal-easing="ease-out-back"
            key={card.id}
            to={card.slug}
          >
            <StyledImage fluid={card.cardimage.fluid} />
            <CardContent>
              <Heading dark size={"3rem"}>
                {card.cardheading}
              </Heading>
              <CardLine />
              <Paragraph dark size={"2.3rem"}>
                {card.cardcontent}
              </Paragraph>
            </CardContent>
          </Card>
        )
      })}
    </CardWrapper>
  )
}
export default Cards

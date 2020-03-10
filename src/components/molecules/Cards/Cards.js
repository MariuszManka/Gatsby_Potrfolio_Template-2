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
  {
    allDatoCmsCard {
      nodes {
        card {
          cardimage {
            fluid(maxWidth: 300, maxHeight: 200) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          cardheading
          cardcontent
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
          <Card key={card.id}>
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

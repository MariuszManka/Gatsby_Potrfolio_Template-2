import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Heading from "src/components/atoms/Heading/Heading"
import Paragraph from "src/components/atoms/Paragraph/Paragraph"
import {
  CardWrapper,
  IconWrapper,
  ContentWrapper,
  ServicesWrapper,
  InnerWrapper,
  Shape,
} from "./StyledServicesPage"
import Icon from "src/assets/icon/Icon"

export const Services = graphql`
  {
    allDatoCmsService {
      nodes {
        serviceparagraph
        serviceheading
        card {
          content
          iconname
          heading
          id
        }
        shape {
          url
        }
      }
    }
  }
`

export const ServicesPage = () => {
  const service = useStaticQuery(Services)

  const {
    allDatoCmsService: { nodes },
  } = service

  const { id, serviceparagraph, serviceheading, card, shape } = nodes[1]
  console.log(shape.url)

  return (
    <ServicesWrapper id="services">
      <Shape src={shape.url} />
      <InnerWrapper>
        <Heading dark>{serviceheading}</Heading>
        <Paragraph size={"2.5rem"} main>
          {serviceparagraph}
        </Paragraph>
        <CardWrapper>
          {card.map(card => {
            return (
              <ContentWrapper key={card.id}>
                <IconWrapper>
                  <Icon color="white" md={75} name={card.iconname} />
                </IconWrapper>
                <Heading size={"2.5rem"}>{card.heading}</Heading>
                <Paragraph size={"1.8rem"}>{card.content}</Paragraph>
              </ContentWrapper>
            )
          })}
        </CardWrapper>
      </InnerWrapper>
    </ServicesWrapper>
  )
}

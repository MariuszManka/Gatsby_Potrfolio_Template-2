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
// import { useLax, useLaxElement } from "use-lax"

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

  // useLax()
  // const ref = useLaxElement()

  const { id, serviceparagraph, serviceheading, card, shape } = nodes[1]

  return (
    <ServicesWrapper id="services">
      <Shape src={shape.url} />
      <InnerWrapper>
        <Heading
          data-sal-duration="700"
          data-sal="fade"
          data-sal-easing="ease-out-back"
          dark
        >
          {serviceheading}
        </Heading>
        <Paragraph
          data-sal-duration="700"
          data-sal="slide-up"
          data-sal-easing="ease-out-back"
          size={"2.5rem"}
          main
        >
          {serviceparagraph}
        </Paragraph>
        <CardWrapper>
          {card.map(card => {
            return (
              <ContentWrapper>
                <IconWrapper
                  data-sal-duration="700"
                  data-sal="slide-left"
                  data-sal-delay="200"
                  data-sal-easing="ease-out-back"
                >
                  <Icon color="white" md={"75px"} name={card.iconname} />
                </IconWrapper>
                <Heading
                  data-sal-duration="700"
                  data-sal="slide-up"
                  data-sal-delay="600"
                  data-sal-easing="ease-out-back"
                  size={"2.5rem"}
                >
                  {card.heading}
                </Heading>
                <Paragraph
                  key={card.key}
                  data-sal="slide-up"
                  data-sal-delay="600"
                  data-sal-easing="ease-out-back"
                  size={"1.8rem"}
                >
                  {card.content}
                </Paragraph>
              </ContentWrapper>
            )
          })}
        </CardWrapper>
      </InnerWrapper>
    </ServicesWrapper>
  )
}

import React from "react"
import {
  Shape,
  IconWrapper,
  Wrapper,
  StyledImage,
  Content,
  Line,
} from "./StyledCardPreview"
import Icon from "src/assets/icon/Icon"
import GlobalStyle from "src/assets/globalStyles/globalStyle"
import { ThemeProvider } from "styled-components"
import theme from "src/assets/globalStyles/theme"
import Paragraph from "src/components/atoms/Paragraph/Paragraph"
import Heading from "src/components/atoms/Heading/Heading"

export const query = graphql`
  query getSinglePreview($id: Int!) {
    allDatoCmsCardspreview(filter: { cardId: { eq: $id } }) {
      nodes {
        cardId
        description
        heading
        mainphoto {
          fluid(maxWidth: 600, maxHeight: 400) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

const CardPreview = ({ data }) => {
  const {
    allDatoCmsCardspreview: { nodes },
  } = data

  const { heading, description, mainphoto } = nodes[0]

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Shape>
            <StyledImage fluid={mainphoto.fluid} />
            <IconWrapper to="#portfolio">
              <Icon name="arrow_back" color="white" md={"8rem"} />
            </IconWrapper>
          </Shape>
          <Content>
            <Heading size="5.5rem">{heading}</Heading>
            <Line />
            <Paragraph size="18px">{description}</Paragraph>
          </Content>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}
export default CardPreview

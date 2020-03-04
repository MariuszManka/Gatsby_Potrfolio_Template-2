import Image from "gatsby-image"
import styled from "styled-components"

const HeroImage = styled(Image)`
  height: 100vh;
  width: 100%;

  /* ${({ theme, homeImage }) =>
    homeImage && `margin-top: -${theme.menuSize}`}; */
`

export default HeroImage

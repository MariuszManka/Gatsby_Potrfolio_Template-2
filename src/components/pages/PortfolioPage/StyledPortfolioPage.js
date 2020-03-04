import styled from "styled-components"
import Heading from "src/components/atoms/Heading/Heading"
import Paragraph from "src/components/atoms/Paragraph/Paragraph"
import { Portfolio } from "./PortfolioPage"

export const PortfolioWrapper = styled.section`
  position: relative;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  background: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  background-attachment: fixed;
  padding: 100px 0;
`
export const PortfolioParagraph = styled(Paragraph)`
  /* color: #646d6e; */
  position: relative;
  z-index: 10;
`

export const PortfolioHeading = styled(Heading)`
  position: relative;
  z-index: 10;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-image: linear-gradient(
    180deg,
    #f8f9fa 12.24%,
    rgba(255, 255, 255, 0) 65%
  );
  background-attachment: fixed;
`

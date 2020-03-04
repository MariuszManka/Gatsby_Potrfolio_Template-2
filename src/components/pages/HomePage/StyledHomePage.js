import styled from "styled-components"
import Heading from "src/components/atoms/Heading/Heading"
import Paragraph from "src/components/atoms/Paragraph/Paragraph"

export const HomeWrapper = styled.main`
  position: relative;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  display: grid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeHeading = styled(Heading)`
  position: absolute;
  z-index: 10;
  top: 55%;
  &::selection {
    color: ${({ theme }) => theme.colors.black};
  }
`

export const HomeParagraph = styled(Paragraph)`
  position: absolute;
  z-index: 10;
  top: 35%;

  &::selection {
    color: ${({ theme }) => theme.colors.black};
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 39, 46, 0.5);
`

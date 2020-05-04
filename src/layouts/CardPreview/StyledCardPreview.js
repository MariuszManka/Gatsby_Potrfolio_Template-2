import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

export const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr;
  grid-template-areas: "aside content";
  min-height: 100vh;
  max-width: 100vw;
`

export const Shape = styled.div`
  grid-area: aside;
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  width: 350px;
`
export const IconWrapper = styled(Link)`
  position: absolute;
  top: 30px;
  left: 35px;
  font-size: 5rem;
`
export const StyledImage = styled(Image)`
  grid-area: aside;
  position: absolute;
  top: 50%;
  right: -140%;
  transform: translate(-50%, -50%);
  max-height: 450px;
  width: 700px;
  box-shadow: 14px 15px 41px -11px rgba(0, 0, 0, 0.75);
`
export const Content = styled.div`
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  padding: 80px;

  & > p {
    text-align: justify;
  }
`

export const Line = styled.div`
  height: 3px;
  width: 40%;
  margin: 45px auto;
  background-color: ${({ theme }) => theme.colors.primary};
`

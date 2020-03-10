import styled from "styled-components"
import Image from "gatsby-image"

export const StyledImage = styled(Image)`
  /* width: 295px;*/
  max-height: 170px;
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  cursor: pointer;
`
export const CardWrapper = styled.div`
  display: grid;
  grid-area: cards;
  grid-template-columns: repeat(3, 270px);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 110px;
  grid-row-gap: 80px;
  justify-content: center;
  width: 100%;
  margin: 5% 0 10% 0;
`
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.cardBorderRadius};
`
export const CardContent = styled.div`
  padding: 25px 15px;
`
export const CardLine = styled.div`
  height: 3px;
  width: 40%;
  margin: 15px auto;
  background-color: ${({ theme }) => theme.colors.primary};
`

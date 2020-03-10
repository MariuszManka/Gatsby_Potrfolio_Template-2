import styled from "styled-components"

export const ServicesWrapper = styled.section`
  min-height: calc(100vh + 75px);
  position: relative;
  overflow: hidden;
`
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: 150px 50px 1fr;
  grid-column-gap: 150px;
  align-items: flex-start;
  justify-content: center;
`

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  margin: 35px 0;
  h1 {
    white-space: nowrap;
    margin: 25px 0;
  }
`
export const InnerWrapper = styled.div`
  position: relative;
  top: 75px;
  height: 100%;
  width: 100%;
`
export const Shape = styled.img`
  position: absolute;
  top: 0;
  left: -5px;
  right: 0;
  width: 105%;
  /* height: 20%; */
  z-index: -1;
`

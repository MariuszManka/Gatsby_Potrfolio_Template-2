import styled from "styled-components"

export const StyledContactPage = styled.section`
  position: relative;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow: hidden;
  padding: 0px 0;
  height: calc(100vh - 75px);
`
export const Shape = styled.div`
  background-image: url(${({ url }) => url});
  height: 35vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`
export const Image = styled.img`
  position: absolute;
  z-index: 5;
  height: 45vh;
  bottom: 45%;
  transform: translateY(50%);
  left: 5%;
`
export const FormWrapper = styled.form`
  position: absolute;
  right: 5%;
  top: 25%;
  display: flex;
  flex-direction: column;
  width: 30%;
`

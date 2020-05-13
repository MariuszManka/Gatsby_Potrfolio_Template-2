import styled from "styled-components"

const Heading = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  margin: 0 auto;
  padding: 0;
  letter-spacing: 2px;
  font-size: ${({ size, theme }) => (size ? size : theme.sizes.heading)};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, dark, light, main }) =>
    (dark && theme.colors.black) ||
    (light && theme.colors.white) ||
    (main && theme.colors.paragraph)};

  @media ${({ theme }) => theme.devices.mobileS} {
    font-size: 35px !important;
    margin: 40px auto;
  }
`
export default Heading

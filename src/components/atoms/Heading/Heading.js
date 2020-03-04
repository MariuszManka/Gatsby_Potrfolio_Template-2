import styled from "styled-components"

const Heading = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  font-size: ${({ size, theme }) => (size ? size : theme.sizes.heading)};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, dark }) =>
    dark ? theme.colors.black : theme.colors.white};
`
export default Heading

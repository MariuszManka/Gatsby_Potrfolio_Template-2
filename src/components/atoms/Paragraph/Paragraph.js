import styled from "styled-components"

const Paragraph = styled.p`
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  font-size: ${({ size, theme }) => (size ? size : theme.sizes.paragraph)};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme, dark }) =>
    dark ? theme.colors.black : theme.colors.white};
`
export default Paragraph

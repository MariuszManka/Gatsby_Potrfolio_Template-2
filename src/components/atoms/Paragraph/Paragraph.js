import styled from "styled-components"

const Paragraph = styled.p`
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  font-size: ${({ size, theme }) => (size ? size : theme.sizes.paragraph)};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme, dark, light, main }) =>
    (dark && theme.colors.black) ||
    (light && theme.colors.white) ||
    (main && theme.colors.paragraph)};
`
export default Paragraph

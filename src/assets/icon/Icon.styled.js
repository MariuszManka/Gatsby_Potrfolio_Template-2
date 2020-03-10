import styled from "styled-components"
/**
 * Komponent stylizujacy ikonę
 * @param {Bool} normal - zmienie kolor ikony na domyślny szary - #555
 * @param {Number} md - odpowiedzialny za rozmiar ikonki, domyślnie - 24px
 * @param {Bool} dark - odpowiedzialny za kolor ikonki
 * @param {Bool} light - odpowiedzialny za kolor ikonki
 * @param {Number} rotate - odpowiedzialny za rotację ikony
 */

export const StlyedIcon = styled.i`
  font-family: "Material Icons";
  cursor: pointer;
  font-size: ${({ md }) => md && `${md}px`};
  color: ${({ theme, color }) => color && theme.colors[color]};

  ${({ theme, contact }) =>
    contact &&
    `
 
	position: absolute;
	bottom: 18px;
	right: 5px; 
	z-index: 10;
  `};
`

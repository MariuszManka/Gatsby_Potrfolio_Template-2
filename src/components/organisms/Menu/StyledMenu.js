import styled from "styled-components"

export const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: ${({ theme }) => theme.menuSize};
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    flex-grow: 5;
    height: 100%;
  }
`
export const MenuWrapper = styled.ul`
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const Item = styled.li`
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.md};
  text-transform: uppercase;
  list-style-type: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(0.9);
  }
`

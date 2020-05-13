import styled, { keyframes, css } from "styled-components"

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
  opacity: 1;
  transition: opacity 0.2s ease-out;

  .logo {
    flex-grow: 5;
    height: 100%;
  }

  @media ${({ theme }) => theme.devices.mobileS} {
    /* display: none; */
    opacity: 0;
  }

  @media ${({ theme }) => theme.devices.laptop} {
    display: flex;
    opacity: 1;
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

const open = keyframes`
from{
  top: -100%;
}

to{
  top: 0;
}
`
export const StyledBurgerMenu = styled.ul`
  position: absolute;
  top: -100%;
  right: 0;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  ${({ isOpen }) =>
    !isOpen &&
    css`
      animation: ${open} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
    `};

  @media ${({ theme }) => theme.devices.laptop} {
    opacity: 0;
  }
`
export const BurgerItem = styled.li`
  text-transform: uppercase;
  font-size: 25px;
  margin: 15px 0;
  list-style-type: none;
  color: ${({ theme }) => theme.colors.black};
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 200;
  & i {
    font-size: 40px;
    color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.black : theme.colors.white};
  }
`
export const BurgerMenuWrapper = styled.span`
  @media ${({ theme }) => theme.devices.laptop} {
    display: none;
  }
`

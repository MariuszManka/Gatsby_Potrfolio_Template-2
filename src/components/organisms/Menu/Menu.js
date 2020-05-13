import React, { useContext, useState } from "react"
import {
  StyledMenu,
  MenuWrapper,
  Item,
  StyledBurgerMenu,
  BurgerItem,
  IconWrapper,
  BurgerMenuWrapper,
} from "./StyledMenu"
import scrollTo from "gatsby-plugin-smoothscroll"
import { NavContext } from "src/GlobalContext"
import Icon from "src/assets/icon/Icon"

const FullSizeMenu = () => {
  const { NavigationData } = useContext(NavContext)
  return (
    <StyledMenu>
      <div className="logo" />
      <MenuWrapper>
        {NavigationData.map(option => {
          return (
            <Item
              key={option.id}
              onClick={e => {
                scrollTo(option.slug)
              }}
            >
              {option.name}
            </Item>
          )
        })}
      </MenuWrapper>
    </StyledMenu>
  )
}

const HamburgerMenu = () => {
  const { NavigationData } = useContext(NavContext)
  const [open, setOpen] = useState(false)
  return (
    <BurgerMenuWrapper>
      {open ? (
        <>
          <IconWrapper onClick={() => setOpen(!open)} isOpen={open}>
            <Icon name="close" />
          </IconWrapper>
          <StyledBurgerMenu>
            {NavigationData.map(option => {
              return (
                <BurgerItem
                  key={option.id}
                  onClick={() => {
                    scrollTo(option.slug)
                    return setOpen(false)
                  }}
                >
                  {option.name}
                </BurgerItem>
              )
            })}
          </StyledBurgerMenu>
        </>
      ) : (
        <IconWrapper onClick={() => setOpen(!open)}>
          <Icon name="menu" />
        </IconWrapper>
      )}
    </BurgerMenuWrapper>
  )
}

const Menu = () => {
  return (
    <>
      <FullSizeMenu />
      <HamburgerMenu />
    </>
  )
}
export default Menu

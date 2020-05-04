import React, { useContext } from "react"
import { StyledMenu, MenuWrapper, Item } from "./StyledMenu"
import scrollTo from "gatsby-plugin-smoothscroll"
import { NavContext } from "src/GlobalContext"

const Menu = () => {
  const { NavigationData } = useContext(NavContext)
  console.log(NavigationData)

  return (
    <>
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
    </>
  )
}
export default Menu

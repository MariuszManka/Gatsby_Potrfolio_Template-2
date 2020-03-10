import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledMenu, MenuWrapper, Item } from "./StyledMenu"
import scrollTo from "gatsby-plugin-smoothscroll"

export const MenuQuery = graphql`
  {
    allDatoCmsMenu {
      nodes {
        options {
          option
        }
      }
    }
  }
`

const Menu = () => {
  const data = useStaticQuery(MenuQuery)
  const {
    allDatoCmsMenu: { nodes },
  } = data
  return (
    <>
      <StyledMenu>
        <div className="logo" />
        <MenuWrapper>
          {nodes[0].options.map(node => {
            return (
              <Item
                key={node.id}
                onClick={e => {
                  scrollTo(`#${node.option}`)
                }}
              >
                {node.option}
              </Item>
            )
          })}
        </MenuWrapper>
      </StyledMenu>
    </>
  )
}
export default Menu

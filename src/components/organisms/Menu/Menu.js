import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { StyledMenu, MenuWrapper, Item } from "./StyledMenu"
import scrollTo from "gatsby-plugin-smoothscroll"

export const MenuQuery = graphql`
  {
    allDatoCmsOption {
      nodes {
        option
        id
      }
    }
  }
`

const Menu = () => {
  const data = useStaticQuery(MenuQuery)
  const {
    allDatoCmsOption: { nodes },
  } = data

  return (
    <>
      <StyledMenu>
        <div className="logo" />
        <MenuWrapper>
          {nodes.map(node => (
            <Item
              key={node.id}
              onClick={e => {
                scrollTo(`#${node.option}`)
              }}
            >
              {node.option}
            </Item>
          ))}
        </MenuWrapper>
      </StyledMenu>
    </>
  )
}
export default Menu

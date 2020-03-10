import React from "react"
import styled from "styled-components"
import Icon from "src/assets/icon/Icon"

export const InputWrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & i {
    margin: 0 13px;
  }
`

const StyledInput = styled.input`
  flex-grow: 3;
  font-size: 16px;
  outline: none;
  padding: 8px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.secondary};
    letter-spacing: 1px;
  }
`
const Input = ({ type, name, iconName, ...other }) => {
  return (
    <InputWrapper>
      <StyledInput
        name={name}
        type={type ? type : "text"}
        placeholder={other.placeholder}
      />
      <Icon
        name={iconName}
        color={other.iconColor ? other.iconColor : "primary"}
      />
    </InputWrapper>
  )
}

export default Input

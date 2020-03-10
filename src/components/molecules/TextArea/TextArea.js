import React from "react"
import styled from "styled-components"
import { InputWrapper } from "src/components/molecules/Input/Input"
import Icon from "src/assets/icon/Icon"

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 16px;
  outline: none;
  border: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 15px;
  resize: none;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.secondary};
    letter-spacing: 1px;
  }
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  user-select: none;
  & i {
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  & i:hover {
    transform: scale(1.2);
  }
`

const TextArea = ({ name, ...other }) => {
  return (
    <InputWrapper>
      <StyledTextArea
        name={name}
        placeholder={other.placeholder}
        rows={other.rows}
      ></StyledTextArea>
      <Button>
        <Icon name="send" md={35} color="primary" contact />
      </Button>
    </InputWrapper>
  )
}
export default TextArea

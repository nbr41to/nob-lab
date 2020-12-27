import React from 'react'
import styled from "styled-components"
import { Button, ButtonProps } from "./Button"

export type PushButtonProps = ButtonProps & {
  color?: string
  bgColor?: string
  size?: "large" | "middle" | "small"
}

export const PushButton: React.FC<PushButtonProps> = ({
  label = "ボタン",
  color = "#000",
  bgColor = "#ccc",
  size = "middle",
  onClick,
  className
}) => {
  return (
    <ButtonStyled
      className={size}
      onClick={onClick}
      color={color}
      bgColor={bgColor}
    >
      {label}
    </ButtonStyled>
  )
}

type ButtonStyledProps = {
  color: string
  bgColor: string
}

const ButtonStyled = styled(Button) <ButtonStyledProps>`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 2px 2px 3px #444;
  border-radius: 4px;
  &.small {
    font-size: 10px;
    padding: 4px 6px;
  }
  &.middle {
    font-size: 14px;
    padding: 6px 8px;
  }
  &.large {
    font-size: 20px;
    padding: 8px 12px;
  }

  /* マウスが乗ったとき */
  &:hover {
    position: relative;
    top: 1px;
    left: 1px;
    box-shadow: 1px 1px 3px #444;
  }
  /* 押したとき */
  &:active {
    position: relative;
    top: 2px;
    left: 2px;
    box-shadow: inset 0 0 2px #444;
  }
`

export type LinkButtonProps = ButtonProps & {
  label: string
  size: "large" | "middle" | "small"
  onClick: () => void
}

export const LinkButton: React.FC<LinkButtonProps> = ({ label, size, onClick }) => {
  return (
    <LinkButtonStyled onClick={onClick} className={size}>
      {label}
    </LinkButtonStyled>
  )
}

const LinkButtonStyled = styled(Button)`
  text-decoration: underline;
  background-color: none;
`

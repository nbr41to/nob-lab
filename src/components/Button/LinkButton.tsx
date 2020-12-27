import React from 'react'
import styled from "styled-components"
import Link from "next/link"

export type LinkButtonProps = {
  className?: string
  label?: string
  path: string
  blank?: boolean
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  className = "",
  label = "ボタン",
  path,
  blank = false,
}) => {
  if (!blank) {
    return (
      <ButtonStyled
        href={path}
      >
        <a className={className}>
          {label}
        </a>
      </ButtonStyled>
    )
  } else {
    return (
      <ButtonStyled
        href={path}
      >
        <a
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </ButtonStyled>)
  }
}


const ButtonStyled = styled(Link)`
  text-decoration: underline;
  background-color: none;
`

import React from 'react'
import styled from "styled-components"

export type ButtonProps = {
  onClick: () => void
  label?: string
  // これないと継承できない！
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  label = "ボタン",
  onClick,
  className,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from "styled-components"

export const Sample = () => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 })
  })
  return (
    <div>
      <h2>UseGesture</h2>
      <animated.div {...bind()} style={{ x, y }}>
        <StyledBox>Drag me!!</StyledBox>
      </animated.div>
    </div>
  )
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`
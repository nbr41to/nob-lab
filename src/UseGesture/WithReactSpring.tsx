import * as React from 'react'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from "styled-components"

export const WithReactSpring = () => {
  const [props, set] = useSpring(() => ({ left: 0 }))
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    // down: 持って動かすとTRUE
    console.log(props)
    // set({ x: down ? mx : 0 })
    if (!down) {
      if (mx > 50) {
        set({ right: 0 })
      } else {
        set({ left: 0 })
      }
    } else {
      set({ left: mx })
    }
  })
  return (
    <div className="box" style={{ width: "100%" }}>
      <StyledBox
        {...bind()}
        style={props}
      >
        x
      </StyledBox>
    </div>
  )
}

const StyledBox = styled(animated.div)`
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
  position: relative;
  top: 0;
  left: 0;
`
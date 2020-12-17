import * as React from 'react'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from "styled-components"

export const WithReactSpring = () => {
  const [x, setX] = React.useState(0)
  const [props, set] = useSpring(() => ({ x: 0 }))
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    // down: 持って動かすとTRUE
    console.log(props)
    // set({ x: down ? mx : 0 })

    if (!down) {
      // if (mx < 50) {
      //   // hideNavMenu()
      //   setTimeout(function () {
      //     set({ x: 50 })
      //     setX(50)
      //   }, 1000)
      // } else {
      //   set({ x: -50 })
      //   setX(-50)
      // }
      set({ x: 0 })
    } else {
      setX(mx)
      set({ x: x })
    }
  })
  return (
    <div className="box">
      <animated.div
        {...bind()}
        // className="box"
        style={
          props
          // x: -x > 0 ? x : 0,
          // width: "300px",
        }
      >
        <StyledBox>
          x: {x}
        </StyledBox>
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
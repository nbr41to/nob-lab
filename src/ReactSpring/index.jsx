import React from 'react'
import { useSpring, animated } from 'react-spring'

export const Sample = () => {
  const props1 = useSpring({ opacity: 1, from: { opacity: 0 } })
  const props2 = useSpring({ number: 1, from: { number: 0 } })
  return (
    <>
      <div>
        <animated.h1 style={props1}>I will fade in!!</animated.h1>
        <animated.span>{props2.number}</animated.span>
      </div>
    </>
  )
}

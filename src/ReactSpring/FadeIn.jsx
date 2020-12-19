import React from 'react'
import { useSpring, animated } from 'react-spring'

export const FadeIn = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } })
  return (
    <>
      <div>
        <animated.h1 style={props}>I will fade in!!</animated.h1>
      </div>
    </>
  )
}

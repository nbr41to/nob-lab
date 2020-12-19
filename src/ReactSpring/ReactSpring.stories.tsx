import React from 'react';

import { FadeIn } from '.';
import { DragList } from '.';

export default {
  title: 'react-spring',
}

const items = 'Lorem ipsum dolor sit'.split(' ')

export const samplePage = () => {
  return (
    <>
      <FadeIn />
      <DragList items={items} />
    </>
  )
}
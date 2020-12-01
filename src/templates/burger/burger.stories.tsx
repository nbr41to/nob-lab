import React from 'react';
import { Burger } from './burger';

export default {
  title: 'Hamburger',
}

export const headerComponent = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Burger open={open} setOpen={setOpen} />
  )
}
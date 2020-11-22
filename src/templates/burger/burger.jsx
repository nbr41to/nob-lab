import { Styled } from './burger.styled';

export const Burger = ({ open, setOpen, ...props }) => {

  return (
    <Styled open={open} onClick={() => setOpen(!open)}>
      <div>
        <span />
        <span />
        <span />
      </div>
      <div className="overlay" onClick={() => setOpen(false)}></div>
    </Styled>
  )
}

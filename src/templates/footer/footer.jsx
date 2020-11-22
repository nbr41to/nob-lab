import { StyledComponent } from "./footer.styled"
import { Twitter, GitHub } from '@material-ui/icons';

export const Footer = () => (
  <StyledComponent className="footer item">
    <small>Copyright 2020 @ Knob</small>
    <a className="btn" href="https://twitter.com/Knob_nbr41to">
      <Twitter />
    </a>
    <a className="btn" href="https://github.com/nbr41to">
      <GitHub />
    </a>
  </StyledComponent>
)

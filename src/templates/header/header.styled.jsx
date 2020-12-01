import styled from "styled-components";
// import { colors, smallMedia } from "utils/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  background-color: navy;
  box-shadow: 0 5px 3px rgba(0,0,0,0.5);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  .logo_box {
    display: flex;
    align-items: center;
  }
`
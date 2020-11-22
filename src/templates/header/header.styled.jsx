import styled from "styled-components";
import { colors } from "utils/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    background-color: navy;
    box-shadow: 0 5px 3px rgba(0,0,0,0.5);
    /* position: fixed;
    top: 0;
    z-index: 10; */
    .logo_box {
      display: flex;
      align-items: center;
      img {
        width: auto;
        height: 60px;
      }
      h1 {
        font-size:6rem;
        margin-left:3rem;
      }
    }
    ${mq} {
      background-color: ${colors.green};
      .logo_box {
        img {
          width:auto;
          height:60px;
        }
        h1 {
          font-size:3rem;
          color: #FFF;
          margin-left:0;
          flex: 1;
          text-align: center;
        }
      }
    }
  `;
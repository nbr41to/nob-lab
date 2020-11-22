import styled from "styled-components";
import { colors } from "utils/theme"

const mq = "@media (max-width:600px)";
export const StyledComponent = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: navy;
    padding: 1rem 0;
    width: 100%;
    position: relative;
      bottom: 0;
      left: 0;
    small {
      font-size: 1.4rem;
      color: white;
      margin-right: 1rem;
    }
    .btn {
      margin: 0.5rem;
      color: white;
      svg {
        font-size: 2.2rem;
      }
    }
    ${mq} {
      background-color: ${colors.blue};
    }
  `;
import styled from "styled-components";
// import { colors } from "../../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    flex-wrap: wrap;
    img {
        width: 240px;
        border: 1px solid #ccc;
        border-radius: 100%;
      }
    .profile {
      max-width: 320px;
      padding: 2rem;
      border: 1px solid #ccc;
      border-radius: 2rem;
      margin: 3rem;
      h2 {
        font-size: 2.0rem;
        padding: 0.5rem;
        margin: 0.5rem;
        border-bottom: 1px solid #ccc;
      }
      p {
          font-size: 1.6rem;
          margin: 0.5rem;
          line-height: 2.8rem;
      }
    }
    /* MEDIA QUERY */
    ${mq} {
      padding: 2rem;
      img {
        width: 80%;
        margin: 0;
      }
      .profile {
        width: 100%;
        padding: 0;
        border: none;
        border-radius: 0;
        margin-top:2rem;
      }
    }
`;
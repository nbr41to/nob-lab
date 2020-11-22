import styled, { css } from "styled-components";
import { colors, smallMedia } from "utils/theme"

export const StyledComponent = styled.nav`
  ${(props) => (props.row) ? css`
  /**
  * 横のメニュー
  */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 16px;
    h2 {
      display: none;
    }
    ul {
      width: 320px;
      background-color: white;
      display: flex;
      justify-content: flex-start;
      align-items:flex-start;
      overflow-x: auto;
      white-space: nowrap;
      padding: 12px;
      box-shadow: 0px 0px 6px 1px #333 inset;
      border-radius: 8px;
      li {
        width: 100%;
        padding: 0 8px;
        &:before {
          content: '';
        }
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        font-size:1.4rem;
        position: relative;
        .icon {
          font-size: 3.0rem;
          margin: 0.5rem;
        }
        span {
          display: none;
        }
        &:hover {
          color: ${colors.orange};
          text-decoration: underline;
          transition-duration:0.3s;
          span {
          display: block;
          position: absolute;
          top: 3.2rem;
          z-index: 1;
        }
        }
      }
      .active {
        color: blue;
        filter: drop-shadow(1.5px 1.5px 0.5px rgba(0,0,0,0.6));
      }   
    }
    .subtitle {
      display: none;
    }
    /* Media Query */
  ${smallMedia} {
    width: 100%;
    height: 5rem;
    /* justify-content: center; */
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    h2 {
      display: none;
    }
    ul {
      background-color: navy;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      box-shadow: none;
      border-radius: 0;
      li {
        height: 100%;
        padding: 0 12px;
      }
      a {
        height: 100%;
        .icon {
          font-size: 3.0rem;
          color: white;
        }
        &:hover {
          color: blue;
          span {
          display: none;
          }
        }
      }
      .active {
        color: ${colors.cream};
        background-color: blue;
        font-weight: bold;
      }   
    }
  }
  `
    :
    css`
    /**
    * 縦のメニュー
    */
    width: 100%;
    margin-top: 80px;
    h2 {
      width: 100%;
      font-size: 2.2rem;
      text-align: center;
      padding: 0;
      border: none;
    }
    
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 3rem;
      li {
        width: 100%;
        &:before {
          content: '';
        }
        a {
          margin: 1rem 0;
          display: flex;
          align-items: center;
          font-size: 2.2rem;
          .icon {
            font-size:3.2rem;
            margin: 0 1rem;
          }
          &:hover {
            color: ${colors.blue};
            transition-duration:0.4s;
          }
        }
      }
      .active {
        color: blue;
        font-weight: bold;        
        filter: drop-shadow(1.5px 1.5px 0.5px rgba(0,0,0,0.6));
      }
    }
    .subtitle {
      display: none;
    }
    .subtitle_active{
      display: flex;
      width: 100%;
      padding-right: 0;
      li {
        padding: 0 1rem;
        /* margin-top: 0.5rem; */
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        /* border-bottom-left-radius: 0.5rem; */
        a {
          font-size: 1.6rem;
          &:hover {
            color: ${colors.blue};
            text-decoration: underline;
            transition-duration:0.4s;
          }
        }
      }
    }
    /* Media Query */
    ${smallMedia} {
      display: flex;
      flex-direction: column;
      z-index: 7;
      margin-top: 0;
      h2 {
        font-size: 1.8rem;
        padding: 3rem 0 2rem;
      }
      ul {
      padding: 0 1rem 1.5rem;
      li {
        width: 100%;
        a {
          font-size: 2.0rem;
          .icon {
            font-size:2.2rem;
          }
          &:hover {
            color: navy;
          }
        }
      }
      .active {
        background-color: ${colors.cream};
        color: navy;
      }
    }
    .subtitle_active{
      li {
        background-color: ${colors.cream};
        a {
          font-size: 1.4rem;
        }
      }
    }
  `}
`;

import styled from 'styled-components';
import { smallMedia } from 'utils/theme'

export const Styled = styled.button`
  display: none;
  ${smallMedia}{
    display: block;
    position: fixed;
    top: 24px;
    left: 0;
    z-index: 50;
    margin: 0 16px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: auto;
      height: 3rem;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      span {
        width: 3.0rem;
        height: 0.4rem;
        background: white;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
          transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
          opacity: ${({ open }) => open ? '0' : '1'};
          transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
          transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      }
    }
    /* メニュークリックでメニューを閉じるやつ */
    .overlay {
      background-color: #000;
      opacity: 0;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      transition: all 0.6s;
      visibility: ${({ open }) => open ? "" : "hidden"};
    }
}
`;

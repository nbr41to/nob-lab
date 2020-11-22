import React from 'react';
import styled from "styled-components";
import { colors, smallMedia } from "utils/theme"

export const StyledComponent = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display:grid;
    grid-template:
    "... ...... ...... ...... ...... ...... ..." 0
    "... header header header header header ..." auto
    "... ...... ...... ...... ...... ...... ..." 0
    "... menu   main   main   main   main   ..." minmax(100vh, 1fr)
    "... ...... ...... ...... ...... ...... ..." 0
    "... footer footer footer footer footer ..." 5rem
    "... ...... ...... ...... ...... ...... ..." 0 /
     0   300px  0     auto   auto    auto  0;

    
    .item {
      /* margin:0; */
    }

    .header {
      grid-area: header;
    }
    .main {
      grid-area: main;
      margin-top: 80px;
    }
    .menu {
      grid-area: menu;
    }
    .right {
      grid-area: right;
      display: none;
    }
    .footer {
      grid-area: footer;
    }
    ${smallMedia}{
      grid-template:
      "...... ...... ...... ...... ......" 0
      "header header header header header" auto
      "...... ...... ...... ...... ......" 0
      "main   main   main   main   main  " minmax(100vh, 1fr)
      "...... ...... ...... ...... ......" 0
      "footer footer footer footer footer" auto
      "...... ...... ...... ...... ......" 5rem /
        0      auto   0      auto   auto;

      .menu {
        width: 60%;
        height: 100vh;
        position: fixed;
        top: 80px;
        left: 0;
        transform: ${({ hamOpen }) => hamOpen ? "translateX(0%)" : "translateX(-200%)"};
        z-index: 10;
        background-color: ${colors.orange};
        opacity: 0.9;
        transition: transform .3s;
      }
    }
  `;
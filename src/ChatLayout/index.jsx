import React from 'react'
import styled from "styled-components"
import { Content } from "./Content"

const Layout = ({ children }) => {
  return (
    <>
      <LayoutStyle>
        <HeaderStyle>

        </HeaderStyle>
        <BodyStyle>
          {children}
        </BodyStyle>
        <FooterStyle>
          <textarea></textarea>
          <button>送信</button>
        </FooterStyle>
      </LayoutStyle>
    </>
  )
}

const LayoutStyle = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: grid;
  grid-template:
    "... .. .. .. .. .. ..." 0
    "... hd hd hd hd hd ..." auto
    "... .. .. .. .. .. ..." 0
    "... bd bd bd bd bd ..." 100vh
    "... .. .. .. .. .. ..." 0
    "... ft ft ft ft ft ..." auto
    "... .. .. .. .. .. ..." 0 /
    auto;

  .box {
    border: 2px solid #444;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    word-wrap: break-word;
  }

`
const HeaderStyle = styled.header`
  width: 100%;
  grid-area: hd;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  backdrop-filter: blur(12px);
  background-color: tomato;
  opacity: 0.5;
`
const FooterStyle = styled.header`
  grid-area: ft;
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0;
  background-color: tomato;
  opacity: 0.5;
  backdrop-filter: blur(120px);
  textarea {
    /* position: absolute;
    bottom: 0; */
    line-height: 20px;
    outline: none;
    box-sizing: border-box;
    resize: vertical;
  }

`
const BodyStyle = styled.header`
  grid-area: bd;
  overflow: auto;
`

export const ChatLayout = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}
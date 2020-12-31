import React from 'react'
import Head from "next/head"
import styled from "styled-components"

const MdxBaseStyle = styled.div`
  h1 {
    font-size: 3.0rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2.0rem;
  }
  a {
    
  }
  code {
    font-size: 12px;
    color: tomato;
    background-color: #444;
    padding: 8px 12px;
    border-radius: 4px;
    &:before ,&:after {
      content: '｀';
    }
  }
`

export default ({ meta, children }) => {
  return (
    <>
      <Head>
        {/* パクったやつ */}
        {/* {meta?.title && (
          <title>
            {meta?.title} - {BLOG.title}
          </title>
        )}
        {meta?.description && (
          <meta name="description" content={meta?.description} />
        )}
        {meta?.description && (
          <meta property="og:description" content={meta?.description} />
        )}
        {meta?.title && <meta property="og:title" content={meta?.title} />}
        {meta?.image && <meta property="og:image" content={meta?.image} />}
        {meta?.image && <meta property="twitter:image" content={meta?.image} />}
        {inDetailPage && (
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
          />
        )} */}
      </Head>
      <MdxBaseStyle>
        {children}
      </MdxBaseStyle>
      <style jsx>{`
h1 {
  font - size: 3.0rem;
}
h2 {
  font - size: 2.4rem;
}
h3 {
  font - size: 2.0rem;
}
a {

}
code {
  font - size: 12px;
  color: tomato;
  background - color: #444;
  padding: 8px 12px;
  border - radius: 4px;
}
`}</style>
    </>
  )
}

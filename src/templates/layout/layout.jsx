import React, { useState } from "react"
import { Header } from "templates/header"
// import Left from "./Left"
// import Right from "./Right"
import { Footer } from "templates/footer"
import { Burger } from "templates/burger"
import { Menu } from "templates/menu"
import { StyledComponent } from "./layout.styled"

export const Layout = ({ children }) => {
  const [hamOpen, setHamOpen] = useState(false)
  return (
    <StyledComponent hamOpen={hamOpen}>
      <Burger open={hamOpen} setOpen={setHamOpen} />
      <Header />
      <Menu />
      <main className="main item">{children}</main>
      <Footer />
      <Menu row={true} />
    </StyledComponent>
  )
}

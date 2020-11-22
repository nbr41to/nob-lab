import React, { useContext, useEffect } from "react"
import Link from "next/link"
import { StyledComponent } from "./Menu.styled"
import { contents } from './contents'

export const Menu = ({ row }) => {

  return (
    <StyledComponent row={row} className={`${row ? "" : "menu"}`}>
      <h2>― <strong>MENU</strong> ―</h2>
      <ul>
        {contents.map(item => (
          <>
            <li key={item.path}>
              <Link href={"/" + item.path}>
                <a>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </Link>
            </li>
          </>
        ))
        }
      </ul>
    </StyledComponent>
  )
};

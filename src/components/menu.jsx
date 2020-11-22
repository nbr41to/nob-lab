import React from 'react'
import Link from 'next/link'

const menuContents = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Business", path: "/business" },
  { label: "Contact", path: "/contact" },
]


export default () => {
  return (
    <div>
      <nav>
        <ul>
          {menuContents.map(menuItem => (
            <li>
              <Link href={menuItem.path}>
                <a>{menuItem.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}


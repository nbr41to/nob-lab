import Link from 'next/Link'
import Image from 'next/image'
import { StyledComponent } from "./header.styled"

export const Header = () => {
  return (
    <StyledComponent className="header item">
      <Link href="/">
        <Image src="/site_title.png" width={250} height={70} alt="site_logo" />
      </Link>
    </StyledComponent>
  )
}

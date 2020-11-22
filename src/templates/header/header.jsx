import Link from 'next/Link'
import Image from 'next/image'
import { StyledComponent } from "./header.styled"

export default ({ hamOpen, setHamOpen }) => {
  return (
    <StyledComponent className="header item">
      <div className="logo_box">
        {/* <Burger open={hamOpen} setOpen={setHamOpen} /> */}
        <Link href="/">
          <Image src="/site_title.png" width="auto" height="auto" alt="site_logo" />
        </Link>
      </div>
      {/* <Menu row={true} /> */}
    </StyledComponent>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Sample from "sampleComp.jsx"
import Menu from "components/menu"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Knob's Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/eyecatch.png" width={19200} height={6920} />
      <h1>Next World</h1>
      <Sample />
      <Menu />
    </div>
  )
}

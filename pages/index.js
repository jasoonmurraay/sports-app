import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href='/ncaa'>NCAA</Link>
      <Link href='/nfl'>NFL</Link>
    </>
  )
}

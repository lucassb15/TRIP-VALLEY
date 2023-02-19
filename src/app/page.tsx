import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/global.css"

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
      <Header></Header>
      <h1>Home</h1>
      <Link href="/app/signin">Login</Link>
      <Footer></Footer>
    </>
  )
}

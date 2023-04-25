import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/landing/hero";
import Title from "@/components/title/title";
import Destiny from "@/components/landing/destiny";
import "../styles/global.css"

export const metadata = {
  title: 'TripValley | Home',
}

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Title
      title="Destinos principais"
      ></Title>
      <Destiny></Destiny>
      <Footer></Footer>
    </>
  )
}

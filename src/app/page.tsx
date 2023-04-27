import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/landing/hero";
import Destiny from "@/components/landing/destiny";
import Title from "@/components/title/title";
import Slider from "@/components/landing/slider"
import "../styles/global.css"

export const metadata = {
  title: 'TripValley | Home',
}


export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Title title="Destinos principais"></Title>
      <Destiny></Destiny>
      <Slider></Slider>
      <Footer></Footer>
    </>
  )
}

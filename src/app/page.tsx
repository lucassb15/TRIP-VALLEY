import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/landing/hero";
import Destiny from "@/components/landing/destiny";
import Slider from "@/components/landing/slider"
import SliderFeedBack from "@/components/landing/sliderFeedback"

import "../styles/global.css"

export const metadata = {
  title: 'TripValley | Home',
}


export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Destiny></Destiny>
      <Slider></Slider>
      <div className="flex justify-center">
        <img className="w-11/12" src="/image/bg/pinBG.png" alt="" />
      </div>
      <SliderFeedBack></SliderFeedBack>
      <div>
        <div className="w-full mb-32 mt-20 relative">
          <img className="" src="/image/bg/newsletterBG.png" alt="" />
          <div className="text-white flex flex-col justify-center items-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto">
            <div className="mb-5 w-auto">
            <h2 className="text-lg md:text-4xl lg:text-6xl font-bold">Inscreva-se e fique atualizado!</h2>
            <p className=" text-base md:text-xl lg:text-xl font-extralight">Receba todas atualizações e as melhores ofertas em seu e-mail.</p>
            </div>
          </div>
          <form >
            <div className="flex flex-row justify-center items-center absolute mt-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto">
              <div className="flex w-auto flex-row items-center border-2 border-transparent hover:border-2 hover:border-blue-500 hover:rounded-lg">
                <i className="py-3 px-4 lg:py-4 lg:px-5  w-auto bg-white rounded-l-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                </i>
                <input className="py-3 px-3 lg:py-4 lg:px-5 md:w-[310px] lg:w-[585px] rounded-r-lg outline-none" type="text" placeholder="Insira seu melhor e-mail" required autoComplete="disabled" />
              </div>
              <div className="relative">
                <i className="absolute top-3 lg:top-4  w-auto left-10 lg:left-14"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg></i>
                <input className="py-3 px-10 lg:py-4 lg:px-14 bg-blue-500 text-white cursor-pointer rounded-lg  ml-6" type="submit" value="Inscreva-se" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}


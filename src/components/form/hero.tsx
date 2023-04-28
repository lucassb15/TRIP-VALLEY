export function Hero(): JSX.Element {
    return (
        <div className="hidden md:block lg:block">
            <div className=" absolute left-24 bottom-0 text-white z-10 flex flex-col gap-10">
                <h1 className="text-5xl font-bold leading-tight">APROVEITE O <br/> MUNDO</h1>
                <p className="text-xl font-light">Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry.</p>
            </div>
            <div className="flex bg-red-500 w-7/12 h-screen absolute filter brightness-90">
                <img className="object-cover object-left " src="/image/thailandBalllons.jpg" alt="" />
            </div>
        </div>
    )
}
export default Hero;

// <input className=" py-3 px-4 rounded-lg text-sm bg-500-blue text-white bg-blue-500 "
//             {...rest}
//         />
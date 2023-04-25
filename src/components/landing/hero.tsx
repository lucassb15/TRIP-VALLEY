export function Hero(): JSX.Element {
    return (
        <div className="hidden md:block lg:block">
            <div className="filter brightness-90">
                <img className="w-auto h-min object-fill" src="/image/backgroundLd.png" alt="" />
            </div>
            <div className="absolute left-10 top-36 font-bold md:text-3xl lg:text-5xl md:max-w-xl lg:max-w-3xl text-white z-10">
                <h1 className="text-gray-50 w-auto">Defina sua próxima <span className="text-yellow-400">viagem</span> de maneira simples e fácil</h1>
            </div>
            <div className="relative items-center justify-center flex bottom-36 z-20">
                <img className="w-max object-fill" src="/image/box-ld.png" alt="" />
            </div>
        </div>
    )
}
export default Hero;

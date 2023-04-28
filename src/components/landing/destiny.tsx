import Title from "@/components/title/title";


export function Destiny(): JSX.Element {
    return (
        <div className="lg:w-11/12 lg:mx-auto md:w-11/12 select-none mb-32 mt-20 max-w-[1050px] ">
            <div className="flex flex-col w-auto md:flex-row justify-center md:mr-7 lg:ml-6 items-center md:gap-4 lg:gap-8">
                <div className="hidden md:flex md:max-w-xs">
                    <div className="relative">
                        <div className="absolute -top-20">
                            <Title title="Destinos principais"></Title>
                        </div>
                        <div className="transition-all duration-300 rounded-lg blur-sm hover:blur-none">
                        <img className="shadow-x1 rounded-md cursor-pointer block h-auto md:h-full mx-auto" src="/image/city/pedraMacelaDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-24 left-5 text-lg leading-6">Pedra da Macela</h3>
                        <p className="font-thin absolute text-gray-300 bottom-20 left-5 text-sm leading-4">Paraty • RJ</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex md:max-w-sm  md:flex-col md:gap-10 transition-all duration-300 rounded-lg blur-sm hover:blur-none">
                    <div className="relative">
                        <img className="shadow-xl rounded-md cursor-pointer block h-auto md:h-full mx-auto" src="/image/city/basilicaDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-10 left-5 text-lg leading-6">Santuário Nsa. Sra. Aparecida</h3>
                        <p className="font-thin absolute text-gray-300 bottom-6 left-5 text-sm leading-4">Aparecida do Norte • SP</p>
                    </div>
                    <div className="relative">
                        <img className="shadow-xl rounded-md cursor-pointer block h-auto md:h-full mx-auto" src="/image/city/lavandarioDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-10 left-5 text-lg leading-6">Lavandário</h3>
                        <p className="font-thin absolute text-gray-300 bottom-6 left-5 text-sm leading-4">Cunha • SP</p>
                    </div>
                </div>
                <div className="lg:max-w-xs lg:flex lg:flex-col lg:gap-10 md:hidden hidden transition-all duration-300 rounded-lg blur-sm hover:blur-none">
                    <div className="relative">
                        <img className="shadow-xl rounded-md cursor-pointer block h-auto md:h-full mx-auto md:w-52 lg:w-56" src="/image/city/capelaJacuDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-10 left-7 text-lg leading-6">Capela do Jacu</h3>
                        <p className="font-thin absolute text-gray-300 bottom-6 left-7 text-sm leading-4">Lavrinhas • SP</p>
                    </div>
                    <div className="relative">
                        <img className="shadow-xl rounded-md cursor-pointer block h-auto md:h-full mx-auto md:w-52 lg:w-56" src="/image/city/praiaSantaDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-10 left-7 text-lg leading-6">Praia Santa Rita</h3>
                        <p className="font-thin absolute text-gray-300 bottom-6 left-7 text-sm leading-4">Ubatuba • SP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destiny;

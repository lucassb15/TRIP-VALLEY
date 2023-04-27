import Title from "@/components/title/title";


export function Destiny(): JSX.Element {
    return (
        <div className="lg:w-full lg:mx-auto md:w-screen select-none">

            <div className="flex flex-col md:flex-row justify-center md:mr-7 lg:ml-2 items-center md:gap-4 lg:gap-8">
                <div className="hidden md:flex md:max-w-xs">
                    <div className="relative">
                        <div className="absolute -top-20">
                            <Title title="Destinos principais"></Title>
                        </div>
                        <img className="shadow-x1 rounded-md cursor-pointer block h-auto md:h-full mx-auto" src="/image/pedraDaMacela.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-24 left-5 text-lg leading-6">Pedra da Macela</h3>
                        <p className="font-thin absolute text-gray-300 bottom-20 left-5 text-sm leading-4">Paraty • RJ</p>
                    </div>
                </div>
                <div className="hidden md:flex md:max-w-sm  md:flex-col md:gap-10">
                    <div className="relative">
                        <img className="shadow-xl rounded-md cursor-pointer block h-auto md:h-full mx-auto" src="/image/basilicaDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-10 left-5 text-lg leading-6">Santuário Nsa. Sra. Aparecida</h3>
                        <p className="font-thin absolute text-gray-300 bottom-6 left-5 text-sm leading-4">Aparecida do Norte • SP</p>
                    </div>
                    <div className="relative">
                        <img className="shadow-xl rounded-md cursor-pointer block h-auto md:h-full mx-auto" src="/image/lavanDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-10 left-5 text-lg leading-6">Lavandário</h3>
                        <p className="font-thin absolute text-gray-300 bottom-6 left-5 text-sm leading-4">Cunha • SP</p>
                    </div>
                </div>
                <div className="lg:max-w-xs lg:flex lg:flex-col lg:gap-10 md:hidden hidden">
                    <div className="relative">
                        <img className="shadow-xl rounded-md cursor-pointer block h-auto md:h-full mx-auto md:w-52 lg:w-56" src="/image/capelaJacuDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-10 left-7 text-lg leading-6">Capela do Jacu</h3>
                        <p className="font-thin absolute text-gray-300 bottom-6 left-7 text-sm leading-4">Lavrinhas • SP</p>
                    </div>
                    <div className="relative">
                        <img className="shadow-xl rounded-md cursor-pointer block h-auto md:h-full mx-auto md:w-52 lg:w-56" src="/image/praiSantaRitaDest.png" alt="" />
                        <h3 className="font-bold shadow-lg absolute text-white bottom-10 left-7 text-lg leading-6">Praia Santa Rita</h3>
                        <p className="font-thin absolute text-gray-300 bottom-6 left-7 text-sm leading-4">Ubatuba • SP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destiny;

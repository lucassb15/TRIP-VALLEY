type Text = {
    titleName: string
    desc: string
    city: string
    image: string
}

export function Feedback({titleName, desc, city, image}:Text): JSX.Element {
    return (
        <div className=" select-none ">
            <div className="mr-10 ml-10 h-auto flex flex-col mx-auto border py-5 px-5 rounded-md shadow-fdbcard mb-10">
                <div className="mb-4">
                    <img className="w-14 lg:w-16" src="/image/fdback/quotes.png" alt="" />
                </div>
                <div className="mb-5 max-w-[370px]">
                    <p className="text-gray-700 font-normal text-sm lg:text-base ">{desc}</p>
                </div>
                <hr className="border-gray-400 rounded-full" />
                <div className="flex flex-row ml-3 items-center gap-3 mt-5">
                    <div>
                        <img className="rounded-full w-20 lg:w-24" src={image} alt="" />
                    </div>
                    <div>
                        <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4">{titleName}</h2>
                        <p className="lg:text-base text-sm text-gray-500">{city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feedback;

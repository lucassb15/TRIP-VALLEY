
type Text = {
    title: string
}

export function Hero({ title }: Text): JSX.Element {
    return (
            <div className="flex mb-5 mx-auto md:w-9/12 lg:w-9/12">
                <span className="border-blue-500 border-l-8 border-r-4 rounded-r mr-3"></span>
                <h2 className="text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl">{title}</h2>
            </div>
    )
}
export default Hero;

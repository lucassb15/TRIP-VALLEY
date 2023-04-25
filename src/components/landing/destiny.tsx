export function Hero(): JSX.Element {
    return (
        <div className="hidden md:block lg:block ml-10">
            <div className="grid grid-cols-12 border">
                <h1 className="col-span-4 border border-red-500">OI</h1>
                <h1 className="col-span-4 border border-red-500">OI</h1>
                <h1 className="col-span-4 border border-red-500">OI</h1>
            </div>
        </div>
    )
}
export default Hero;

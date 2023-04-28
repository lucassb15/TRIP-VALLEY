'use client'
import { User } from '@phosphor-icons/react'

type Text = {
    titleName: string
    URI: string
    titleNav: string
}

export function HeaderForm({titleName, URI, titleNav}: Text): JSX.Element {
    return (
        <header>
            <div className="flex flex-row md:gap-2 justify-between">
                <div className="w-max bg-blue-500 text-white py-5 px-3 md:px-5 font-bold text-xl">
                    <h1>TRIP</h1>
                </div>
                <div className="flex flex-row justify-between w-full ml-10 py-5 px-5 text-gray-700 font-semibold text-base">
                    <div>
                        {titleName}
                    </div>
                    <nav>
                        <ul>
                            <li><a href={URI}>{titleNav}</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="mr-12 py-5 px-2 text-2xl">
                    <h1><User /></h1>
                </div>
            </div>
        </header>
    )
}
export default HeaderForm;

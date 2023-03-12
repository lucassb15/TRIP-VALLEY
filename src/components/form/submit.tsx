import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}


export function Submit({ ...rest }: InputProps): JSX.Element {
    return (

        
        <div className="flex mb-2 rounded-lg bg-blue-500 text-white focus-within:border-blue-400 justify-center items-center mt-5">
            <input
                className="py-3 px-4 rounded text-sm cursor-pointer w-full"
                {...rest}
            />
        </div>
    )
}

export default Submit;

// <input className=" py-3 px-4 rounded-lg text-sm bg-500-blue text-white bg-blue-500 "
//             {...rest}
//         />
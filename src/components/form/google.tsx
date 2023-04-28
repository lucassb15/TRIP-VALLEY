'use client'
import { InputHTMLAttributes } from 'react'
import { GoogleLogo } from '@phosphor-icons/react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}


export function Google(): JSX.Element {
    return (

        
        <div className="flex mb-2 rounded-lg bg-red-600 text-white focus-within:border-blue-400 justify-center items-center mt-5 pl-2">
            <div className='w-full'>
            <a className='flex flex-row justify-center items-center' href="#">
            <GoogleLogo size={24} weight="bold" color="white" />
            <button className="py-3 px-2 rounded text-sm cursor-pointer">Entrar com o google</button></a>
            </div>
        </div>
    )
}

export default Google;

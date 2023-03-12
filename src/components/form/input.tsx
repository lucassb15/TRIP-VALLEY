"use client"

import { EnvelopeSimple, LockSimple, User } from '@phosphor-icons/react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconName: 'user' | 'password' | 'mail'
}

export function Input({ iconName, ...rest }: InputProps) {
    return (
        <div className="flex border-2 border-gray-300 mb-2 rounded-lg focus-within:border-blue-400 ">
            <div className="py-3 px-4">
                {iconName === 'user' && <User size={24} color="#9ca3af" />}
                {iconName === 'password' && <LockSimple size={24} color="#9ca3af" />}
                {iconName === 'mail' && <EnvelopeSimple size={24} color="#9ca3af" />}
            </div>
            <input
                className="py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none"
                {...rest}
            />
        </div>
    )
}

export default Input;

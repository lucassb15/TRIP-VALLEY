// import Image from 'next/image'
import { Inter } from '@next/font/google'
import './styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container h-screen w-screen mx-auto flex items-center justify-center'>
      <div className='flex flex-col-reverse items-center'>
      <h1 className="text-cyan-600 font-bold text-lg">Lucas Soares Barbosa</h1>
      <img className='w-24 rounded-full'
      src="https://avatars.githubusercontent.com/u/85151634?v=4"
      alt="user avatar" />
      </div>
    </div>
  )
}

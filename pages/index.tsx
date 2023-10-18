import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SplashCard } from './components/HomeSplashCard.tsx/SplashCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full h-full px-7 py-2'>
      <SplashCard image='https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1' title='Top Gaming Tracks' desc='Press Play, press start.' />
    
      
    </div>
  )
}



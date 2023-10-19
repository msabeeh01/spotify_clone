import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SplashCard } from './components/HomeSplashCard/SplashCard'
import { ItemRow } from './components/ItemCards/ItemRow'

const inter = Inter({ subsets: ['latin'] })

//list of cards for item row
const cards = [
  {cardTitle:'Top Gaming Tracks', cardDesc:'Press Play, press start.'},
  {cardTitle:'Top Gaming Tracks', cardDesc:'Press Play, press start.'},
  {cardTitle:'Top Gaming Tracks', cardDesc:'Press Play, press start.'},
  {cardTitle:'Top Gaming Tracks', cardDesc:'Press Play, press start.'},
  {cardTitle:'Top Gaming Tracks', cardDesc:'Press Play, press start.'},
]


export default function Home() {
  return (
    <div className='w-full h-full px-7 py-2 overflow-scroll'>
      <SplashCard image='https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1' title='Top Gaming Tracks' desc='Press Play, press start.' />
    
      <ItemRow title='Featured Charts' cards={cards}/>

      <ItemRow title='Featured Charts' cards={cards}/>

      
    </div>
  )
}



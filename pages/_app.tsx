import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from './components/Nav/NavBar'
import { SideFooter } from './components/SideFooter/SideFooter'
import { InHouseNav } from './components/InHouseNav/InHouseNav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-row'>
    <div className='h-screen'>
      <NavBar />
    </div>

    <div className='flex flex-col w-[63%]'>
      <InHouseNav/>
    <Component {...pageProps} />
    </div>

    <div className='h-screen'>
      <SideFooter />
    </div>
    </div>
  )
}

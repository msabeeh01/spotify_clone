//icons
import {GoHome} from 'react-icons/go'

export const NavBar = () => {
    return (
        <div className="h-full w-60 bg-black text-[#B3B3B3] mb-3">
            <div className="flex flex-col">
                <Clickable text="Home" />
                <Clickable text="Search" />
                <Clickable text="Your Profile" />
            </div>

            <div className='flex flex-col my-3'>
                <Clickable text="Create PlayList" />
                <Clickable text="Liked Songs" />
            </div>


        </div>
    )
}

type ClickableProps = {
    text: string,
    icon?: string,
}

const Clickable: React.FC<ClickableProps> = ({ text }) => {
    return (
        <>
            <div className="flex flex-row justify-start items-center bg-black p-2 mx-2 rounded-md hover:bg-[#242424]">
                <GoHome size={25}/>
                <h1 className='ml-5 text-[14px]'>{text}</h1>
            </div>
        </>
    )
}
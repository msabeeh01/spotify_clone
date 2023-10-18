//icons
import {GoHomeFill} from 'react-icons/go'
import {CiSearch} from 'react-icons/ci'
import {BiLibrary, BiSolidHeartSquare} from 'react-icons/bi'
import {RiAddBoxFill} from 'react-icons/ri'

export const NavBar = () => {
    return (
        <div className="h-full w-60 bg-black text-[#B3B3B3] mb-3">
            <div className="flex flex-col">
                <Clickable icon={<GoHomeFill  size={25}/>} text="Home" />
                <Clickable icon={<CiSearch  size={25}/>} text="Search" />
                <Clickable icon={<BiLibrary  size={25}/>} text="Your Profile" />
            </div>

            <div className='flex flex-col my-3'>
                <Clickable icon={<RiAddBoxFill size={25}/>} text="Create PlayList" />
                <Clickable icon={<BiSolidHeartSquare size={25}/>} text="Liked Songs" />
            </div>


        </div>
    )
}

type ClickableProps = {
    text: string,
    icon?: any,
}

const Clickable: React.FC<ClickableProps> = ({ text, icon }) => {
    return (
        <>
            <div className="flex flex-row justify-start items-center bg-black p-2 mx-2 rounded-md hover:bg-[#242424]">
                {icon}
                <h1 className='ml-5 text-[14px]'>{text}</h1>
            </div>
        </>
    )
}
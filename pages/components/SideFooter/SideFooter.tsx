import {BiLogoFacebook} from 'react-icons/bi'

export const SideFooter = () => {
    return (
        <div className="h-full w-[17rem] bg-[#242424] p-5">
            <h1 className="text-white">Friend Activity</h1>
            <Text text="Connect with Facebook to see what your friends are playing." />
            <Button />
            <MiniText text="We'll never post anything without your permission. Show and hide Friend Activity from Settings" />


        </div>
    )
}

type TextProps = {
    text: string,
}

const Text: React.FC<TextProps> = ({text}) =>{
    return(
        <p className="text-[14px] text-gray-400 leading-4 my-4">{text}</p>
    )
}

const Button = () => {
    return(
        <button className="py-2 flex justify-center items-center my-3 bg-blue-400 w-full rounded-3xl text-white text-[13px]">
            <BiLogoFacebook size={20}/>
            CONNECT WITH FACEBOOK
        </button>
    )
}

const MiniText: React.FC<TextProps> = ({text}) =>{
    return(
        <p className="text-[10px] text-gray-400 leading-4 my-4">{text}</p>
    )
}
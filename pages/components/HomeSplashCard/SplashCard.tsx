type SplashCardProps = {
    title?: string,
    desc?: string,
    image?: string
}

export const SplashCard: React.FC<SplashCardProps> = ({title, desc, image}) => {
    return (
      <div className='relative bg-[#242424] w-full h-1/2 rounded-sm overflow-hidden'>
        {/* splash card bg image div */}
        <div data-cy="bottom-left" className='absolute h-1/2 w-full bottom-0 left-0 flex items-center px-3 mb-7 '>
          <SplashCardPlaylistImage image={image}/>
  
          {/* text and buttons next to it */}
          <SplashCardPlaylistText title={title} desc={desc}/>
  
  
        </div>
      </div>
  
    )
  }
  
  const SplashCardPlaylistImage: React.FC<SplashCardProps> = ({image}) => {
    return (
      // make sure image doesnt resize itself
      <div className='min-w-[200px] h-[200px] mr-5'>
        <img className='w-full h-full object-cover rounded-sm' src={image}/>
      </div>
    )
  }
  
  const SplashCardPlaylistText: React.FC <SplashCardProps> = ({title, desc}) => {
    return (
      <div className='flex flex-col text-white p-2 w-full whitespace-nowrap'>
        <div className='flex flex-col mb-1'>
          <p className='text-[13px]'>PLAYLIST</p>
          <p className='text-[40px] font-bold'>{title}</p>
        </div>
  
        <p className='text-[14px]'>{desc}</p>
  
        {/* buttons */}
        <div className='flex flex-row gap-5 mt-3 items-center'>
          <button className='bg-[#1BD760] text-[13px] rounded-full px-2 py-2 w-[90px]'>PLAY</button>
          <button className='border-[0.5px] text-[13px] rounded-full px-2 py-2 w-[140px]'>FOLLOW</button>
          {/* three dots */}
          <button className='font-bold rounded-full p-1'>. . . </button>
        </div>
      </div>
    )
  }
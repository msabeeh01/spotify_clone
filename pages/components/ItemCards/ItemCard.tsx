type ItemCardProps = {
    img?: string;
    title: string;
    desc: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({img, title, desc}) =>{
    return(
        <div className="h-[260px] bg-[#242424] w-[220px] rounded-md">
            {/* images */}
            <div className=" h-4/6 p-3">
                image
            </div>

            {/* text */}
            <div className="p-3">
            <p className="font-bold">{title}</p>
            <p className="text-gray-400 text-[14px]">{desc}</p>
            </div>
        </div>
    )
}


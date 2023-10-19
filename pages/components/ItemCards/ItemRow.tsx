import { ItemCard } from "./ItemCard"

type ItemRowProps = {
    title?: string
    cards: {
            cardTitle: string
            cardDesc: string
    }[]
}

export const ItemRow: React.FC<ItemRowProps> = ({title, cards}) =>{
    return(
        <div className="flex flex-col flex-nowrap gap-3 w-full text-white mt-10">
            <p className="text-[20px] font-bold">{title}</p>
            <div className="flex flex-row flex-nowrap gap-5 w-full overflow-scroll">
            {cards.map((card)=>{
                return(
                    <div key={card.cardTitle}>
                        <ItemCard title={card.cardTitle} desc={card.cardDesc}/>
                    </div>
                )
            })}
            </div>

        </div>
    )
}
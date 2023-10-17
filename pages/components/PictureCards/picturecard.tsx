type PictureCardProps = {
    href: string;
    src: string;
    alt: string;
    title: string;
    description: string;
}

export const PictureCard: React.FC<PictureCardProps>= ({href, src, alt, title, description}) => {
    return (
        <a href={href}>
        <div className="flex flex-col justify-center items-center border-2 w-72 h-72">
            <div>
                <img className="w-32 h-32 rounded-full" src={src} alt={alt} />
            </div>

            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
        </a>
    )
}
import Image from "next/image";


type BoxTitleType = {
    showImg: boolean
    src?: string
    alt?: string
    title: string
    mx?: string
}



const BoxTitle: React.FC<BoxTitleType> = ({ src = "", alt, title, showImg, mx }) => {
    return (
        <div className={`flex items-end gap-1 text-center w-fit ${mx}`} >
            {showImg && (
                <figure className="w-[23px] h-[23px] relative">
                    <Image src={src} alt={`${alt}`} fill />
                </figure>
            )}
            <p className='text-center text-xl font-medium w-full'>{title}</p>
        </div>
    );
}

export default BoxTitle;
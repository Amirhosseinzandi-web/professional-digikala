import { ItemsType } from "@/components/Store/CreateSlice.types";
import Image from "next/image";



const ProductsItems: React.FC<{ el: ItemsType }> = ({ el }) => {
    return (
        <div className="flex justify-evenly flex-col items-center p-1 border border-blue-100 text-center rounded-lg">
            <figure className="border-bottom w-[110px] h-[110px]">
                <Image width={60} height={60} alt="photo" src={el.image} className="w-full h-full object-contain"/>
            </figure>
            <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Title : {el.title}</p>
            <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Price : {el.price} $</p>
            <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">description : {el.description}</p>
            <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">category : {el.category}</p>
            <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Rate : {el.rating.rate}</p>
            <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium py-2">Count : {el.rating.count}</p>
        </div>
    );
}

export default ProductsItems;
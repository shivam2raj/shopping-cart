import Image from "next/image"

export function Procard (props) {

    return (
        <div className="w-[350px] flex flex-col items-center p-4 shadow-md rounded-lg bg-white">
         <div className="flex-1">
        <Image className=""src={props.imageURL}   height={300} width={300} />  
        </div>  

        <div>
        <div className="mt-4 font-bold text-center">{props.name}</div>
        <div className="my-2 text-slate-500 text-center font-bold">{props.price}$</div>
        <button className="w-fit px-4 py-2 bg-black text-xs text-white m-auto rounded-md hover:bg-white hover:text-black hover:border-2 border-black">Add to Cart</button>
        </div>
        </div>
    )
}
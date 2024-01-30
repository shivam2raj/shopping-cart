
import Image from "next/image"
import { cartItems, cartClicked } from "../store/atoms/items"
import { useRecoilState } from "recoil"

export function Procard (props) {

    const [cartItem, setCartItems] = useRecoilState(cartItems);
    const [IsCartClicked, setCartClicked] = useRecoilState(cartClicked);

    function handleAddToCart () {

        setCartItems((prev) => ({ ...prev, [props.id]: prev[props.id] + 1 }))
        setCartClicked(true);
    }

    return (
        <div className="w-[350px] flex flex-col items-center p-4 shadow-md rounded-lg bg-white">
         <div className="flex-1">
        <Image className="" src={props.imageURL} alt={props.name}  height={300} width={300} priority/>  
        </div>  

        <div>
        <div className="mt-4 font-bold text-center">{props.name}</div>
        <div className="my-2 text-slate-500 text-center font-bold">{props.price}$</div>
        <button onClick={handleAddToCart} className="w-fit px-4 py-2 bg-black text-xs text-white m-auto rounded-md hover:bg-white hover:text-black hover:border-2 border-black">Add to Cart</button>
        </div>
        </div>
    )
}
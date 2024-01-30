import Image from "next/image"
import { cartItems } from "../store/atoms/items"
import { useRecoilValue, useSetRecoilState} from "recoil"

export default function CartCard(props) {

  const cartItem = useRecoilValue(cartItems);
  const setCartItem = useSetRecoilState(cartItems);

       return (
        <div className="bg-gray-200 h-fit flex gap-12 w-fit p-4 shadow-md rounded-md" style={{display: cartItem[props.id]==0?"none":""}}>
            <div>
                <Image src={props.imageURL} alt={props.name} height={150} width={150} priority />
            </div>
            
            <div className="flex flex-col justify-between">
                 <div className="font-[500]">
                   {props.name}
                 </div>
                 <div className="flex gap-1">
                   <button onClick={()=>setCartItem((prev) => ({ ...prev, [props.id]: prev[props.id] - 1 }))} className="p-2 bg-white rounded-md">-</button>
                   <div className="px-4 py-2 bg-white rounded-md">{cartItem[props.id]}</div>
                   <button onClick={()=>setCartItem((prev) => ({ ...prev, [props.id]: prev[props.id] + 1 }))} className="p-2 bg-white rounded-md">+</button>
                 </div>
            </div>

            < div className="flex flex-col justify-between">
                  <p>{props.price}$</p>
                  <p className="">{(props.price)*(cartItem[props.id])}$</p>
            </div>


        </div>
    )
}
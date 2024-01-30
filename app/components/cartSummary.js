import { cartItems } from "../store/atoms/items"
import { Products } from "../product"
import { useRecoilValue} from "recoil"

export default function CartSummary() {

    const cartItem = useRecoilValue(cartItems);
  
    function cartValue() {

        let totalValue = 0;

        for(let i=0;i< Products.length;i++)
        {     if(cartItem!==0)
           {
                 totalValue = totalValue + (cartItem[i]*Products[i].price);
           }
        }
           return totalValue;
    }


    return (
        <div className="lg:px-12">
            <p className="text-[28px] font-[500] ">Total Summary</p>

            <div className="mt-12 flex justify-between">
                <div>
                   <p className="mb-6 text-xs ">Discounts</p> 
                   <p className="mb-6 text-xs ">Order Value</p>
                   <p className="mb-12 text-xs ">Delivery fee</p>
                   
                </div>

                <div>
                <p className="mb-6 underline text-xs leading-6">Apply Coupon</p> 
                   <p className="mb-6 text-xs ">{cartValue()}</p>
                   <p className="mb-8 text-xs ">0$</p>
                </div>
            </div>

            <div className="mb-4 py-4 font-[500] text-xl border-t-2 border-black flex justify-between">
                <p>Total</p>
                <p>{cartValue()}</p>
            </div>

            
            <div className="flex justify-center">
                <button className="bg-black py-2 w-[80%] text-center text-white font-semibold">Continue to checkout</button>
            </div>
        </div>

    )
}
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  import {useState, useEffect, useRef } from "react";
  import { cartClicked, cartItems} from "../store/atoms/items"
  import { useRecoilState, useRecoilValue } from "recoil"
import CartCard from "./cartCard";
import { Products } from "../product";
import CartSummary from "./cartSummary";
import Image from "next/image";

  

export default function Cart () {

    const [cartArray, setCartArray] = useState([]);

    const [isCartClicked, setCartClicked] = useRecoilState(cartClicked);
    const cartItem = useRecoilValue(cartItems);

    const buttonRef = useRef(null);

    useEffect(() => {
      indexInCart(); 

      if (isCartClicked) {
        buttonRef.current.click();
        setCartClicked(false);

      }
    }, [cartItem]);
    
    function indexInCart () {
      
      for(let i=0;i<=Products.length;i++)
      {
        if(cartItem[i]!==0)
        {
          if (!cartArray.includes(i))
          {
            setCartArray((e) => [...e, i])
          }
        }
      }    
       console.log(cartArray);
    }
  
    return (
      <div>
            <Drawer>
  <DrawerTrigger ref={buttonRef}> <Image className='mt-2' src="/icon-cart.png" alt="cart-icon" height={30} width={30}/> </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <div className="flex">
      <DrawerTitle className="text-[32px] font-semibold text-center flex-1">Items in Cart</DrawerTitle>
      <DrawerClose>
          Cancel
      </DrawerClose>
      </div>
    </DrawerHeader>
    <div className="min-h-[60vh] flex gap-2">
       <div className="w-[60%] flex gap-8 p-4 flex-wrap">
         {cartArray.map((index) =>
         <CartCard key={index} id={Products[index].id}  name={Products[index].name} imageURL={Products[index].imageURL} price={Products[index].price} />
         )}

       </div>
       <div className="w-[40%] bg-gray-100 rounded-md shadow-md m-4 p-4">
        <CartSummary />
       </div>
    </div>
  </DrawerContent>
</Drawer>

        </div>
    )
}
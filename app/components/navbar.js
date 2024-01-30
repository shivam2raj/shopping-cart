"use client"
import { useSetRecoilState } from "recoil"
import { cartClicked } from "../store/atoms/items"
import Cart from "./cart";

export default function Navbar() {

    const setCartClicked = useSetRecoilState(cartClicked);

    function handleDivClick () {

        setCartClicked(true);
    }


    return  <div>
    <div className="mt-[-40px] truncate h-12 text-white bg-black px-8 pt-6 pb-8 flex items-center justify-between fixed w-full">
           
           <div className="text-lg font-bold">SHIVAM STORES</div>

           <div className=""><Cart /></div>
    </div>
    </div>
}
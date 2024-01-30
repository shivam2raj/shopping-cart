"use client"
import Navbar from "./components/navbar";
import Listing from "./components/listing";
import { RecoilRoot } from "recoil";
import Cart from "./components/cart";


export default function Home() {

  return (
        <div>
         <RecoilRoot>
         <Navbar />
         {/* <Cart /> */}
         <Listing />
         </RecoilRoot>
          
        </div>
  );
}

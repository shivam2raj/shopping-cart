import {atom} from "recoil";
import { Products } from "@/app/product";

function getDefaultValue() {

    let cart = {}
    for(let i=0;i<=Products.length;i++)
    {
       cart[i] = 0;
    }
    return cart;
}

export const cartItems = atom({
    key: "cartitems",
    default: getDefaultValue()
})

export const cartClicked = atom({
    key: "cartClicked",
    default: false
})
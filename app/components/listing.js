import { Procard } from "./procard";
import { Products } from "../product"

export default function Listing() {


    return <div className="bg-gray-100">

      <div className="mt-10 py-4 text-[48px] font-bold text-center">Our Products</div>

      <div className="flex px-8 mt-8 flex-wrap gap-8 w-[80%] m-auto">
      {Products.map((e) =>
           <Procard key={e.id} id={e.id} title={e.title} price={e.price} name={e.name} imageURL={e.imageURL}/>
           )}
      </div>
    </div>
} 
import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/Link";
import { addItem } from "./utils/cartSlice"; 

const ItemList = ({items,dummy}) => {
  
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
  dispatch(addItem(item));
  console.log(item);  
};



  
  return(
   <div>
    {items.map((item)=>(
      <div key={item.card.info.id} className="p-2 m-2 border-black border-b-2 text-left flex justify-between">
        
        <div className="w-9/12">
        <div className="py-2 text-lg"><span>{item.card.info.name}-</span>
        <span>{item.card.info.price/100}Rs</span>
        </div>
        <p className="text-sm">
        {item.card.info.description}
        </p>
        </div>
        
        <div className="w-3/12 p-4">
        <div className="absolute">
          <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" 
          onClick={()=>handleAddItem(item)}>Add+</button>
        </div>
        <img src={CDN_URL+item.card.info.imageId} className="w-full" />
        </div>
      </div>
    ))}
  </div>
)}

export default ItemList;
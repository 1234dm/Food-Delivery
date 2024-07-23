import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import ResCategory from "./ResCategory";

const ResMenu = () => {
  
  const [resMenuInfo, setResMenuInfo] = useState(null);

  const [showIndex,setShowIndex] = useState(0);

 
  const {resId} = useParams();
  //console.log(resId);
 useEffect(()=>{
    fetchMenu();
  },[]);


  const fetchMenu = async () => {
   // const resId="105268";   
    
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId="+resId);

     const json = await data.json();
    
     
     
    setResMenuInfo(json?.data);
    
    
     
    
    };
    

if(resMenuInfo===null){
  return <h1>Wait for sometime</h1>
};


//console.log(resMenuInfo);

//const { name, cuisines, costForTwoMessage } = resMenuInfo?.cards[2]?.card?.card?.info;
console.log(resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//const {itemCards} = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

const categories = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log(categories);
return (
    
    <div className="text-center">
     <h2 className="font-bold my-6 text-2xl">{resMenuInfo?.cards[2]?.card?.card?.info?.name}</h2> 
     <p className="font-bold text-lg">{resMenuInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}- 
     
     {resMenuInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
    {categories.map((category, index)=>(
      <ResCategory
      data={category?.card?.card}
      showItems={index===showIndex ? true : false}
      setShowIndex={(()=>setShowIndex(index))}
      />

      
      
      
    ))}
       </div>
  );
};
export default ResMenu;
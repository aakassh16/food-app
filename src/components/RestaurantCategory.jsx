// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

   
   const handleClick = () =>{
    setShowIndex();
    console.log("clicked")
   }
    const itemCardsLength = data?.itemCards?.length || 0;

    return (
        <div>
            {/* {Header} */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
                <div className="flex justify-between"
                    onClick={handleClick}>
                    <span className="font-bold text">
                    {data?.title} ({itemCardsLength})</span>
                    <span>🔽</span>
                </div>
                {/* {Accordion Body} */}
                {showItems && <ItemList items={data?.itemCards || []} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;

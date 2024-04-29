import { useState } from "react";
import ItemList from "./ItemList";

export const RestrauntCategory = ({ data }) => {
    // console.log(data);
    const [ShowItems,SetShowItems] = useState(false);

    const Clickhandler = () => {
        SetShowItems(!ShowItems);
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-200 p-4 shadow-lg cursor-pointer" >
                <div className="flex justify-between" onClick={Clickhandler}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>

                {ShowItems && <ItemList data={data.itemCards} />}
            </div>


        </div>
    );
};
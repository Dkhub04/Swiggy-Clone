import { useState } from "react";
import Reslist from "../utils/Reslist";
import RestCards  from "./RestCards";
import { useState } from "react";


const Body = () => {

    const [restaurantlist,setrestaurantlist] = useState(Reslist);
    return (
        <div className="body">
            <div className="filter">
                    <button className="filter-btn" onClick={
                        ()=>{
                        const filtered = restaurantlist.filter((res) => res.info.avgRating >4)
                        setrestaurantlist(filtered);
                    }
                    }>Top Rated Restaurant
                    </button>
                </div>
                <div className="rescards">
                    {
                        restaurantlist.map((restraunt) => (
                            <RestCards key={restraunt.info.id} resdata={restraunt} />
                        ))
                    }
                   </div>
        </div>
    );
}

export default Body;
import { useEffect, useState } from "react";
import Reslist from "../utils/Reslist";
import RestCards from "./RestCards";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurantlist, setrestaurantlist] = useState([]);
    const [SearchText,SetSearchText] = useState("");
    const [filteredlist , Setfilteredlist] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7106604&lng=81.0952431&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setrestaurantlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        Setfilteredlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantlist == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" className="Search-box" value={SearchText} onChange={(e)=>{SetSearchText(e.target.value)}}></input>
                    <button className="Search-Btn" onClick={()=>{
                        const filteredrest = restaurantlist.filter((res)=> res.info.name.toLowerCase().includes(SearchText.toLowerCase()))
                        Setfilteredlist(filteredrest);
                     }}>Search</button>
                </div>
                <button className="filter-btn" onClick={
                    () => {
                        const filtered = restaurantlist.filter((res) => res.info.avgRating > 4);
                        Setfilteredlist(filtered);
                    }
                }>Top Rated Restaurant
                </button>
            </div>
            <div className="rescards">
                {
                    filteredlist.map((restraunt) => (
                        <RestCards key={restraunt.info.id} resdata={restraunt} />
                    ))
                }
            </div>
        </div>
    );
}

export default Body;
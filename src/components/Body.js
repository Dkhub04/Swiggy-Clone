import { useEffect, useState } from "react";
import Reslist from "../utils/Reslist";
import RestCards from "./RestCards";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Body_API } from "../utils/Constants";
import { Link } from "react-router-dom";

const Body = () => {

    const [restaurantlist, setrestaurantlist] = useState([]);
    const [SearchText, SetSearchText] = useState("");
    const [filteredlist, Setfilteredlist] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(Body_API)
        const json = await data.json();
        console.log(json);
        setrestaurantlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        Setfilteredlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantlist == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" className="Search-box" value={SearchText} onChange={(e) => { SetSearchText(e.target.value) }}></input>
                    <button className="Search-Btn" onClick={() => {
                        const filteredrest = restaurantlist.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()))
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
                        <Link style={{ 
                            color : "black"
                            } } key={restraunt.info.id} to={"/restraunt/" + restraunt.info.id}> <RestCards resdata={restraunt} /> </Link>

                    ))

                }
            </div>
        </div>
    );
}

export default Body;
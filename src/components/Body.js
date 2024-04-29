import { useEffect, useState } from "react";
import Reslist from "../utils/Reslist";
import RestCards from "./RestCards";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Body_API } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    
        return(
            <div> <h1>Error !!! Please Check Your Internet Conenction !!! </h1></div>
        )
    
    return restaurantlist == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex px -4">
                <div className="Search m-4 p-4">
                    <input type="text" className="border border-black " value={SearchText} onChange={(e) => { SetSearchText(e.target.value) }}></input>
                    <button className="px-4 py-2 bg-green-300 m-4 rounded-xl " onClick={() => {
                        const filteredrest = restaurantlist.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()))
                        Setfilteredlist(filteredrest);
                    }}>Search</button>
                </div>
                <div className="Search m-4 p-4 flex items-center">
                    <button className="filter-btn flex px-4 py-2 bg-pink-100 rounded-xl" onClick={
                        () => {
                            const filtered = restaurantlist.filter((res) => res.info.avgRating > 4);
                            Setfilteredlist(filtered);
                        }
                    }>Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="rescards flex flex-wrap  ">
                {
                    filteredlist.map((restraunt) => (
                        <Link  key={restraunt.info.id} to={"/restraunt/" + restraunt.info.id}> <RestCards resdata={restraunt} /> </Link>

                    ))

                }
            </div>
        </div>
    );
}

export default Body;
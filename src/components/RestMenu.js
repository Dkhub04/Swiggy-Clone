import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Menu_API } from "../utils/Constants";

const RestMenu = () => {

    const [RestInfo, SetRestInfo] = useState(null);
    const {Resid} = useParams();

    console.log(Resid);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(Menu_API+Resid);

        const json = await data.json();
        console.log(json);
        SetRestInfo(json.data);
       
    };

    if (RestInfo === null) <Shimmer />;

    console.log(RestInfo);

    const {name,cuisines,costForTwoMessage,avgRating,id}  = RestInfo?.cards[2]?.card?.card?.info  ;

    // console.log(RestInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card);

    const {carousel} =  RestInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card  ;

    console.log(carousel);
   
    // console.log(RestInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0].title);
    

    return (
        <div className="Menu">
            <h1 >{name}</h1>
            <p>{cuisines} - {costForTwoMessage} </p>
            <h3>{avgRating}</h3>

            <h2>Menu</h2>
            <ul>
                {carousel.map((item)=> (
                    <li>{item.dish.info.name} -
                        Rs.{item.dish.info.price/100 || item.dish.info.defaultPrice/100 }  
                    </li>  
                )
                )}
            </ul>
        </div>
    )
}

export default RestMenu;



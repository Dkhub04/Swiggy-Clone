import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestMenu from "../utils/useRestMenu";


const RestMenu = () => {

    const { Resid } = useParams();

    const RestInfo = useRestMenu(Resid);

    if (RestInfo === null) {
        return (<Shimmer />)
    }

    console.log(RestInfo);

    const { name, cuisines, costForTwoMessage, avgRating, id } = RestInfo?.cards[2]?.card?.card?.info;

    const { itemCards, carousel } = RestInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(RestInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);


    if (itemCards === null && carousel == null) {
        return (
            <Shimmer />
        )
    }

    return (
        <div className="Menu">
            <h1 >{name}</h1>
            <p>{cuisines} - {costForTwoMessage} </p>
            <h3>{avgRating}</h3>

            <h2>Menu</h2>
            <ul>
                {carousel && carousel.map((item) => (
                    <li key={item.dish.info.id}>{item.dish.info.name} -
                        Rs.{item.dish.info.price / 100 || item.dish.info.defaultPrice / 100}
                    </li>
                )
                )}
                {itemCards && itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -
                        Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default RestMenu;
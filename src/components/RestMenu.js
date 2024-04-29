import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestMenu from "../utils/useRestMenu";
import { RestrauntCategory } from "../components/RestrauntCategory.js"


const RestMenu = () => {

    const { Resid } = useParams();

    const RestInfo = useRestMenu(Resid);

    if (RestInfo === null) {
        return (<Shimmer />)
    }

    // console.log(RestInfo);

    const { name, cuisines, costForTwoMessage, avgRating, id } = RestInfo?.cards[2]?.card?.card?.info;

    // const { itemCards, carousel } = RestInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(RestInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = RestInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories)


    // if (itemCards === null && carousel == null) {
    //     return (
    //         <Shimmer />
    //     )
    // }

    return (
        <div className="Menu text-center">
            <h1 className="font-bold justify-center my-6 text-2xl">{name}</h1>
            <p className="font-bold text-mg">{cuisines} - {costForTwoMessage} </p>

            {categories.map((category) => {
                // console.log(category);
                return <RestrauntCategory key={category?.card?.card?.title} data={category?.card?.card} />

            })}


            {/* <h2>Menu</h2>
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
            </ul> */}
        </div>
    )
}

export default RestMenu;
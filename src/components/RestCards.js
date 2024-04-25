import { Img_API } from "../utils/Constants";

const RestCards = ({ resdata }) => {
    return (
        <div className="res-card  m-4 p-4 w-[250px] bg-gray-200 h-[350px] hover:bg-gray-600  hover:cursor-pointer">
            <img className="res-logo w-[218px] h-[144px] rounded-lg" alt="res-logo" src={Img_API + resdata.info.cloudinaryImageId} />
            <h3 className="font-bold py-2 px-4 text-lg">{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(", ")}</h4>
            <h4>{resdata.info.avgRating} stars</h4>
            <h4>{resdata.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
}

export default RestCards;
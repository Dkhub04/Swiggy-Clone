import { Img_API } from "../utils/Constants";
const RestCards = ({ resdata }) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={Img_API + resdata.info.cloudinaryImageId} />
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(", ")}</h4>
            <h4>{resdata.info.avgRating} stars</h4>
            <h4>{resdata.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
}

export default RestCards;
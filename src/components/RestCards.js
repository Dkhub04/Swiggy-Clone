const RestCards = ({resdata}) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId}/>
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(", ")}</h4>
            <h4>{resdata.info.avgRating} stars</h4>
            <h4>{resdata.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
}

export default RestCards;
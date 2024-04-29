import { Img_API } from "../utils/Constants";

const ItemList = ({ data }) => {
    // console.log(data);
    return (
        <div>
            {data.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2">
                    <div className="flex justify-between p-2" >
                        
                        <span className="my-9 font-bold">{item.card.info.name}</span>
                        <span className=" my-9">₹{item.card.info.price / 100}</span>

                        <div>
                            {item.card.info.imageId && (
                                <img
                                    className="w-[156px] h-[144px] rounded-xl"
                                    src={Img_API + item.card.info.imageId}
                                    alt="Card Image"
                                />
                            )}
                            {!item.card.info.imageId && (
                                <img
                                    className="w-[156px] h-[144px] rounded-xl"
                                    src={"https://assets.vogue.com/photos/63d169f727f1d528635b4287/4:3/w_3632,h_2724,c_limit/GettyImages-1292563627.jpg"}
                                    alt="Card Image"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>)
}

export default ItemList
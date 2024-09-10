import { CDN_URL } from "../utils/constant";

const ItemList = ({ items = [] }) => {
    return (

        <div>
            {items.length > 0 ? (
                items.map((item) => (
                    <div
                        key={item.card.info.id}
                        className="p-2 m-2 border-b-2 text-left flex justify-between"
                    >
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{item.card.info.name}</span>
                                {" "}
                                <h3 className="font-bold">
                                    ₹{item.card.info.price ? 
                                        item.card.info.price / 100
                                        : item.card.info.defaultPrice / 100}
                                </h3>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                            <h3 className="pt-3 font-semibold">⭐{item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</h3>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="p-2 ml-10 mt-[132px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]">
                                    Add +
                                </button>
                            </div>
                            <img
                                src={CDN_URL + item.card.info.imageId}
                                alt={item.card.info.name}
                                className="w-full rounded-md"
                            />
                        </div>
                    </div>
                ))
            ) : (
                <h3>No item</h3>
            )}
        </div>
    );
};

export default ItemList;

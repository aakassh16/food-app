import {CDN_URL} from "../utils/constant";


const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-200 transition-all">
      <img className="w-[250px] h-[150px] rounded-lg"
      src={CDN_URL + cloudinaryImageId}
      alt="res-logo"
      />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="italic">{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>ETD - {sla.deliveryTime} minutes</h4>
      </div>
    )
  }

  export const withPromotedLabel = (RestaurantCard) => {
    return(props) => {
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };

  export default RestaurantCard;
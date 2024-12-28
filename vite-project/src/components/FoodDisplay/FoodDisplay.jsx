import { useContext } from "react";
import "./FoodDisplay.css";
// import { food_list } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { FoodItem } from "../FoodItem/FoodItem";
export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food_display" id="food_display">
      <h2>Top dishes near you</h2>
      <div className="food_display_list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

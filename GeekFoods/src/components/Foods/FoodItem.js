import { useNavigate } from "react-router-dom";
// import FoodItemData from "./food.json";

const FoodItem = ({ data }) => {
  // console.log(data);
  const navigate = useNavigate();
  // console.log(navigate);
  return (
    <>
      <div className=" border-solid p-4 flex gap-12 flex-wrap justify-center">
        {data.map(({ strMeal, strMealThumb, strArea, idMeal, strCategory }) => {
          return (
            <div
              className=" shadow-xl hover:shadow-2xl p-6 rounded cursor-pointer bg-gradient-to-r from-orange-400 to-orange-600 w-[29%]"
              key={idMeal}
              onClick={() => {
                navigate(`${idMeal}`);
              }}
            >
              <img
                className="scale-105 h-[18rem] w-full"
                src={strMealThumb}
                alt="meal"
              />
              <h3 className=" mt-4 text-xl font-semibold mb-2 text-[#455d7a]">
                {strMeal}
              </h3>
              <p className="text-gray-700 mb-1">Category: {strCategory}</p>
              <h4 className=" text-[#155263]">Country : {strArea}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodItem;

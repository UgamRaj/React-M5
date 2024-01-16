import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MealInfo = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        // console.log(response.data);
        setItem(response.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };

    if (id !== "") {
      fetchData();
    }
  }, [id]);

  return (
    <>
      {item && (
        <>
          <div className="flex  bg-gradient-to-r from-orange-400 to-orange-600 flex-col">
            <div className=" text-center text-white mt-2">
              <h1 className="text-4xl font-400">{item.strMeal}</h1>
              <h2 className="text-xl from-neutral-200">{item.strArea} Food</h2>
              <h3>{item.strCategory}</h3>
            </div>
            <div className=" flex">
              <div className="content flex p-10 flex-col w-1/2">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="bg-cover bg-center h-screen rounded-xl shadow-2xl"
                />
              </div>
              <div className="w-1/2">
                <div className="p-20 text-white">
                  <h2 className="text-5xl p-3 from-neutral-400">Ingredients</h2>
                  <h4 className="text-xl">
                    {item.strIngredient1}: {item.strMeasure1}
                  </h4>
                  <h4 className="text-xl">
                    {item.strIngredient2}: {item.strMeasure2}
                  </h4>
                  <h4 className="text-xl">
                    {item.strIngredient3}: {item.strMeasure3}
                  </h4>
                  <h4 className="text-xl">
                    {item.strIngredient4}: {item.strMeasure4}
                  </h4>
                  <h4 className="text-xl">
                    {item.strIngredient5}: {item.strMeasure5}
                  </h4>
                  <h4 className="text-xl">
                    {item.strIngredient6}: {item.strMeasure6}
                  </h4>
                  <h4 className="text-xl mb-8">
                    {item.strIngredient7}: {item.strMeasure8}
                  </h4>
                  <a
                    className=" text-2xl border-2 border-blue-500 py-1 px-4 cursor-pointer text-blue-700 rounded-2xl"
                    href={item.strSource}
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  w-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-sm p-6 mb-6 rounded-md text-white">
            <h2 className="text-5xl font-600 p-3">INSTRUCTIONS</h2>
            <h4 className="inst font-400 my-6 opacity-80">
              {item.strInstructions}
            </h4>
          </div>
        </>
      )}
    </>
  );
};

export default MealInfo;

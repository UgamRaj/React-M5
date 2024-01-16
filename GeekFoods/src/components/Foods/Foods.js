import { useEffect, useState } from "react";
import axios from "axios";
import FoodItem from "./FoodItem";
// import RecipeIndex from "./RecipeIndex";

const Foods = () => {
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getFoodApi = async () => {
      try {
        const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
        const res = await axios.get(URL);
        console.log(res.data.meals);
        setItem(res.data.meals);

        setShow(true);
      } catch (error) {
        console.log(error);
        setShow(true);
      }
    };

    getFoodApi();
  }, []);

  // useEffect(() => {
  //   // getFoodApi();
  // }, []);
  // const setIndex = (alpha) => {
  //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  // };
  const searchRecipe = (evt) => {
    // if (evt.key === "Enter") {
    //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    // }
  };

  return (
    <div>
      <>
        <div className="foodmain">
          <div className="foodheading text-center text-5xl my-2">
            <h1> Search Your Food Recipe</h1>
          </div>
          <div className="foodsearchBox text-right mr-2 gap-1">
            <input
              value={search}
              type="search"
              className="search-bar rp border-solid border-2 border-sky-500 p-1"
              placeholder="Search Your Food here"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="border-solid border-2 border-sky-500 hover:border-dotted rounded-md p-1 bg-cyan-500 color text-white"
              onClick={searchRecipe}
            >
              Search
            </button>
          </div>
          <div className="container">
            {show ? <FoodItem data={item} /> : "Data Not Found"}
          </div>
          <div className="indexContainer"></div>
        </div>
      </>
    </div>
  );
};

export default Foods;

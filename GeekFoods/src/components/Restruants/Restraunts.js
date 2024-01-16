import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Restraunts.css";
import restaurantList from "./RestaurantsList.json";
import { Pagination } from "@mui/material";

import Stack from "@mui/material/Stack";

const Main = () => {
  const [restaurantData, setRestaurantData] = useState([...restaurantList]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lengthOfData, setLengthofData] = useState(restaurantList.length);
  const [searchInput, setSearchInput] = useState("");
  const [ratingInput, setRatingInput] = useState(0);

  let noOfCardPerPage = 6;
  const totalPage = Math.ceil(lengthOfData / noOfCardPerPage);

  useEffect(() => {
    // const copy = [...restaurantData];
    // const totalPage = Math.ceil(lengthOfData / noOfCardPerPage);
    const indxOfLastItem = currentPage * noOfCardPerPage;
    const indxOfFirstItem = indxOfLastItem - noOfCardPerPage;
    const currItemList = restaurantList.slice(indxOfFirstItem, indxOfLastItem);

    // console.log(currItemList);
    setRestaurantData(currItemList);
  }, [currentPage, restaurantList, lengthOfData]);

  // const onSearchChange = () => {
  //   // console.log(ratingInput);
  //   if (searchInput === "" && +ratingInput !== 0) {
  //     const filteredList = restaurantList.filter(
  //       (data) => data.rating >= ratingInput
  //     );
  //     console.log(filteredList);
  //     setRestaurantData(filteredList);
  //     // setLengthofData(filteredList.length);
  //     setLengthofData(
  //       searchInput === "" ? restaurantList.length : filteredList.length
  //     );
  //   } else if (+ratingInput === 0 && searchInput !== "") {
  //     const filteredList = restaurantList.filter((data) =>
  //       data.name.toLowerCase().includes(searchInput.toLowerCase())
  //     );
  //     console.log(filteredList);
  //     setRestaurantData(filteredList);
  //     setLengthofData(
  //       ratingInput === 0 ? restaurantList.length : filteredList.length
  //     );
  //   } else if (searchInput === "" && ratingInput === 0) {
  //     setRestaurantData(restaurantList);
  //     setLengthofData(restaurantList.length);
  //   } else {
  //     const filteredList = restaurantList.filter(
  //       (data) =>
  //         data.name.toLowerCase().includes(searchInput.toLowerCase()) &&
  //         data.rating >= ratingInput
  //     );
  //     // console.log(ratingInput);

  //     setRestaurantData(filteredList);
  //     setLengthofData(filteredList.length);
  //   }
  //   // setLengthofData(searchInput===''?restaurantList.length:);
  //   // setLengthofData(filteredList.length);
  // };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const onSearchChangeHandler = (e) => {
    // console.log(e.target.value);
    const searchKeyName = e.target.value.toLowerCase();
    setSearchInput(searchKeyName);
    const updatedCard = restaurantList.filter((data) =>
      data.name.toLowerCase().includes(searchKeyName)
    );
    setLengthofData(
      searchKeyName === "" ? restaurantList.length : updatedCard.length
    );
    if (currentPage > Math.ceil(lengthOfData / noOfCardPerPage)) {
      setCurrentPage(1);
    }
    setRestaurantData(updatedCard);
    // setSearchInput(searchKeyName);
    // onSearchChange();
  };

  //! Rating Change Handler
  const onRatingChangeHandler = (e) => {
    // console.log(e.target.value);
    const rating = parseFloat(e.target.value);
    const searchKey = searchInput.toLowerCase();
    // setRatingInput(rating);
    if (searchKey === "") {
      const updatedCard = restaurantList.filter(
        (data) => data.rating >= rating
      );
      setRestaurantData(updatedCard);
      setLengthofData(updatedCard.length);
    } else {
      const updatedCard = restaurantList.filter(
        (data) =>
          data.name.toLowerCase().includes(searchKey) && data.rating >= rating
      );
      setRestaurantData(updatedCard);
      setLengthofData(updatedCard.length);
    }
    setRatingInput(rating);
    // onSearchChange();
  };

  return (
    <div>
      <div className="inputContainer">
        <input
          className="textInput"
          type="text"
          value={searchInput || ""}
          placeholder="Search restaurants..."
          onChange={onSearchChangeHandler}
        />

        <div className="inputNumber">
          <label>Minimum Rating: </label>
          <input
            className="numInput"
            type="number"
            placeholder=""
            min={0}
            max={5}
            step={0.5}
            value={ratingInput || 0}
            onChange={onRatingChangeHandler}
          />
        </div>
      </div>
      <div className="CardContainer">
        {restaurantData.map((restaurantDetails) => {
          return (
            <Card key={restaurantDetails._id._id} {...restaurantDetails} />
          );
        })}
      </div>
      <div className="paginationContainer">
        <Stack spacing={2}>
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Main;

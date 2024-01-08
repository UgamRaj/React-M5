import React, { useRef, useState } from "react";
// import ImageGenerator from "../ImageGenerator/ImageGenerator";
import defaultImage from "../Assets/textoimage.png";
import loader from "../Assets/loader.svg";
import axios from "axios";
const Main = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isImageAvailable, setisImageAvailable] = useState(false);
  let inputRef = useRef(null);

  const imageGenerator = async (searchUrl) => {
    if (inputRef.current.value === "") {
      return 0;
    }

    const URL =
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5";

    const headers = {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    };

    setisImageAvailable(true);
    try {
      const res = await axios.post(URL, searchUrl, {
        headers: headers,
        responseType: "blob",
      });
      // Read the blob data as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        const blobUrl = reader.result;
        // console.log(blobUrl);
        setImageUrl(blobUrl);
        setisImageAvailable(false);
      };
      reader.readAsDataURL(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getImageonBasedOfText = () => {
    const serchKey = inputRef.current.value;
    console.log(serchKey);
    imageGenerator(serchKey);
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="imgLoading">
        <div className="image">
          {isImageAvailable ? (
            <img className="loader" src={loader} alt="Loader" />
          ) : (
            <img src={imageUrl ? imageUrl : defaultImage} alt="aiImage" />
          )}
        </div>
      </div>
      <div className="searchBox">
        <input
          type="text"
          ref={inputRef}
          placeholder="Describe what you want to say"
          className="searchInput"
        />
        <div className="generatorBtn" onClick={getImageonBasedOfText}>
          Generate
        </div>
      </div>
    </div>
  );
};

export default Main;

import Button from "../Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="heroImage">
        <div className="heroTextContainer">
          <h1>Let us find your</h1>
          <h1 className="headingRedFont">Forever Food</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
          <div className="heroBtnContainer">
            <Button
              btnName="Search Now"
              styless={{
                padding: "0.75rem 3rem",
                borderRadius: "0.25rem",
                border: "none",
                color: "#fff",
                fontWeight: "500",
              }}
            />
            <Button
              btnName="Know more"
              styless={{
                padding: "0.75rem 3rem",
                borderRadius: "0.25rem",
                border: "none",
                fontWeight: "500",
                backgroundColor: "white",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

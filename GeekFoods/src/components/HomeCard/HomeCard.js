import Button from "../Button/Button";

const Card = () => {
  return (
    <>
      <div className="heroSecondSection">
        <div className="heroSecondImage">
          <img
            alt="House"
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
        <div className="heroSecond-Main">
          <div className="heroSecond-textContent">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <Button
              btnName="Get in Touch"
              styless={{
                padding: "0.75rem 3rem",
                borderRadius: "0.25rem",
                border: "none",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

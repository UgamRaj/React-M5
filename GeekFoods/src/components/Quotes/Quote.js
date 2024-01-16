import "./Quote.css";
import Quotes from "./Quotes.json";

const Quote = () => {
  return (
    <div className="quote-main">
      {Quotes?.map((data) => {
        return (
          <div className="quoteCard" key={data.id}>
            <h2 className=" sm:font-semibold font-bold text-2xl">
              {data.quote}
            </h2>
            <p>{data.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Quote;

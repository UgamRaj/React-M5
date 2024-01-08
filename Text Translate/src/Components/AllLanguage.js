import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllLanguage = ({ data, from, to, fromHandler, toHandler }) => {
  if (!data || !data.data || !data.data.languages) {
    toast.warning("No languages available");
    return;
  }

  return (
    <div className="langContainer">
      <h1 className="selectHeading">
        Select <sapn className="newColor">Languages</sapn> Here
      </h1>
      <div className="">
        <div className="mainLanguageContainer">
          <div className="">
            <label for="countries" className="">
              From :
            </label>
            <select
              id="countries"
              className="selectInput"
              value={from}
              onChange={(e) => fromHandler(e.target.value)}
              defaultValue={"en"}
            >
              {data.data.languages.map((language, index) => (
                <option
                  className=""
                  selected="en"
                  key={index}
                  value={language.code}
                >
                  {language.name}
                </option>
              ))}
            </select>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="">
            <label for="countries" className="">
              To :
            </label>
            <select
              value={to}
              onChange={(e) => toHandler(e.target.value)}
              id="countries"
              className="selectInput"
              defaultValue={"hi"}
            >
              {data.data.languages.map((language, index) => (
                <option className="" key={index} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLanguage;

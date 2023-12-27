import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="/logonav.svg" alt="Logo" />
        <h2>GeekFoods</h2>
      </div>
      <div className="navLinks">
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li className="active">Resturants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="navbar-Right">
        <Button
          btnName="Get Started"
          styless={{
            padding: "0.6rem 0.9rem",
            borderRadius: "0.5rem",
            border: "none",
            color: "#fff",
            fontWeight: "600",
          }}
        />

        <div className="menu-Bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            width="22"
            opacity="0.6"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;

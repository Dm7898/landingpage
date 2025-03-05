import star from "/star.png";
import "./Header.css";
const Header = ({ name }) => {
  return (
    <h3 className="title">
      <img src={star} alt="star-icon" className="inline-icon" />
      {name}
    </h3>
  );
};

export default Header;

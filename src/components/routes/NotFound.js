import NotFoundImage from "../../images/NotFoundImage.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>
        <NavLink to="/home">Return to Home</NavLink>
        <img src={NotFoundImage} alt="404 Page not found, something wrong :(" />
      </div>
    </>
  );
};

export default NotFound;

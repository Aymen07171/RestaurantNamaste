import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodVillaLogo from "../Images/Food Villa Logo.png";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { faUser, faPaperPlane, faNoteSticky, faFontAwesome } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom";
const Title = () => (
    <Link to="/">
      <img className="logo" src={FoodVillaLogo} alt="Food Villa Logo" />
    </Link>
  );
const Header = () => {
  const cartTotals=0;
    return (
      <div className="header">
        <Title className="Title" />
        <div className="nav-items">
          <ul>
            <li><Link to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} />&nbsp; Search</Link></li>
            <li><Link to="/help"><FontAwesomeIcon icon={faFontAwesome} />&nbsp; Help</Link></li>
            <li><Link to="/contact"><FontAwesomeIcon icon={faPaperPlane} />&nbsp; Contact</Link></li>
            <li><Link to="/"><FontAwesomeIcon icon={faUser} />&nbsp; Sign In</Link></li>
            <li><Link to="/cart"><FontAwesomeIcon icon={faNoteSticky} />&nbsp; Cart {(cartTotals===0?null:cartTotals)}</Link></li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;
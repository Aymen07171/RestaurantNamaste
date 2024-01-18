import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodVillaLogo from "../Images/Food Villa Logo.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LocationSearch from "./LocationSearch";
import { useSelector,useDispatch } from "react-redux";
import { locSearch } from "../Utils/locationSearchVisibilitySlice";

const Header = () => {
  const dispatch = useDispatch();
  const locDetails = useSelector((store) => store.location.locationDetails);
  const cartItemCount = useSelector((store) => store.cart.cartItems);
  const [area, setArea] = useState("");
  const [cityName, setCityName] = useState("");
  const [state, setState] = useState("");
  const [activeLink, setActiveLink] = useState(null);
  const [locationSearchisVisisble, setLocationSearchisVisisble] = useState(false);
  const handleLocationClick = () => {
    setLocationSearchisVisisble(!locationSearchisVisisble);
    dispatch(locSearch());
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
  }
  };
  const handleNavClick = (path) => {
    setActiveLink(path);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const isActive = (path) => {
    return path === activeLink;
  }
  useEffect(() => {
    if (locDetails[0]) {
      setArea(locDetails[0].area);
      setCityName(locDetails[0].district);
      setState(locDetails[0].state);
    }
  }, [locDetails]);
  return (
    <>
      <div>{locationSearchisVisisble && <LocationSearch childState={locationSearchisVisisble} setChildState={setLocationSearchisVisisble}/>}</div>
      <div
        className={`header flex items-center justify-around z-10 fixed bg-[#ffffffd9] px-5 w-screen top-0 left-0 right-0 shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)] ${
          locationSearchisVisisble ? "opacity-50 bg-transparent" : ""
        }`}
        onClick={() => {if(locationSearchisVisisble === true) {setLocationSearchisVisisble(false);document.body.style.overflow = 'unset';dispatch(locSearch());}}}
      >
        <div className="max-w-[25%] flex items-center gap-2 ">
          <Link to="/" className="flex-shrink-0">
            <img
              className="h-20 transition-transform duration-300 ease-cubic-bezier(.215,.61,.355,1) hover:scale-110"
              src={FoodVillaLogo}
              alt="Food Villa Logo"
              onClick={() => handleNavClick('/')}
            />
          </Link>
          <div
            className="flex truncate cursor-pointer self-center"
            onClick={() => handleLocationClick()}
          >
            <h2
              title={area + ", " + cityName + ", " + state}
              className="text-sm tracking-normal text-[#38383a] truncate hover:text-[#7f828f]"
            >
              <span className='mr-1 leading-3 text-[13px] tracking-tight text-[#111216] font-black border-b border-[#3d4152] hover:text-orange hover:border-b-orange'>Other</span>{area + ", " + cityName + ", " + state}
            </h2>
            <FontAwesomeIcon icon={faChevronDown} className="text-orange" />
          </div>
        </div>
        <>
          <ul className="list-none flex">
            <li className="transition duration-250 ease-in-out m-3 flex items-center justify-center text-[#303031] hover:text-orange" onMouseOver={(e) => {e.currentTarget.querySelector('svg').style.fill = '#f3730a';}} onMouseOut={(e) => {e.currentTarget.querySelector('svg').style.fill = '';}}>
              <NavLink
                onClick={() => handleNavClick('/search')}
                className={`${isActive('/search') ? 'text-orange' : 'text-inherit'}`}
                to="/search"
              >
                <span className="flex items-center justify-center truncate">
                  <svg viewBox="5 -1 12 25" className={`w-[17px] h-[17px] ${isActive('/search') ? 'fill-orange' : 'fill-[#686b78]'}`}><path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path></svg>
                  &nbsp; <h2>Search</h2>
                </span>
              </NavLink>
            </li>
            <li className="transition duration-250 ease-in-out m-3 pl-8 flex items-center justify-center text-[#303031] hover:text-orange" onMouseOver={(e) => {e.currentTarget.querySelector('svg').style.fill = '#f3730a';}} onMouseOut={(e) => {e.currentTarget.querySelector('svg').style.fill = '';}}>
              <NavLink
                onClick={() => handleNavClick('/help')}
                className={`${isActive('/help') ? 'text-orange' : 'text-inherit'}`}
                to="/help"
              >
                <span className="flex items-center justify-center truncate">
                  <svg viewBox="6 -1 12 25" className={`w-[18px] h-[19px] ${isActive('/help') ? 'fill-orange' : 'fill-[#686b78]'}`}><path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z"></path></svg>
                  &nbsp; <h2>Help</h2>
                </span>
              </NavLink>
            </li>
            <li className="transition duration-250 ease-in-out m-3 pl-8 flex items-center justify-center text-[#303031] hover:text-orange" onMouseOver={(e) => {e.currentTarget.querySelector('svg').style.fill = '#f3730a';}} onMouseOut={(e) => {e.currentTarget.querySelector('svg').style.fill = '';}}>
              <NavLink
                onClick={() => handleNavClick('/profile')}
                className={`${isActive('/profile') ? 'text-orange' : 'text-inherit'}`}
                to="/profile"
              >
                <span className="flex items-center justify-center truncate">
                <svg viewBox="6 0 12 24" className={`w-[18px] h-[19px] ${isActive('/profile') ? 'fill-orange' : 'fill-[#686b78]'}`}><path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path></svg>
                  &nbsp; <h2>Sign In</h2>
                </span>
              </NavLink>
            </li>
            <li className="transition duration-250 ease-in-out m-3 pl-8 flex items-center justify-center text-[#303031] hover:text-orange hover:stroke-current" onMouseOver={(e) => { if (cartItemCount.length > 0) { e.currentTarget.querySelector('svg').style.stroke = '#f3730a'; e.currentTarget.querySelector('svg').style.fill = '#f3730a';} }} onMouseOut={(e) => { e.currentTarget.querySelector('svg').style.stroke = ''; e.currentTarget.querySelector('svg').style.fill = '';}}>
              <NavLink 
                onClick={() => handleNavClick('/cart')}
                className={`${isActive('/cart') ? 'text-orange' : 'text-inherit'}`}
                to="/cart"
              >
                <div className="flex items-center justify-center">
                  {(cartItemCount.length === 0) ? 
                  <>
                    <span className="relative top-1/2">
                      <svg className="stroke-2 fill-transparent stroke-current overflow-hidden" viewBox="-1 0 37 32" height="20" width="20" fill="#686b78"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[12px] font-semibold font-ProximaNovaSemiBold">{cartItemCount.length}</span>
                    </span>
                  </>  :  
                  <>
                    <span className="relative top-1/2">
                      <svg className={`stroke-2 overflow-hidden ${isActive('/cart') ? 'fill-orange stroke-orange' : 'fill-[#60b246] stroke-[#60b246]'}`} viewBox="-1 0 37 32" height="20" width="20" fill="#686b78"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11px] font-semibold text-white font-ProximaNovaSemiBold">{cartItemCount.length}</span>
                    </span>
                  </>
                  }
                    <h2 className="pl-1 flex">Cart</h2>
                </div>
              </NavLink>
            </li>
          </ul>
        </>
      </div>
    </>
  );
};
export default Header;

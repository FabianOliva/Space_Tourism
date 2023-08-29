import "./index.css";
import logo from "../../../public/shared/logo.svg";

const Nav_Bar = () => {
  return (
    <div className="Nav_Bar_Cont">
      <div className="Nav_Bar_Logo">
        <img src={logo} alt="" />
        <div className="Nav_Bar_Logo_Line"></div>
      </div>
      <div className="Nav_Bar_Index">
        <ul className="Nav_Bar_Index_ul">
          <li className="Nav_Bar_Index_El_1">
            <a href="#">
              <span className="Nav_Bar_Index_El_Number">00</span>
              <span className="Nav_Bar_Index_El_Name">HOME</span>
            </a>
          </li>
          <li className="Nav_Bar_Index_El_2">
            <a href="#">
              <span className="Nav_Bar_Index_El_Number">01</span>
              <span className="Nav_Bar_Index_El_Name">DESTINATION</span>
            </a>
          </li>
          <li className="Nav_Bar_Index_El_3">
            <a href="#">
              <span className="Nav_Bar_Index_El_Number">02</span>
              <span className="Nav_Bar_Index_El_Name">CREW</span>
            </a>
          </li>
          <li className="Nav_Bar_Index_El_4">
            <a href="#">
              <span className="Nav_Bar_Index_El_Number">03</span>
              <span className="Nav_Bar_Index_El_Name">TECHNOLOGY</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav_Bar;

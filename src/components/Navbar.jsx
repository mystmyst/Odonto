import { Component } from "react";
import { MenuData } from "./MenuData";
import logo1 from "./img/logo1.svg";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <a href="index.html">
          <img src={logo1} alt="Logo1" />
        </a>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;

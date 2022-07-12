import logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <img className="logo" src={logo} alt="" />
      </div>
    </nav>
  );
}

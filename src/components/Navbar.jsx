import logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="">
      <div className="container navbar">
        <img className="logo" src={logo} alt="" />
      </div>
    </nav>
  );
}

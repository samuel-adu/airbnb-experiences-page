import hero from "../images/photo-grid.png";

export default function Header() {
  return (
    <div className="container">
      <div>
        <img src={hero} alt="" className="hero" />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

import hero from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img src={hero} alt="" className="hero__img" />
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

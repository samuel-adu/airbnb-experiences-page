import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import experienceData from "./data.js";

function App() {
  const experienceElement = experienceData.map((item) => (
    <Card activity={item} key={item.id} />
  ));

  return (
    <div className="">
      <Navbar />
      <Hero />
      <section className="activities container">{experienceElement}</section>
    </div>
  );
}

export default App;

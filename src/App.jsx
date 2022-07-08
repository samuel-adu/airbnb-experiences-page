import experienceData from "./data.js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";

function App() {
  const experienceElement = experienceData.map((experience) => (
    <Experience activity={experience} key={experience.id} />
  ));

  return (
    <div className="">
      <Navbar />
      <Header />
      <section className="activities container">{experienceElement}</section>
    </div>
  );
}

export default App;

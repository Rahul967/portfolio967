import Nav from "./components/Nav";
import Frontpage from "./components/Frontpage";
import Services from "./components/Services";
import Cards from "./components/Cards";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div className=" bg-white px-10">
      <Nav />
      <Frontpage />
      <Services />
      <Cards />
      <Portfolio />
    </div>
  );
}

export default App;

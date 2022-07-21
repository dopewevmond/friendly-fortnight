import { render } from "react-dom";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8">
        <Home />
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));

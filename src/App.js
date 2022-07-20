import { render } from "react-dom";
import Home from "./Home";

const App = () => {
  return (
    <>
      <h1>Do It</h1>
      <Home />
    </>
  );
};

render(<App />, document.getElementById("root"));

import { render } from "react-dom";
import Home from "./Home";

const App = () => {
  return (
    <>
      <h1>In our react project</h1>;
      <Home />
    </>
  );
};

render(<App />, document.getElementById("root"));

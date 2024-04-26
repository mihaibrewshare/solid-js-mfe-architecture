import { render } from "solid-js/web";
import Navbar from "./Navbar";
import "./index.css";

const App = () => (
  <div class="container">
    <Navbar />
  </div>
);
render(App, document.getElementById("app"));

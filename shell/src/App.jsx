import { render } from "solid-js/web";
import Navbar from "mfe1/Navbar";
import "./index.css";

const App = () => (
  <div class="container">
    <div class="shell-header">Shell</div>
    <Navbar />
  </div>
);
render(App, document.getElementById("app"));

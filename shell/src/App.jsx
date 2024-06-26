import { render } from "solid-js/web";
import Navbar from "mfe1/Navbar";
import Card from "mfe2/Card";
import "./index.css";

const App = () => (
  <div class="container">
    <div class="shell-header">Shell</div>
    <Navbar />
    <Card />
  </div>
);
render(App, document.getElementById("app"));

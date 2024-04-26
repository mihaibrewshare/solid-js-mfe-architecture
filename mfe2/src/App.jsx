import { render } from "solid-js/web";
import Card from "./components/Card";
import "./index.css";

const App = () => (
  <div class="container">
    <Card />
  </div>
);
render(App, document.getElementById("app"));

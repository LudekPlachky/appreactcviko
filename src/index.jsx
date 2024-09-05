import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./custom.css";
const container = document.getElementById("result");
const root = createRoot(container);
root.render(<App tab="home" />);

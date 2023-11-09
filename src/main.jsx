import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PokeProvider } from "./context/Pokecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokeProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<script
  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
  crossOrigin=""
></script>;
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import store from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

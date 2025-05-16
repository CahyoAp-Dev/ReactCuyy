import { createRoot } from "react-dom/client";
import Component from "./Component.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Component />
  </StrictMode>
);

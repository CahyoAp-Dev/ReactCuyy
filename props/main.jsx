import { createRoot } from "react-dom/client";
import Props from "./Props.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Props />
  </StrictMode>
);

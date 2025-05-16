import { createRoot } from "react-dom/client";
import Props from "../props/Props.jsx";
import { StrictMode } from "react";
import Container from "../nested-component/Container.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Props />
    </Container>
  </StrictMode>
);

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../nested-component/Container.jsx";
import CollectionTodoList from "../collection-component/CollectionTodoList.jsx";
import ConditionalTodoList from "../conditional/ConditionalTodoList.jsx";
import Props from "../props/Props.jsx";
import Table from "../pure-component/Table.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Props />
      <CollectionTodoList />
      <ConditionalTodoList />
      <Table />
    </Container>
  </StrictMode>
);

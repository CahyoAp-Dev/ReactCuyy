import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../nested-component/Container.jsx";
import CollectionTodoList from "../collection-component/CollectionTodoList.jsx";
import ConditionalTodoList from "../conditional/ConditionalTodoList.jsx";
import Props from "../props/Props.jsx";
import Table from "../pure-component/Table.jsx";
import AlertButton from "../event-handler/AlertButton.jsx";
import MyButton from "../event-handler/MyButton.jsx";
import SearchForm from "../event-propagation/SearchForm.jsx";
import SayHelloForm from "../side-effect/SayHelloForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Props />
      <CollectionTodoList />
      <ConditionalTodoList />
      <Table />
      <AlertButton text="Click me" message="You click me" />

      <MyButton onSmash={() => alert("You smash me")} text="Smash me" />

      <SearchForm />

      <SayHelloForm />
    </Container>
  </StrictMode>
);

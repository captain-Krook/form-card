import React from "react";
import "./styles.css";
import { Form } from "./components/Forms";
import { CardBlock } from "./components/CardBlock";
export default function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10em" }}
    >
      <CardBlock />
      <Form />
    </div>
  );
}

import React, { useState } from "react";
import { ContainerForm } from "./Forms.styled";
import { Input } from "./Input";
export const Form = () => {
  const [numberCard, setNumberCard] = useState("");
  const [nameCard, setNameCard] = useState("");

  const infosCard = [{ numberCards: numberCard }, { nameCards: nameCard }];

  const event = new CustomEvent("valueInput", {
    detail: infosCard
  });
  document.dispatchEvent(event);

  return (
    <form>
      <ContainerForm>
        <Input
          value={numberCard}
          type="text"
          autocomplete="cc-number"
          onChange={e => setNumberCard(e.target.value)}
        />
        <Input
          value={nameCard}
          type="text"
          onChange={e => setNameCard(e.target.value)}
        />
      </ContainerForm>
    </form>
  );
};

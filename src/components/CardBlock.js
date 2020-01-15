import React, { useState, useEffect } from "react";
import { ContainerCard, CardNumber, CardName } from "./CardBlock.styled";
import { formatCardNumber } from "./helper/helper";

export const CardBlock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.addEventListener("valueInput", function(e) {
      return setData(e.detail);
    });
  });

  const numberCard = () => data.map(element => element.numberCards).toString();
  const nameCard = () => data.map(element => element.nameCards);

  const infosCustomer = nameCard;
  const formatedCard = formatCardNumber(numberCard());

  return (
    <ContainerCard>
      <CardNumber>{formatedCard}</CardNumber>
      <CardName>{infosCustomer}</CardName>
    </ContainerCard>
  );
};

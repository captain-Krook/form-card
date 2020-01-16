import React, { useState, useEffect } from "react";
import {
  ContainerCard,
  CardNumber,
  CardName,
  ContentNumber,
  ContentName
} from "./CardBlock.styled";
import { formatCardNumber } from "./helper/helper";
import credit from "../img/credit.jpg";

export const CardBlock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.addEventListener("valueInput", function(e) {
      return setData(e.detail);
    });
  });

  const numberCard = () => data.map(element => element.numberCards).toString();
  const nameCard = () => data.map(element => element.nameCards);

  const infosCustomer = nameCard()
    .toString()
    .toUpperCase();

  const formatedCard = formatCardNumber(numberCard());

  return (
    <ContainerCard background={credit}>
      <ContentNumber>
        <CardNumber>
          <p>{formatedCard}</p>
        </CardNumber>
      </ContentNumber>
      <ContentName>
        <CardName>
          <p>{infosCustomer}</p>
        </CardName>
      </ContentName>
    </ContainerCard>
  );
};

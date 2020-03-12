import React, { useState, useEffect } from "react"
import { ContainerCard, CardNumber, CardName, ContentNumber, ContentName } from "./CardBlock.styled"
import { formatCardNumber } from "./helper/helper"
import cosmos from "../img/cosmos.jpg"

export const CardBlock = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    document.addEventListener("valueInput", function(e) {
      return setData(e.detail)
    })
  })

  const numberCard = () => data.map(element => element.numberCards).toString()
  const nameCard = () => data.map(element => element.nameCards)

  const infosCustomer = nameCard()

  const formatedCard = formatCardNumber(numberCard())

  return (
    <ContainerCard background={cosmos}>
      <ContentNumber>
        <CardNumber>
          <p>{formatedCard}</p>
        </CardNumber>
      </ContentNumber>
      <ContentName>
        <span>Card Holder</span>
        <CardName>
          <p>{infosCustomer}</p>
        </CardName>
      </ContentName>
    </ContainerCard>
  )
}

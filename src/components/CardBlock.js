import React, { useState, useEffect } from "react"
import { ContainerCard, CardNumber, CardName, ContentNumber, ContentName, CardDate } from "./CardBlock.styled"
import { formatCardNumber } from "./helper/helper"
import cosmos from "../img/cosmos.jpg"
import _ from "lodash"

export const CardBlock = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    document.addEventListener("valueInput", function(e) {
      return setData(e.detail)
    })
  })

  const numberCard = data.map(element => element.numberCards).toString()
  const nameCard = data.map(element => element.nameCards)
  const dates = data.find(element => element.date)
  const month = _.get(dates, "date.month")
  const year = _.get(dates, "date.year")

  console.log(month, year)
  return (
    <ContainerCard background={cosmos}>
      <ContentNumber>
        <CardNumber>
          <p>{formatCardNumber(numberCard)}</p>
        </CardNumber>
      </ContentNumber>
      <span>Card Holder</span>
      <ContentName>
        <CardName>
          <p>{nameCard}</p>
        </CardName>
        <CardDate>
          <p>
            {month} / {year}
          </p>
        </CardDate>
      </ContentName>
    </ContainerCard>
  )
}

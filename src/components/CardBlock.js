import React, { useState, useEffect } from "react"
import {
  ContainerCard,
  CardNumber,
  CardName,
  ContentNumber,
  ContentName,
  CardDate,
  BlockSimCard,
  CardFront,
  CardBack
} from "./CardBlock.styled"
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
  const getMonth = data.find(element => element.months)
  const getyear = data.find(element => element.years)
  const month = _.get(getMonth, "months")
  const year = _.get(getyear, "years")

  return (
    <ContainerCard background={cosmos}>
      <CardFront>
        <BlockSimCard>
          <div>
            <img className="sim" src="https://img.icons8.com/plasticine/100/000000/sim-card-chip.png" alt="icon-sim" />
          </div>
          <div>
            <img className="logo" src="https://img.icons8.com/officel/16/000000/mastercard-logo.png" alt="logo" />
          </div>
        </BlockSimCard>
        <ContentNumber>
          <CardNumber>
            <p>{formatCardNumber(numberCard)}</p>
          </CardNumber>
        </ContentNumber>

        <ContentName>
          <CardName>
            <span>Card Holder</span>
            <p>{nameCard}</p>
          </CardName>
          <CardDate>
            <span>Expire</span>
            <p>
              {month} / {year}
            </p>
          </CardDate>
        </ContentName>
      </CardFront>
      <CardBack>toto</CardBack>
    </ContainerCard>
  )
}

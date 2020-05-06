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
  CardBack,
} from "./CardBlock.styled"

import cosmos from "../img/cosmos.jpg"
import _ from "lodash"

export const CardBlock = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    document.addEventListener("valueInput", function (e) {
      return setData(e.detail)
    })
  })

  const numberCards = _.get(data, "numberCards")
  const nameCards = _.get(data, "nameCards")
  const month = _.get(data, "months")
  const year = _.get(data, "years")
  const isReturnCard = _.get(data, "returnCard")

  return (
    <ContainerCard background={cosmos} isReturnCard={isReturnCard}>
      <CardFront>
        <BlockSimCard>
          <img className="sim" src="https://img.icons8.com/plasticine/100/000000/sim-card-chip.png" alt="icon-sim" />

          <div>
            <img className="logo" src="https://img.icons8.com/officel/16/000000/mastercard-logo.png" alt="logo" />
          </div>
        </BlockSimCard>
        <ContentNumber>
          <CardNumber>
            <p>{numberCards}</p>
          </CardNumber>
        </ContentNumber>

        <ContentName>
          <CardName>
            <span>Card Holder</span>
            <p>{nameCards}</p>
          </CardName>
          <CardDate>
            <span>Expire</span>
            <p>
              {month} / {year}
            </p>
          </CardDate>
        </ContentName>
      </CardFront>
      {isReturnCard ? <CardBack>toto</CardBack> : null}
    </ContainerCard>
  )
}

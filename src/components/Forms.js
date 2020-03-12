import React, { useState } from "react"
import { ContainerForm } from "./Forms.styled"
import { Input } from "./Input"
import { formatCardNumber } from "./helper/helper"

export const Form = () => {
  const [numberCard, setNumberCard] = useState("")
  const [nameCard, setNameCard] = useState("")

  const infosCard = [{ numberCards: numberCard }, { nameCards: nameCard }]

  const event = new CustomEvent("valueInput", {
    detail: infosCard
  })
  document.dispatchEvent(event)

  return (
    <form>
      <ContainerForm>
        <span>Card Number</span>
        <Input
          value={formatCardNumber(numberCard)}
          type="text"
          maxLength={25}
          autocomplete="cc-number"
          onChange={e => setNumberCard(e.target.value)}
        />
        <span>Card Name</span>
        <Input value={nameCard} type="text" onChange={e => setNameCard(e.target.value)} maxLength={23} />
      </ContainerForm>
    </form>
  )
}

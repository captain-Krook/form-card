import React, { useState } from "react"
import { ContainerForm } from "./Forms.styled"
import { Input } from "./Input"
import { formatCardNumber } from "./helper/helper"
import { InputSelect } from "./InputSelect"
import { months, years } from "../data/dates"

export const Form = () => {
  const [numberCard, setNumberCard] = useState("")
  const [nameCard, setNameCard] = useState("")
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  const infosCard = [{ numberCards: numberCard }, { nameCards: nameCard }, { months: month }, { years: year }]

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
        <Input value={nameCard} type="text" onChange={e => setNameCard(e.target.value)} maxLength={20} />
        <span>Expiration Date</span>
        <InputSelect onChange={e => setMonth(e.target.value)} name={"Month"} date={months} />
        <InputSelect onChange={e => setYear(e.target.value)} name={"Year"} date={years} />
      </ContainerForm>
    </form>
  )
}

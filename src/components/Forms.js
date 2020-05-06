import React, { useState } from "react"
import { ContainerForm } from "./Forms.styled"
import { Input } from "./Input"
import { formatCardNumber } from "./helper/helper"
import { InputSelect } from "./InputSelect"
import { months, years } from "../data/dates"
import { InputBack } from "./InputBack"

export const Form = () => {
  const [numberCard, setNumberCard] = useState("")
  const [nameCard, setNameCard] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvw, setCvw] = useState("")
  const [IsreturnCard, setIsreturnCard] = useState(false)

  const infosCards = {
    numberCards: numberCard,
    nameCards: nameCard,
    months: month,
    years: year,
    cvws: cvw,
    returnCard: IsreturnCard
  }

  const event = new CustomEvent("valueInput", {
    detail: infosCards
  })
  document.dispatchEvent(event)

  const isOnFocus = () => setIsreturnCard(true)

  return (
    <form>
      <ContainerForm>
        <span>Card Number</span>
        <Input
          value={formatCardNumber(numberCard)}
          type="text"
          required
          maxLength={25}
          autocomplete="cc-number"
          onChange={e => setNumberCard(e.target.value)}
        />
        <span>Card Name</span>
        <Input value={nameCard} type="text" onChange={e => setNameCard(e.target.value)} maxLength={20} required />
        <span>Expiration Date</span>
        <InputSelect onChange={e => setMonth(e.target.value)} name={"Month"} date={months} required />
        <InputSelect onChange={e => setYear(e.target.value)} name={"Year"} date={years} required />
        <InputBack onChange={e => setCvw(e.target.value)} onFocus={isOnFocus} />
      </ContainerForm>
    </form>
  )
}

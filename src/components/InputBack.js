import React from "react"
import Input from "@material-ui/core/Input"
import FormControl from "@material-ui/core/FormControl"

export const InputBack = ({ onChange, onFocus }) => {
  return (
    <FormControl>
      <Input onChange={onChange} fullWidth={true} onFocus={() => onFocus()} />
    </FormControl>
  )
}

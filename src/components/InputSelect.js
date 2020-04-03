import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

export const InputSelect = ({ onChange, date, name }) => {
  return (
    <FormControl>
      <InputLabel id="select-label">{name}</InputLabel>
      <Select labelId="select-label" id="select" onChange={onChange}>
        {date.map((element, index) => {
          return (
            <MenuItem key={index} value={element}>
              {element}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

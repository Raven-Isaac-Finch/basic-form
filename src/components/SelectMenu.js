import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function SelectMenu({ values, change, blur }) {
  return (
    <FormControl sx={{ width: "30ch", m: 1 }}>
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
            labelId="demo-simple-select-standard-label"
            id="country"
            name="country"
            label="Country"
            value={values.country}
            onChange={change}
            onBlur={blur}
        >
            <MenuItem value={"uk"}>UK</MenuItem>
            <MenuItem value={"turkey"}>Turkey</MenuItem>
            <MenuItem value={"usa"}>USA</MenuItem>
        </Select>
    </FormControl>
  )
}

export default SelectMenu
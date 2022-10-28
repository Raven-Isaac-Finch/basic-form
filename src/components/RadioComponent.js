import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({ change }) {
  return (
    <FormControl sx={{ width: "30ch", m: 1 }}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="other"
        name="radio-buttons-group"
      >
        <FormControlLabel name='gender' value="other" control={<Radio />} label="Other" onChange={change} />
        <FormControlLabel name='gender' value="female" control={<Radio />} label="Female" onChange={change} />
        <FormControlLabel name='gender' value="male" control={<Radio />} label="Male" onChange={change} />
      </RadioGroup>
    </FormControl>
  );
}
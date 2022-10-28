import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

function CheckboxMenu({ change, errorMsg }) {
  return (
    <FormControl sx={{ width: "30ch", m: 1 }} component="fieldset" variant="standard" >
        <FormLabel component="legend">Hobbies</FormLabel>
        <FormGroup>
            <FormControlLabel 
                control={<Checkbox />}
                label="Chess" 
                name='hobby[0]'
                id="chess"  
                value="chess"
                onChange={change} 
            />
            <FormControlLabel 
                control={<Checkbox />} 
                label="Drawing" 
                name='hobby[1]'
                id="drawing"
                value="drawing" 
                onChange={change} 
            />
            <FormControlLabel 
                control={<Checkbox />} 
                label="Running" 
                name='hobby[2]'
                id="running" 
                value="running"
                onChange={change} 
            />
            <FormControlLabel 
                control={<Checkbox />} 
                label="Swimming" 
                name='hobby[3]'
                id="swimming"
                value="swimming" 
                onChange={change} 
            />
        </FormGroup>
        <FormHelperText>{errorMsg.hobby ? errorMsg.hobby : ""}</FormHelperText>
    </FormControl>
  )
}

export default CheckboxMenu
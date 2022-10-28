import React from 'react';
import InputMask from 'react-input-mask';
import TextField from '@mui/material/TextField';

function PhoneComponent({ values, change, blur, errorMsg }) {
  return (
    <InputMask 
        mask={'+\\90 999 99 99'} 
        maskChar=" "                 
        value={values.phone}
        onChange={change}
        onBlur={blur} >
            {() => <TextField
            id="phone"
            name="phone"
            type="text"
            label="Phone"
            helperText={errorMsg.phone ? errorMsg.phone : ""}
            error={errorMsg.phone ? true : false}
            />}
    </InputMask>
  )
}

export default PhoneComponent
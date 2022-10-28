import React from 'react';
import Button from '@mui/material/Button';

function UploadFile({ values, change, blur }) {
  return (
    <div>
        <Button variant="outlined" component="label" sx={{ margin: "25px 0" }} >
            upload file
            <input
                id="file"
                name="file"
                type="file"
                value={values.file}
                onChange={change}
                onBlur={blur}
                hidden
            />
        </Button>
        <span style={{ fontSize: "12px", marginLeft: "14px" }}>{values.file ? values.file : "File not Selected"}</span>
    </div>
  )
}

export default UploadFile
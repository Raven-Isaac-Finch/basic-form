import React from 'react';
import { useFormik } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { basicSchema } from '../schemas';
import SelectMenu from '../components/SelectMenu';
import CheckboxMenu from '../components/CheckboxMenu';
import UploadFile from '../components/UploadFile';
import PhoneComponent from '../components/PhoneComponent';
import RadioComponent from '../components/RadioComponent';

const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

export default function BasicForm() {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            age: "",
            email: "",
            phone: "",
            file: "",
            country: "",
            hobby: [
                "",
                "",
                "",
                "",
            ],
            gender: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' }, width: "100%", display: "flex", justifyContent: "center" }} noValidate autoComplete="off" onSubmit={handleSubmit} >
        <div className='form-holder'>
            <TextField
                id="name"
                type="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Name"
                helperText={errors.name && touched.name ? errors.name : ""}
                error={errors.name && touched.name ? true : false}
            />
            <TextField
                id="age"
                type="number"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Age"
                helperText={errors.age && touched.age ? errors.age : ""}
                error={errors.age && touched.age ? true : false}
            />
            <TextField
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="E-mail"
                helperText={errors.email && touched.email ? errors.email : ""}
                error={errors.email && touched.email ? true : false}
            />
            <PhoneComponent values={values} change={handleChange} blur={handleBlur} errorMsg={errors} />
            <SelectMenu values={values} change={handleChange} blur={handleBlur} />
            <CheckboxMenu change={handleChange} errorMsg={errors} />
            <RadioComponent change={handleChange} />
            <UploadFile values={values} change={handleChange} blur={handleBlur} />
            <Button disabled={isSubmitting} variant="contained" type='submit'>Submit</Button>
        </div>
    </Box>
  )
}

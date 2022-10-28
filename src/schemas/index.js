import * as yup from "yup";

const phoneRegExp = /\+90\ [1-9][0-9][0-9]\ [0-9][0-9]\ [0-9][0-9]$/

export const basicSchema = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup.string().email("Please enter a valid e-mail").required("This field is required"),
    age: yup.number().positive().integer().min(18, "Must be at least 18 yo").max(90).required("This field is required"),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
});
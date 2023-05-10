//creating a schema to define or what types our InitialValues will be
//SCHEMA COMPONENT TO VALIDATE OUR FORMS

import * as yup from "yup"

//min 5 characters, 1 uppercase letter, 1 lowercase letter,  1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/


export const schemaObject = yup.object().shape({

    firstName: yup.string()
    .required("Kindly provide your first name in the given input field."),
    
    lastName: yup.string()
    .required("Kindly provide your last name in the given input field."),
    
    email: yup.string()
    .email("Please enter a valid email address")
    .required("Kindly provide your email address in the given input field."),
    
    phoneNumber: yup.number()
    .integer()
    // .min(11, 'The number must be 11 characters.')
    // .max(11, 'The number must be 11 characters.')
    .positive()
    .required("Kindly provide your phone number in the given input field."),
    
    subject: yup.string()
    .min(5, 'Please ensure that the subject you provide falls within the range of 5 to 10 characters.')
    .max(10, 'Please ensure that the subject you provide falls within the range of 5 to 10 characters.')
    .required("Please enter the subject in the provided input field."),
    
    message: yup.string()
    .min(10, 'Please ensure that the message you provide falls within the range of 10 to 250 characters.')
    .max(250, 'Please ensure that the message you provide falls within the range of 10 to 250 characters.')
    .required("Please enter your message in the provided input field."),

    password: yup.string()
    .min(5)
    .matches(passwordRules, {message: "Please create a stronger password."})
    .required("Create a password."),

    studentNumber: yup.string()
    .required('Kindly enter your student number.'),
  
  
    address: yup.string()
    .required('Kindly provide your current address.'),

    name: yup.string()
    .required('Kindly enter your full name.')

})


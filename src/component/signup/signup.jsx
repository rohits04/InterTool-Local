import * as React from "react";
import './signup.css';
import TextField from "@mui/material/TextField";
import { Formik, Form,ErrorMessage,Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

function SignUp() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    pass: "",
    passComfirm: "",
    company: "",
    parentCompany: "",
    designation: "",
  };
  const validationSchema=Yup.object({
    firstName: Yup.string().required('required').min(2,"2 min requi").max(10,'max 10 allowed'),
    lastName:Yup.string().required('required').min(2,"2 min requi").max(10,'max 10 allowed'),
    email:Yup.string().email().required('required'),
    number:Yup.string().required('required').min(5,'5 min requi').max(10,'10 max allowed'),
    designation: Yup.string().notRequired('required').min(2,"2 min requi").max(10,'max 10 allowed'),
    pass:Yup.string().required('required').min(2,"2 min requi").max(10,'max 10 allowed'),
    passComfirm:Yup.string().required('required').oneOf([Yup.ref("pass"), null], "Passwords must match"),
    company:Yup.string().required('required').min(2,"2 min requi").max(10,'max 10 allowed'),
    parentCompany:Yup.string().required('required').min(2,"2 min requi").max(10,'max 10 allowed'),
    // Role:Yup.string().notRequired('required').min(2,"2 min requi").max(10,'max 10 allowed'),
  })
  const postAPICall=(value)=>{
    console.log(value);
    const payload={
      "firstName":value.firstName,
      "lastName":value.lastName,
      "email":value.email,
      "phoneNumber":value.number,
      "designation":value.designation,
      "password":value.pass,
      "confirmPassword":value.passComfirm,
      "company":value.company,
      "parentCompany":value.parentCompany  
    }
    console.log(payload);
    axios
    .post('http://10.10.10.136/user/signUp',payload)
    .then((response) => {

      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    }) 
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        postAPICall(values);
      }}
    >
      {(formik) => (
        <Form className="signUpForm">
          <div className="SignUp_parent">
            <h1>Sign Up</h1>
            <div className="FormParent">
              <div className="row">
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  name="firstName"
                  label="First Name*"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("firstName", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={<ErrorMessage name="firstName" />}
                />
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  name="lastName"
                  label="Last Name*"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("lastName", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={<ErrorMessage name="lastName" />}
                />
              </div>
              <div className="row">
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  name="email"
                  type='email'
                  label="Email*"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("email", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={<ErrorMessage name="email" />}
                />
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  type='number'
                  name="number"
                  label="Phone Number*"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("number", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={<ErrorMessage name="number" />}
                />
              </div>
              <div className="row">
                <Field
                  as = {TextField}
                className="filed"
                  sx={{ width: 250 }}
                  label="Password*"
                  type="password"
                  name="pass"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("pass", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.pass && Boolean(formik.errors.pass)}
                helperText={<ErrorMessage name="pass" />}
                />
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  name="passComfirm"
                  label="Comfirm Password*"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("passComfirm", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.passComfirm && Boolean(formik.errors.passComfirm)}
                helperText={<ErrorMessage name="passComfirm" />}
                />
              </div>
              <div className="row">
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  name="company"
                  label="Company*"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("company", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={<ErrorMessage name="company" />}
                />
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  name="parentCompany"
                  label="Parent Company*"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("parentCompany", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.parentCompany && Boolean(formik.errors.parentCompany)}
                helperText={<ErrorMessage name="parentCompany" />}
                />
              </div>
              <div className="row">
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  name="designation"
                  label="Designation"
                  variant="outlined"
                  onChange={(e) => {
                    formik.setFieldValue("designation", e.target.value);
                    console.log(e.target.value);
                  }}
                  error={formik.touched.designation && Boolean(formik.errors.designation)}
                helperText={<ErrorMessage name="designation" />}
                />
                <Field
                as = {TextField}
                  className="filed"
                  sx={{ width: 250 }}
                  label="Role"
                  name='Role'
                  variant="outlined"
                  // error={formik.touched.Role && Boolean(formik.errors.Role)}
                  // helperText={<ErrorMessage name="Role" />}
                />
              </div>
              <div className="row_button">
                <button className="button" type="submit">
                  SignUp
                </button>
                <button className="button" type="reset">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;

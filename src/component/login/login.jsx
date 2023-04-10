import React from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form, Formik, Field,ErrorMessage } from "formik";
import { Box } from "@mui/system";
import axios from "axios";
import * as Yup from "yup";

function LogIn() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const validationSchema=Yup.object({
    usernameOrEmail:Yup.string().required('required').min(2,"2 min required").max(10,'max 10 required'),
    password: Yup.string().required('required').min(2,'minmum 2 required').max(10,'max 10 allowed')
  })
  const initialValues={
    usernameOrEmail:'',
    password:''
  }
  const postAPICall =(value)=>{
    console.log(value);
    const payload={
      "usernameOrEmail":value.usernameOrEmail,
      "password":value.password
    }
    console.log(payload);
    axios
    .post('http://10.10.10.136/api/auth/signIn',payload)
    .then((response)=>{
      if(response.ok){
        console.log('api ok')
        console.log(response);
      }
    })
    
    .catch((error)=>{
      console.log(error);
      console.log('error');
    })
  }



  return (
    <div className="loginParent">
      <Box className="formBox">
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
        console.log(values);
        postAPICall(values);
      }}
      >
        {(formik) => (
      <Form className="LogForm">
        <div className="loginForm">
          <h1 className="loginHeading">LogIn</h1>
          <Field
            as={TextField}
            id="outlined-basic"
            label="Username Or Email"
            name="usernameOrEmail"
            className='inputText'
            variant="outlined"
            onChange={(e) => {
                formik.setFieldValue("usernameOrEmail", e.target.value);
                console.log(e.target.value);
              }}
              error={formik.touched.usernameOrEmail && Boolean(formik.errors.usernameOrEmail)}
                helperText={<ErrorMessage name="usernameOrEmail"/>}
          />

          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            >
              Password
            </InputLabel>
            <Field
            as={OutlinedInput}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    name='password'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              name='password'
              label="Password"
              onChange={(e) => {
                  formik.setFieldValue("password", e.target.value);
                  console.log(e.target.value);
                }}
                error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={<ErrorMessage name="password"/>}
                />
                {/* {errors.name && touched.password ?(
                  <p className="heplerText">{errors.password}</p>
                ) : null} */}
                {formik.errors.password && formik.touched.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}
          </FormControl>
          <button type="submit" className="button">
            logIn
          </button><br></br>
          <span ><a href="/signup"className="useText">Create a account?</a></span>
        </div>
      </Form>
      )}
    </Formik>
      </Box>
      </div>

  );
}
export default LogIn;

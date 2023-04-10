import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Formik ,Form,Field ,ErrorMessage, yupToFormErrors } from 'formik';
import * as Yup from "yup";
import './form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export  default function AWSform() {
 const navigate = useNavigate();
  const postAPICall=(value)=>{
    console.log(value);
    const payload={
      name:value.firstName,
      instance_type:value.instanceType.label,
      ami_id:value.amiType.key,
      key_pair: "mumbaikey",
      region:value.region.label
    }
    console.log(payload);
    axios
    .post('http://10.10.10.50/create',payload)
    .then((response) => {
      navigate('/list');

      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    }) 
    
  }

  const instance_type_list=[  
    {
      key:0,
      label:'t2.micro'
    },
    {
      key:1,
      label:'t2.small'
    },
    {
      key:2,
      label:'t2.medium'
    },
    {
      key:3,
      label:'t2.large'
    }  
  ];
  const ami_type_list=[  
    {
      key:"ami-08bd8e5c51334492e",
      label:'Windows'
    },
    {
      key:"ami-07ffb2f4d65357b42",
      label:'Ubuntu',
      
    },
    {
      key:'ami-074dc0a6f6c764218',
      label:'Amazon AMI'
    }, 
  ];
  const ami_id_hyderabad_64bit =[
    {
      key:'0f2a51ba06e0c810d',
      label:'Windows',
    },
    {
      key:'ami-0836a837ffa6c59ce',
      label:'Ubantu'
    },
    {
      key:'03b644b4d078605bd',
      label:'Amazon AMI'
    },

  ]
  const ami_id_hyderabad_64ARM =[
    {
      key:'0d9b85b07dcd641f8',
      label:'Ubantu'
    },
    {
      key:'0b5867b4b0cacc7b2',
      label:'Amazon AMI'
    },

  ]
  const region_type_list=[  
    {
      key:0,
      label:'ap-south-1'
    },
    {
      key:1,
      label:'ap-south-2'
    },
    {
      key:2,
      label:'us-east-1'
    },
    {
      key:3,
      label:'eu-west-2'
    }  
  ]
  const bits_type_list=[  
    {
      key:0,
      label:'64bit(82)'
    },
    {
      key:1,
      label:'64bit ARM'
    }  
  ]
  const initialValues= { firstName:"" ,date:"",instanceType:"", amiType:"",region:"", bits:""};
  const validationSchema = Yup.object({
    firstName: Yup.string().required('required').min(2,"2 min requi").max(10,'max 10 allowed'),
    instanceType: Yup.object().required('required').typeError('please select Instance'),
    amiType: Yup.object().required('required').typeError('please select AMI'),
    region:Yup.object().required('required').typeError('please select region'),
    bits:Yup.object().required('required').typeError('required'),
});


return(

      <div className='formparent'>

        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log( values);
          postAPICall(values);
        }}
        >
          {( formik ) => (
            <Form className="mainform">
              <h1 className="formheading">Create Instance Form</h1>
              <div className="inputParent">
              <div className='name_date'>
              <Autocomplete
              className='input'
                disablePortal
                id="combo-box-demo"
                options={region_type_list}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.label || " "}

                onChange={(e, newValue) => {
                  console.log(newValue);
                  formik.setFieldValue("region", newValue);
                }}
                renderInput={(params) => <Field as={TextField} {...params} label="region*"
                name='region'
                error={formik.touched.region && Boolean(formik.errors.region)}
                helperText={<ErrorMessage name="region" />}
                />}
              />

              <Autocomplete
              className='input'
                disablePortal
                id="combo-box-demo"
                options={ bits_type_list}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.label || " "}
                onChange={(e, newValue) => {
                  formik.setFieldValue("bits", newValue);
                }}
                renderInput={(params) => <Field as={TextField} {...params} label="Bits*"
                name='bits'
                error={formik.touched.bits && Boolean(formik.errors.bits)}
                helperText={<ErrorMessage name="bits" />}
                />}
              />


              <br/>
              </div>
           
             {formik.values.region != "" && formik.values.region != null && formik.values.bits != "" &&
              formik.values.bits != null &&
             (
               <Autocomplete
               className='input'
               disablePortal
               id="combo-box-demo"
               options={ami_type_list}
               sx={{ width: 300 }}
                  getOptionLabel={(option) => option.label || " "}
                  onChange={(e, newValue) => {
                    formik.setFieldValue("amiType", newValue);
                  }}
                  renderInput={(params) => <Field as={TextField} {...params} label="AMI Type*"
                  name='amiType'
                  error={formik.touched.amiType && Boolean(formik.errors.amiType)}
                  helperText={<ErrorMessage name="amiType" />}
                  />}
                />
             )}
             
          
        

              <div className='name_date1'>   
              <Autocomplete
              className='input'
                disablePortal
                id="combo-box-demo"
                options={instance_type_list}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.label || " "}
                onChange={(e, newValue) => {
                  formik.setFieldValue("instanceType", newValue);
                }}
                renderInput={(params) => <Field as={TextField} {...params} label="instance Type*"
                name='instanceType'
                error={formik.touched.instanceType && Boolean(formik.errors.instanceType)}
                helperText={<ErrorMessage name="instanceType" />}
                />}
               
              />
                <Field  name='firstName' label="Name*" className='input' 
                as={TextField}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={<ErrorMessage name="firstName" />}
              />
              </div><br/>
             <br></br>
              <button value='submit' type='submit' className='button'>Submit</button>
              <input type="reset" value='reset' className='button' />
              </div>
            </Form>

          )}

        </Formik>

      </div>
)
}


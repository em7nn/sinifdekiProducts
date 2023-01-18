import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function AddPage() {
  return (
    <>
      <Navbar />
      <Formik
        initialValues={{ name: '', description: ''}}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          description: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        
          axios.post("https://northwind.vercel.app/api/categories", values)
            .then(res => console.log("ugur"))
        }}
      >
        <Form>
          <label htmlFor="name">First Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="description">Last Name</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" />

         

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default AddPage
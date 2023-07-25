import React, { useState } from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup"

const schema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
})


export const inputClass = "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
export const buttonClass = "px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"


async function loginUser(credentials) {
 return fetch('http://localhost:6969/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}


export default function Login({setToken}) {

  const handleSubmit = async e => {
    alert(e)
    return
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <>
    <div className='flex justify-center items-center h-screen'> 
     <section className="max-w-4xl p-6 mx-auto w-[600px] bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white text-center">Login</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={schema}
          onSubmit={async (values) => {
            handleSubmit(values)
          }}
        >
          <Form>
            <div className='mb-4'>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
              <Field name="username" type="text" className={inputClass}/>
              <ErrorMessage name="username" component="div" />
            </div>

            <div className='mb-4'>
              <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
              <Field name="password" type="password" className={inputClass} />
              <ErrorMessage name="password"  component="div" />
            </div>
            <button type="submit" className={buttonClass} style={{width: '100%'}}>Submit</button>
          </Form>
        </Formik>

    </section>
    </div>
    </>
    
  );
}
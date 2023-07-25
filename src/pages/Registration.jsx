import React, { useState } from 'react';
import { useFormik, Formik, Field, Form } from 'formik';
import * as Yup from "yup"

const schema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
  namaKaryawan: Yup.string().required(),
  nikKaryawan: Yup.string().required(),
  telpKaryawan: Yup.string().required(),
  alamatKaryawan: Yup.string().required(),
  roleKaryawan: Yup.string().required()
})


export const inputClass = "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
export const buttonClass = "px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"

export default function Login() {

  const form = useFormik({
    initialValues: {
      username: '', password: '', namaKaryawan: '', nikKaryawan: '', telpKaryawan: '', alamatKaryawan: '', roleKaryawan: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <>
    <div className='flex justify-center items-center h-screen'> 
     <section className="max-w-4xl p-6 mx-auto w-[600px] bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white text-center">Register</h2>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className='mb-4'>
              <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
              <Field name="name" type="text" className={inputClass}/>
            </div>

            <div className='mb-4'>

              <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
              <Field name="email" type="email" className={inputClass} />
            </div>
            <button type="submit" className={buttonClass} style={{width: '100%'}}>Submit</button>
          </Form>
        </Formik>

        {/* <form>
            <div className="gap-6 mt-4 ">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                    <input id="username" type="text" className={inputClass}  />
                    
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                    <input id="emailAddress" type="email" className={inputClass} />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                    <input id="password" type="password" className={inputClass} />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                    <input id="passwordConfirmation" type="password" className={inputClass} />
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
            </div>
        </form> */}
    </section>
    </div>
    </>
    
  );
}
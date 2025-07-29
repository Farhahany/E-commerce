import React, { useEffect, useState } from 'react'
import style from './Registration.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
  const [errMsg, seterrMsg] = useState(null);
 const [isloading, setisloading] = useState(false);

  let navigate = useNavigate();

  function submitForm(val) {
    setisloading(true)
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, val)
      .then((res) => {
        setisloading(false)
        console.log(res.data.token);
        if (res.data.message === 'success') {
          localStorage.setItem('usertoken', res.data.token);
          navigate('/');
        }
      }).catch((error) => {
        setisloading(false)
        console.log(error?.response?.data?.message);
        seterrMsg(error?.response?.data?.message);
      })
  }

  let validation = yup.object().shape({
    name: yup.string().required('name is required').min(3, 'min 3 letters'),
    email: yup.string().required('email is required').email('invalid email'),
    password: yup.string().required('password is required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    rePassword: yup.string().required('repassword is required').oneOf([yup.ref('password')], 'passwords should match'),
    phone: yup.string().required('phone is required').matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'invalid phone')
  })

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    validationSchema: validation,
    onSubmit(x) {
      submitForm(x)
    }
  })

  return (
    <>
      <div className="bg-blue-50 flex items-center justify-center min-h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Create an Account
          </h2>
          <form onSubmit={formik.handleSubmit}>

            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.name && formik.touched.name ?
                <div className="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
                  <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                    <path fill="currentColor"
                      d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207A11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47a1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
                    </path>
                  </svg>
                  <span className="text-red-800"> {formik.errors.name} </span>
                </div> : null}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.email && formik.touched.email ?
                <div className="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
                  <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                    <path fill="currentColor"
                      d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207A11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47a1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
                    </path>
                  </svg>
                  <span className="text-red-800"> {formik.errors.email} </span>
                </div> : null}
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.password && formik.touched.password ?
                <div className="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
                  <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                    <path fill="currentColor"
                      d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207A11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47a1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
                    </path>
                  </svg>
                  <span className="text-red-800"> {formik.errors.password} </span>
                </div> : null}
            </div>

            <div className="mb-5">
              <label htmlFor="rePassword" className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
                type="password"
                id="rePassword"
                name="rePassword"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.rePassword && formik.touched.rePassword ?
                <div className="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
                  <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                    <path fill="currentColor"
                      d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207A11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47a1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
                    </path>
                  </svg>
                  <span className="text-red-800"> {formik.errors.rePassword} </span>
                </div> : null}
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type="number"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.phone && formik.touched.phone ?
                <div className="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
                  <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                    <path fill="currentColor"
                      d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207A11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47a1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
                    </path>
                  </svg>
                  <span className="text-red-800"> {formik.errors.phone} </span>
                </div> : null}
            </div>

            {/* <div className="flex items-center mb-5">
              <input type="checkbox" id="terms" name="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div> */}

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300"
            >{isloading? <i className='fas fa-spinner fa-spin'></i>: 'Submit'}
            
            </button>

            {errMsg ?
              <div className="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
                <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                  <path fill="currentColor"
                    d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207A11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47a1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
                  </path>
                </svg>
                <span className="text-red-800"> {errMsg} </span>
              </div> : null}
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

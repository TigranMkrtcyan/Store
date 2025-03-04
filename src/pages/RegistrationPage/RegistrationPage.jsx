import { Field, Form, Formik } from 'formik'
import React from 'react'

const RegistrationPage = () => {
  return (
    <div>
      <Formik
        initialValues={{
          login : "",
          password : "",
          email : "",
        }}
      >
        <Form>
          <Field placeholder = 'login' name = 'login'/>
          <Field placeholder = 'email' name = 'login'/>
          <Field placeholder = 'password' name = 'password'/>
          <button>Login</button>
          <button>Registration</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage
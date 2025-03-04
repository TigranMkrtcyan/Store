import { Formik, Form, Field } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ users }) => {

    const navigate = useNavigate()

    const auth = (value, users) => {
        const user = users.find((user) => user.email === value.email)
        if (user) {
            let bool = user.password === +value.password
            if (bool) {
                navigate('/profile', { state: user })
            }
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(value) => auth(value, ...users)}
            >
                <Form>
                    <Field name='email' placeholder = 'email'/>
                    <Field name='password' placeholder = 'password' type = 'password'/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage
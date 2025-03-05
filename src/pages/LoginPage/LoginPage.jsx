import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

import style from './LoginPage.module.css'

const LoginPage = ({ users }) => {

    const navigate = useNavigate()


    const auth = (value, users) => {
        const user = users.find((el) => el.email === value.email)
        console.log(user);
        if (user) {
            debugger
            let bool = user.password === value.password
            console.log(bool);
            if (bool) {
                navigate('/profile', { state: user })
                console.log('asdasdaa');
            }
        }else {
            navigate('/registration')
        }
    }

    return (
        <div className= {style.login}>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(value) => auth(value, users)}
            >
                <Form className={style.form}>
                    <Field name='email' placeholder = 'email'  className= {style.inp}/>
                    <Field name='password' placeholder = 'password' type = 'password' className= {style.inp}/>
                    <button type='submit' className= {style.btn}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage
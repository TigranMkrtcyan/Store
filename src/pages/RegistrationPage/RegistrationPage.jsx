import { Field, Form, Formik, ErrorMessage } from 'formik'

import style from './RegistrationPage.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../../Data/context'

const RegistrationPage = () => {

  const navigate = useNavigate()
  const { val, add } = useContext(MyContext)

  return (
    <div className={style.reg}>
      <h1>Registration</h1>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
        }}
        validationSchema={val}

        onSubmit={(values, { resetForm }) => {
          add(values)
          resetForm()
          navigate('/login')
        }}
      >
        <Form className={style.form}>
          <Field placeholder='name' name='name' className={style.inp} />
          <ErrorMessage name='name' component='div' className={style.error} />
          <Field placeholder='email' name='email' className={style.inp} />
          <ErrorMessage name='email' component='div' className={style.error} />
          <Field placeholder='password' name='password' className={style.inp} type='password'/>
          <ErrorMessage name='password' component='div' className={style.error} />
          <div className={style.btns}>
            <NavLink to={"/login"}>
              <button className={style.btn} type='button'>Login</button>
            </NavLink>
            <button className={style.btn} type='submit'>Registration</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage
import * as Yup from 'yup'

let data = {
    users: [
        { id: 1, name: 'Vardges', email: 'vardges@gmail.com', password: 1234 },
        { id: 1, name: 'Gevorg', email: 'gevorg@gmail.com', password: 1234 },
        { id: 1, name: 'Gor', email: 'gor@gmail.com', password: 1234 },
        { id: 1, name: 'Artur', email: 'artur@gmail.com', password: 1234 },
        { id: 1, name: 'Ani', email: 'ani@gmail.com', password: 1234 },
    ],
    validationSchema: Yup.object({
        name: Yup.string().min(3, 'Too short!').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Too short!').required('Required'),
    })
}

export default data
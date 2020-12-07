import { useState } from 'react'

const useForm = (Validation) => {

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleValuesChange = e => {

        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(Validation(values))
    }

    return { values, handleValuesChange, handleSubmit, errors }
}

export default useForm

import React from 'react'

import useForm from './useForm'

import Validation from './Validation'

const Form = () => {

    const { values, handleValuesChange, handleSubmit, errors } = useForm(Validation)

    return (
        <div className="form-cnt">
            <div className="try-free-bar">
                <span><strong>Try it for free 7</strong> then $20/mo. thereafter</span>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className={`form-control ${errors.name ? 'error' : ''}`}>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="name"
                            value={values.name.trim()}
                            onChange={handleValuesChange}
                        ></input>
                        <small className="error-message">{errors.name && errors.name}</small>
                    </div>
                    <div className={`form-control ${errors.surname ? 'error' : ''}`}>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="surname"
                            value={values.surname.trim()}
                            onChange={handleValuesChange}
                        ></input>
                        <small className="error-message">{errors.surname && errors.surname}</small>
                    </div>
                    <div className={`form-control ${errors.email ? 'error' : ''}`}>
                        <input
                            type="text"
                            placeholder="Email Address"
                            name="email"
                            value={values.email.trim()}
                            onChange={handleValuesChange}
                        ></input>
                        <small className="error-message">{errors.email && errors.email}</small>
                    </div>
                    <div className={`form-control ${errors.password ? 'error' : ''}`}>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={values.password.trim()}
                            onChange={handleValuesChange}
                        ></input>
                        <small className="error-message">{errors.password && errors.password}</small>
                    </div>
                    <div className="submit-cnt">                    <button type="submit">CLAIM YOUR FREE TRIAL</button></div>
                    <div className="terms-text"><small>By clicking this button, you are agreeing to our <a href="#link">Terms of service</a></small></div>
                </form>
            </div>
        </div>
    )
}

export default Form

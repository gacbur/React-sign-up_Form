export default function Validation(values) {

    let errors = {}

    if (!values.name.trim()) {
        errors.name = "First Name cannot be empty"
    }

    if (!values.surname) {
        errors.surname = "Last Name cannot be empty"
    }

    if (!values.email) {
        errors.email = "Email cannot be empty"
    } else if (values.email.indexOf('@') === -1) {
        errors.email = "Email needs to contain a '@'."
    }

    if (!values.password || values.password.indexOf(" ") !== -1) {
        errors.password = "Password cannot be empty or include empty spaces"
    } else if (values.password.length < 6) {
        errors.password = "Password needs minimum of 6 characters"
    }

    return errors
}
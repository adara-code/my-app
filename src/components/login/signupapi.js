import axios from "axios"

const baseUrl = 'https://eco-elites-api.up.railway.app'
const signupForm = document.getElementById('signupForm')
e.preventDefault()
const SignupFormAPi = () => {
    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value
    axios.post(`${baseUrl}/signup`, {
        emailSignup : inputEmail,
        passwordSignup : inputPassword
    }).then(rs => {
        console.log(rs)
    }).catch(err)
}
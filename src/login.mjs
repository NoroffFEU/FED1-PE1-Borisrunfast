import { login } from './util/doFetch.mjs'

const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(loginForm)
    const data = Object.fromEntries(formData)
    
    try {
        login(data)
    }
    
    catch(err) {
        alert(`something went wrong ${err}`)
    }

    finally{
        alert(`Successfully logged in!`)
    }
})
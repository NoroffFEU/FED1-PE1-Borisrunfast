import { register } from './util/doFetch.mjs'

const registerForm = document.getElementById('register-form')



registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(registerForm)
    const data = Object.fromEntries(formData)
    
    try {
        register(data)
    }
    
    catch(err) {
        alert(`something went wrong ${err}`)
    }

    finally{
        alert(`Successfully logged in as ${data.name}`)
    }
})
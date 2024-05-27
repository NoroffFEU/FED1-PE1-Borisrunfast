import { getFromStorage, putToStorage } from "./localStorage.mjs"

async function register(formData) {

    const response = await fetch('https://v2.api.noroff.dev/auth/register', {
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(formData)
    }) 

    const data = await response.json()
    return data
}

async function login(formData) {

    const response = await fetch('https://v2.api.noroff.dev/auth/login', {
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(formData)
    }) 

    const data = await response.json()
    putToStorage('userData', data.data)
    putToStorage('accessToken', data.data.accessToken)
    return data
}

async function postBlog(formData) {
    const response = await fetch('https://v2.api.noroff.dev/blog/posts/Boris', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json',
        Authorization: `Bearer ${getFromStorage('accessToken')}`
    },
    body: JSON.stringify(formData)
    }) 

    const data = await response.json()
    return data
}

async function getAllBlogs() {
    const response = await fetch('https://v2.api.noroff.dev/blog/posts/Boris', {
    method: 'GET'
    }) 

    const data = await response.json()
    return data
}

async function getBlog(id) {
    const response = await fetch(`https://v2.api.noroff.dev/blog/posts/Boris/${id}`, {
    method: 'GET'
    }) 

    const data = await response.json()
    return data
}

async function updateBlog(formData, id) {
    const response = await fetch(`https://v2.api.noroff.dev/blog/posts/Boris/${id}`, {
    method: 'PUT',
    headers: {
        'content-Type': 'application/json',
        Authorization: `Bearer ${getFromStorage('accessToken')}`
    },
    body: JSON.stringify(formData)
    }) 

    const data = await response.json()
    return data
}

async function deleteBlog(id) {
    const response = await fetch(`https://v2.api.noroff.dev/blog/posts/Boris/${id}`, {
    method: 'DELETE',
    headers: {
        'content-Type': 'application/json',
        Authorization: `Bearer ${getFromStorage('accessToken')}`
    },
    }) 

    const data = await response.json()
    return data
}



export { register, login, postBlog, getAllBlogs, getBlog, deleteBlog, updateBlog }
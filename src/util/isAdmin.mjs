import { getFromStorage } from "./localStorage.mjs"

const email = 'borguz00076@stud.noroff.no'

const data = getFromStorage('userData')

console.log(data?.email, email)

if (!data || data?.email != email) {
    window.location.href = `${window.location.origin}/HotView/index.html`
}
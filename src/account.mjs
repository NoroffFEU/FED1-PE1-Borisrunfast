import { getFromStorage } from "./util/localStorage.mjs"

const accountName = document.getElementById('account-name')

const data = getFromStorage('userData')

accountName.innerText = `Name: ${data.name}`
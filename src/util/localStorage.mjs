function putToStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
}

function getFromStorage(key) {
    return JSON.parse(window.localStorage.getItem(key))
}

export {putToStorage, getFromStorage}
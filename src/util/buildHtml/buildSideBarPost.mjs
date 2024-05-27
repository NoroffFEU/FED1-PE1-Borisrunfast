import removeHtmlTags from "../removeHtmlTags.mjs"

function buildSideBarPost(data) {
    const body = document.createElement('section')

    const title = document.createElement('h2')
    const image = document.createElement('img')
    const paragraph = document.createElement('p')
    const readMoreBtn = document.createElement('a')

    body.className = 'sidebar-suggestion'
    title.className = 'suggestion-title'
    image.className = 'suggestion-img'
    paragraph.className = 'suggestion-paragraph'
    readMoreBtn.className = 'suggestion-btn'

    title.innerText = data.title
    image.src = data.media.url
    image.alt = data.media.alt
    paragraph.innerText = removeHtmlTags(data.body)
    readMoreBtn.innerText = 'Read More ->'
    readMoreBtn.href = `${window.location.origin}/FED1-PE1-Borisrunfast/post/index.html?id=${data.id}`

    body.append(title, image, paragraph, readMoreBtn)
    return body
}

export default buildSideBarPost
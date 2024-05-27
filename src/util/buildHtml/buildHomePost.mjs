import removeHtmlTags from "../removeHtmlTags.mjs"

function buildHomePost(data) {
    const decorDiv_o = document.createElement('div')
    const decorDiv_i = document.createElement('div')
    const article = document.createElement('article')

    const headerDiv = document.createElement('div')
    const title = document.createElement('h3')
    const date = document.createElement('p')

    const bodyDiv = document.createElement('div')
    const image = document.createElement('img')
    const dataDiv = document.createElement('div')
    
    const descriptionDiv = document.createElement('div')
    const description = document.createElement('p')

    const infoDiv = document.createElement('div')
    const infoP = document.createElement('p')
    const readMoreBtn = document.createElement('button')

    decorDiv_o.className = 'obj-decoration-1-center'
    decorDiv_i.className = 'obj-decoration-1'
    article.className = 'feed-post'
    headerDiv.className = 'feed-post-header'
    bodyDiv.className = 'feed-post-body'
    image.className = 'feed-post-body-image'
    dataDiv.className = 'feed-post-body-data'
    descriptionDiv.className = 'feed-post-data-description'
    infoDiv.className = 'feed-post-data-info'
    readMoreBtn.className = 'btn-decoration-1'

    title.innerText = data.title
    date.innerText = new Date(data.created).toUTCString()
    image.src = data.media.url
    image.alt = data.media.alt
    description.innerText = removeHtmlTags(data.body)
    infoP.innerText = `Author: ${data.author.name}`
    readMoreBtn.innerText = 'Read More'

    readMoreBtn.addEventListener('click', () => {
        window.location.href = `${window.location.origin}/HotView/post/index.html?id=${data.id}`
    })
    image.addEventListener('click', () => {
        window.location.href = `${window.location.origin}/HotView/post/index.html?id=${data.id}`
    })

    infoDiv.append(infoP, readMoreBtn)
    descriptionDiv.append(description)
    dataDiv.append(descriptionDiv, infoDiv)

    bodyDiv.append(image, dataDiv)
    headerDiv.append(title, date)

    article.append(headerDiv, bodyDiv)

    decorDiv_i.append(article)
    decorDiv_o.append(decorDiv_i)

    return decorDiv_o
}

export default buildHomePost
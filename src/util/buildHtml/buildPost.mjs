
function buildPost(data) {
    const articleBody = document.getElementById('post-article-body')

    const title = document.createElement('h2')
    title.className = 'post-title'
    title.innerText = data.title

    const dataContainer = document.createElement('div')
    dataContainer.className = 'post-data-container'

    const author = document.createElement('p')
    author.className = 'post-data-author'
    author.innerText = data.author.name

    const date = document.createElement('p')
    date.className = 'post-data-date'
    date.innerText = new Date(data.updated).toUTCString()

    const mainImage = document.createElement('img')
    mainImage.className = 'post-main-img'
    mainImage.src = data.media.url
    mainImage.alt = data.media.alt


    dataContainer.append(author, date)

    articleBody.append(title, dataContainer, mainImage)
    articleBody.innerHTML += data.body

    const shareBtn = document.createElement('button')
    shareBtn.className = 'post-share-btn'
    shareBtn.innerText = 'share'

    shareBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href)
        alert('link copied')
    })

    articleBody.append(shareBtn)
}

export default buildPost
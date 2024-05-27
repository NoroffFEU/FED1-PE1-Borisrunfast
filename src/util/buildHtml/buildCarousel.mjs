import removeHtmlTags from "../removeHtmlTags.mjs"

function buildCarousel(data) {
    const feedCarousel = document.getElementById('feed-carousel')
    const title = document.getElementById('carousel-title')
    const paragraph = document.getElementById('carousel-paragraph')
    const author = document.getElementById('carousel-author')
    const date = document.getElementById('carousel-date')
    const redirectBtn = document.getElementById('carousel-btn')

    const mainImg = document.getElementById('main-carousel-img')
    const secImg = document.getElementById('carousel-img-1')
    const thrImg = document.getElementById('carousel-img-2')

    secImg.dataset.id = 1
    thrImg.dataset.id = 2

    const carouselData = [data[0], data[1], data[2]]

    function updateCarousel(id) {

        const hold = carouselData[id]
        carouselData.splice(id, 1)
        carouselData.unshift(hold)

        mainImg.src = carouselData[0].media.url
        mainImg.alt = carouselData[0].media.alt
        secImg.src = carouselData[1].media.url
        secImg.alt = carouselData[1].media.alt
        thrImg.src = carouselData[2].media.url
        thrImg.alt = carouselData[2].media.alt

        title.innerText = carouselData[0].title
        paragraph.innerText = removeHtmlTags(carouselData[0].body)
        author.innerText = 'Author: ' + carouselData[0].author.name
        date.innerText = new Date(carouselData[0].created).toUTCString()
        redirectBtn.addEventListener('click', () => {
            window.location.href = `${window.location.origin}/HotView/post/index.html?id=${carouselData[0].id}`
        })
    }

    feedCarousel.addEventListener('click', (e) => {
        if (e.target.dataset.id) {
            updateCarousel(e.target.dataset.id)
        }
    })

    updateCarousel(0)
}

export default buildCarousel
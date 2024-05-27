import buildCarousel from "./util/buildHtml/buildCarousel.mjs";
import buildHomePost from "./util/buildHtml/buildHomePost.mjs";
import { getAllBlogs } from "./util/doFetch.mjs";

const body = document.getElementById('posts')

try {
    const carouselData = await getAllBlogs()

    buildCarousel(carouselData.data)

    for (let i = 3; i < carouselData.data.length; i++) {
        body.append(buildHomePost(carouselData.data[i]))
    }
}
catch (err) {
    alert(`Something went wrong: ${err}`)
}





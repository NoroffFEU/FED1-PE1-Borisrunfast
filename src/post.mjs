import buildPost from "./util/buildHtml/buildPost.mjs"
import buildSideBarPost from "./util/buildHtml/buildSideBarPost.mjs"
import { getAllBlogs, getBlog } from "./util/doFetch.mjs"


const sidebarBody = document.getElementById('sidebar-body')
const urlParams = new URLSearchParams(window.location.search)

if (urlParams.has('id')) {
    try {
        const id = urlParams.get('id')
        const data = await getBlog(id)
        buildPost(data.data)

        const sidebarData = await getAllBlogs()
        for (let i = 0; i< sidebarData.data.length; i++) {
            const sidebar = buildSideBarPost(sidebarData.data[i])
            sidebarBody.append(sidebar)
        }
    }
    catch (err) {
        alert(`Something went wrong: ${err}`)
    }
    
} else {
   window.location.replace('/HotView')
}


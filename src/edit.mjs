import buildRecentPost from "./util/buildHtml/buildRecentPost.mjs"
import buildSubInputs from "./util/buildHtml/buildSubInputs.mjs"
import buildFormData from "./util/buildPostData.mjs"
import { postBlog, getAllBlogs, updateBlog } from "./util/doFetch.mjs"
import updateEditPost from "./util/updateEditPost.mjs"

const editorForm = document.getElementById('editor-form')
const subInputsContainer = document.getElementById('editor-sub-inputs')

const recentPosts = document.getElementById('editor-recent-posts')
const updateBtn = document.getElementById('editor-update-btn')
const postBtn = document.getElementById('editor-post-btn')
const allBlogsData = await getAllBlogs()


let id = 0

function insertRecentPosts() {
    for (let i = 0; i < allBlogsData.data.length; i++) {
        recentPosts.append(buildRecentPost(allBlogsData.data[i]))
    }
}


editorForm.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.id == 'add-editor-inputs-btn') {
        subInputsContainer.append(buildSubInputs(id))
        id++
    }
    else if (e.target.id == 'editor-post-btn') {
        const formData = new FormData(editorForm)
        const data = Object.fromEntries(formData)
        const payload = buildFormData(data)

        try{
           postBlog(payload) 
           updateEditPost('')
           alert(`Post Successful!`)
        }
        catch(err) {
            alert(`Something went wrong: ${err}`)
        } 
    } 
    else if (e.target.id == 'editor-update-btn') {
        const formData = new FormData(editorForm)
        const data = Object.fromEntries(formData)
        const payload = buildFormData(data)
        
        try{
            updateBlog(payload, e.target.dataset.id)
            updateEditPost('')
            alert(`Update Successful!`)
         }
         catch(err) {
             alert(`Something went wrong: ${err}`)
         }
    }
    else if (e.target.id == 'editor-clear-btn') {
        updateEditPost('')
    }
    
})



document.addEventListener('click', (e) => {
    if (e.target.id == 'editor-recent-posts-btn'){
        recentPosts.style.display = 'block'
        editorForm.style.display = 'none'
    }
    else if (e.target.id == 'editor-posts-btn'){
        updateBtn.setAttribute('disabled', '')
        postBtn.removeAttribute('disabled', '')
        editorForm.style.display = 'block'
        recentPosts.style.display = 'none'
    }
})



insertRecentPosts()
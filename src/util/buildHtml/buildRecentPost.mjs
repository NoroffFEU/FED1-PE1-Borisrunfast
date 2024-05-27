import { deleteBlog } from "../doFetch.mjs"
import updateEditPost from "../updateEditPost.mjs"

const updateBtn = document.getElementById('editor-update-btn')
const postBtn = document.getElementById('editor-post-btn')

function buildRecentPost(data) {
    const editorForm = document.getElementById('editor-form')
    const editorRecentPosts = document.getElementById('editor-recent-posts')


    const editorRecentPostBody = document.createElement('div')
    editorRecentPostBody.className = 'editor-recent-posts-body'
    editorRecentPostBody.id = data.id
    
    const recentPostsImg = document.createElement('div')
    recentPostsImg.className = 'recent-posts-img'

    const recentPostsBody = document.createElement('div')
    recentPostsBody.className = 'recent-posts-body'

    const recentPostsBodyDetails = document.createElement('div')
    recentPostsBodyDetails.className = 'recent-posts-body-details'

    const recentPostBodyButtons = document.createElement('div')
    recentPostBodyButtons.className = 'recent-posts-body-buttons'


    const image = document.createElement('img')
    image.src = data.media.url
    image.alt = data.media.alt

    const detailsTitle = document.createElement('h3')
    detailsTitle.className = 'details-title'
    detailsTitle.innerText = data.title

    const detailsDate = document.createElement('p')
    detailsDate.className = 'details-date'
    detailsDate.innerText = new Date(data.updated).toUTCString()

    const btnShare = document.createElement('button')
    btnShare.innerText = 'Share'
    btnShare.className = 'buttons-share'
    const btnEdit = document.createElement('button')
    btnEdit.innerText = 'Edit'
    btnEdit.className = 'buttons-edit'
    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Delete'
    btnDelete.className = 'buttons-delete'

    
    recentPostBodyButtons.append(btnShare, btnEdit, btnDelete)
    recentPostsBodyDetails.append(detailsTitle, detailsDate)
    recentPostsBody.append(recentPostsBodyDetails, recentPostBodyButtons)
    recentPostsImg.append(image)
    editorRecentPostBody.append(recentPostsImg, recentPostsBody)


    
    function deleteElement() {
        try {
            deleteBlog(data.id)
            editorRecentPostBody.remove()
        } catch (err) {
            alert(`Something went wrong: ${err}`)
        }
        
    }

    btnShare.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href)
        alert('link copied')
    })

    btnDelete.addEventListener('click', () => {
        deleteElement() 
    })
    
    btnEdit.addEventListener('click', () => {
        updateBtn.removeAttribute('disabled', '')
        postBtn.setAttribute('disabled', '')
        updateEditPost(data)
        editorForm.style.display = 'block'
        editorRecentPosts.style.display = 'none'
    })

    return editorRecentPostBody
}


export default buildRecentPost
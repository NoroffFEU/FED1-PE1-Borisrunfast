
function updateEditPost(data) {

    const updateBtn = document.getElementById('editor-update-btn')
    updateBtn.dataset.id = data.id

    const title = document.getElementById('form-title')
    const body = document.getElementById('form-body')
    const tags = document.getElementById('form-tags')
    const imageUrl = document.getElementById('form-url')
    const imageAlt = document.getElementById('form-alt')


    title.value = data.title || ''
    body.value = data.body || ''
    tags.value = data.tags?.join(' ') || ''
    imageUrl.value = data.media?.url || ''
    imageAlt.value = data.media?.alt || ''
}

export default updateEditPost
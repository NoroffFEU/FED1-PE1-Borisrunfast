
function buildFormData(data) {

    const subList = []
    let i = 0

    while(`subTitle_${i}` in data) {
        subList.push({subTitle: data[`subTitle_${i}`], subBody: data[`subBody_${i}`] })
        i++
    }
    
    const tags = data.tags.split(' ')


    return {
        title: data.title,
        body: data.body,
        tags: tags,
        media: {
            url: data.url,
            alt: data.alt
        }
    }
}

export default buildFormData
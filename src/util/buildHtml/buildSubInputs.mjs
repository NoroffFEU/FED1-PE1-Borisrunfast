function buildSubInputs(id) {
    const subInput = document.createElement('div')
    subInput.id = `sub-input-${id}`

    const label_1 = document.createElement('label')
    const label_2 = document.createElement('label')

    const input_1 = document.createElement('input')
    const input_2 = document.createElement('textarea')

    label_1.classList = 'editor-label'
    label_2.classList = 'editor-label'

    label_1.innerText = 'Sub Title'
    label_2.innerText = 'Sub Body'

    input_1.classList = 'editor-input'
    input_2.classList = 'editor-input'

    input_1.name = `subTitle_${id}`
    input_2.name = `subBody_${id}`

    subInput.append(label_1, input_1, label_2, input_2)

    return subInput
}

export default buildSubInputs
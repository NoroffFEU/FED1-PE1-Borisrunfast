function removeHtmlTags(str) {
    //geeks for geeks code
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}

export default removeHtmlTags
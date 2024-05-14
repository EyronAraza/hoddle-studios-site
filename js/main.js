// For redirecting to an element's ID
function scrolltToElement(idElement, additionalPixels = 0) {

    const element = document.getElementById(idElement)
    if (element) {
        element.scrollIntoView()
        window.scrollBy(0, -additionalPixels);
    }

}

// For redirecting to a link after clicking an item
function clickToLink(link) {
    window.location.href = link;
}
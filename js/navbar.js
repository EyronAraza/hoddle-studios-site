// Set active link in navbar based on current page
function setActiveLink() {
    const currentUrl = window.location.href // get current URL of page
    const navLinks = document.querySelectorAll('.nav-link') // get anchor links
    const linkIcons = document.querySelectorAll('.link-icon') // get icon links
    const linkUnderlines = document.querySelectorAll('.link-underline') // get link underlines
    const linkLists = document.querySelectorAll('.list-link') // get listed links

    // loop through each anchor link
    navLinks.forEach((link, index) => {
        // Check if anchor link's href is matching with the current URL, apply active class to that nav link
        if (link.href === currentUrl) {
            console.log("LINK'S HREF MATCHED WITH URL!") // debug test
            link.classList.add('active')
            linkIcons[index].classList.add('active')
            linkUnderlines[index].classList.add('active')
            linkLists[index].classList.add('active')
        } else {
            link.classList.remove('active')
            linkIcons[index].classList.remove('active')
            linkUnderlines[index].classList.remove('active')
            linkLists[index].classList.remove('active')
        }
    })
}

// Check menu bar's checkbox (to make navbar appear on side in mobile)
const checkbox = document.getElementById('checkbox-menubar') // get checkbox
const mainNav = document.getElementById('main-nav') // get main navigation bar
function checkCheckbox() {
    // Check if the current viewport width is within the specified range (max 800px)
    if (window.innerWidth <= 800) {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            mainNav.style.left = '0'
            mainNav.style.opacity = '1'
        } else {
            mainNav.style.left = '100%'
            mainNav.style.opacity = '0'
        }
    } else {
        // Reset navigation bar position if outside the specified range
        mainNav.style.left = '' // Reset to default or remove inline style
        mainNav.style.opacity = '1' // reset to default opacity
    }
}

// Call functions 
setActiveLink()

// Check if checkbox is checked
checkbox.addEventListener('change', checkCheckbox);
window.addEventListener('resize', checkCheckbox);
checkCheckbox()
// For re-using navigation bar to multiple pages
fetch('navbar.html') // Get navbar html and apply it to any pages
    .then(response => response.text()) // convert file to text
    .then(html => {
        // Insert navigation bar to a designated element 
        const navbarContainer = document.getElementById('navbar-container')
        navbarContainer.innerHTML = html

        // Create a script element and get JavaScript file location
        const scriptElement = document.createElement('script')
        scriptElement.src = 'js/navbar.js'

        // Add the script element to the body
        document.body.appendChild(scriptElement)
    })

    // Error if its not found
    .catch(error => {
        console.error(error)
    })

// For footer  to multiple pages
fetch('footer.html')
    .then(response => response.text()) // convert file to text
    .then(html => {
        // Insert footer to a designated element 
        const footerContainer = document.getElementById('footer-container')
        footerContainer.innerHTML = html
    })

    // Error if its not found
    .catch(error => {
        console.error(error)
    })
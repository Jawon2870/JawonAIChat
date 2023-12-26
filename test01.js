setInterval(() => {
    // Get all `<a>` tags in the webpage
    const links = document.querySelectorAll("a");
    // Loop through all `<a>` tags using a `for...in` loop
    for (let i in links) {
            links[i].target = "_blank";
    }
}, 100);

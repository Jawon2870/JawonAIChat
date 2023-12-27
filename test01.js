setInterval(() => {
    // 所有链接在新页面打开
    const links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].target = "_blank";
        
    }
}, 100);

setInterval(() => {
    // 所有链接在新页面打开
    const links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].target = "_blank";
    }
}, 100);

// 滚动到顶部或底部按钮
const backToTopButton = document.getElementById('back-to-top');
const backToBottomButton = document.getElementById('back-to-bottom');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('show');
        backToBottomButton.classList.remove('show');
    } else {
        backToBottomButton.classList.add('show');
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToBottomButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
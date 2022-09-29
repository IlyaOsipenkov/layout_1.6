
let screenWidth = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
let all = document.getElementsByTagName("*"), i = 0, rect, docWidth = document.documentElement.offsetWidth;

if (screenWidth > 768) {
    for (; i < all.length; i++) {
        const { right, left } = all[i].getBoundingClientRect();
        if (right > docWidth || left < 0) {
            all[i].style.width = 'auto'
        }
    }
}


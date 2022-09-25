import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';

let swiper = undefined
let screenWidth = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;

const isMobile = (screenWidth) => {
    return screenWidth <= 767
}

const slidesPerView = () => {
    const slide = document.getElementsByClassName('btn-repair')[0].clientWidth
    return (screenWidth) / (slide + 8)
}



if (isMobile(screenWidth)) {
    swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: slidesPerView(),
        spaceBetween: 16,
        updateOnWindowResize: true,
    })
}


// if (isMobile(screenWidth)) {
//     swiper = new Swiper ('.swiper', {
//         pagination: {
//             el: 'swiper-pagination',
//             type: 'bullets'
//         },
//         slidesPerView: slidesPerView(),
//         spaceBetween: 16,
//         updateOnWindowResize: true,
//     })
// }

const resize = () => {
    screenWidth = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth
    console.log(screenWidth)
    if (swiper != undefined) {
        if (isMobile(screenWidth)) {
            swiper = new Swiper('.swiper', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                slidesPerView: slidesPerView(),
                spaceBetween: 16,
                updateOnWindowResize: true,
            })
        } else {
            swiper.destroy(false, false)
            swiper.disable()
        }
    }
}


window.addEventListener('resize', resize)


const btnRepairBrandsMoreInfo = document.querySelector('.repair-brands__btn-more-info')
const swiperClass = document.querySelector('.swiper')
// const btnDivMoreInfo = document.getElementsByClassName('repair-brands__wrapper-more-info')

let buttonState = false


const clickHandler = () => {
    const [arrows, text] = btnRepairBrandsMoreInfo.children
    console.log('click handler')
    const toggle = (state) => {
        if (!state) {
            text.innerHTML = 'Скрыть'
            arrows.style.transform = 'rotate(180deg)'
            swiperClass.style.height = '270px'
        } else {
            text.innerHTML = 'Показать все'
            arrows.style.transform = 'rotate(0)'
            swiperClass.style.height = '180px'
        }
        buttonState = !buttonState
    }
    toggle(buttonState)
}

btnRepairBrandsMoreInfo.addEventListener('click', clickHandler)


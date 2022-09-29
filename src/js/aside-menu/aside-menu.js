

const btnBurgerMenu = document.getElementsByClassName('top-menu__burger')[0]
const btnMenuClose = document.getElementsByClassName('box-one__icon')[0]
const asideMenuWrapper = document.getElementsByClassName('aside-menu-container')[0]
const asideMenu = document.getElementsByClassName('aside-menu')[0]


const openMenuHandler = () => {
    asideMenuWrapper.style.display = 'block'
    console.log('open')
}

btnBurgerMenu.addEventListener('click', openMenuHandler)

// const closeMenuHandler = () => {
//     asideMenuWrapper.style.display = 'none'
//     console.log('close')
// }

// btnMenuClose.addEventListener('click', closeMenuHandler)


// const modalCointaier = document.getElementsByClassName('modal-container')[0]
// const closeModalContaier = (event) => {
//     if (event.path[0].tagName === 'ASIDE' || event.path[1].classList[0] === 'modal__top__button') {
//         modalCointaier.classList.remove('modal-container--visible')
//     }
// }

const closeMenuContainer = (event) => {
    console.log('test close menu')
    if (event.path[0].tagName === 'ASIDE' || event.path[1].classList[0] === 'box-one__icon') {
        asideMenuWrapper.style.display = 'none'
    }
}

asideMenuWrapper.addEventListener('click', closeMenuContainer)


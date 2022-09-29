let e = null

const getTextAreaEl = () => {
    e = document.getElementsByClassName('modal__input--last')[0]
    e.innerHTML = ''
}

const modalCointaier = document.getElementsByClassName('modal-container')[0]
const closeModalContaier = (event) => {
    if (event.path[0].tagName === 'ASIDE' || event.path[1].classList[0] === 'modal__top__button') {
        modalCointaier.classList.remove('modal-container--visible')
    }
}
modalCointaier.addEventListener('click', closeModalContaier)
const placeOrder = document.getElementsByClassName('place-order')[0]
const placeOrderMobile = document.getElementsByClassName('top-menu__repair')[0]
const handlePlaceOrderClick = () => {
    modalCointaier.classList.add('modal-container--visible')
    changeModalHeaderText('placeOrder')
    getTextAreaEl()
}

console.log(placeOrder)
placeOrder.addEventListener('click', handlePlaceOrderClick)
placeOrderMobile.addEventListener('click', handlePlaceOrderClick)

const repairStatus = document.getElementsByClassName('repair-status')[0]
const repairStatusMobile = document.getElementsByClassName('top-menu__checkstatus')[0]
const handleRepairStatusClick = () => {
    modalCointaier.classList.add('modal-container--visible')
    changeModalHeaderText('repairStatus')
    getTextAreaEl()
}
repairStatus.addEventListener('click', handleRepairStatusClick)
repairStatusMobile.addEventListener('click', handleRepairStatusClick)

const modalHeader = document.getElementsByClassName('modal-header__text')[0]
const changeModalHeaderText = (typeOfModal) => {
    const modalInputs = document.getElementsByClassName('modal__input')
    if (String(typeOfModal) === 'placeOrder') {
        modalHeader.innerHTML = 'Обратная связь'
        for (let i = 0; i < modalInputs.length; i++) {
            modalInputs[i].style.display = 'block'
        }
    } else if (String(typeOfModal) === 'repairStatus') {
        modalHeader.innerHTML = "Заказать звонок"
        for (let i = 0; i < modalInputs.length; i++) {
            if (i !== 1) {
                modalInputs[i].style.display = 'none'
            }
        }
    } else {
        throw new Error('Invalid Type of Modal')
    }
}
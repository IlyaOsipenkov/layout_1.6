/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/aside-menu/aside-menu.js":
/*!*************************************!*\
  !*** ./js/aside-menu/aside-menu.js ***!
  \*************************************/
/***/ (() => {

var btnBurgerMenu = document.getElementsByClassName('top-menu__burger')[0];
var btnMenuClose = document.getElementsByClassName('box-one__icon')[0];
var asideMenuWrapper = document.getElementsByClassName('aside-menu-container')[0];
var asideMenu = document.getElementsByClassName('aside-menu')[0];

var openMenuHandler = function openMenuHandler() {
  asideMenuWrapper.style.display = 'block';
  console.log('open');
};

btnBurgerMenu.addEventListener('click', openMenuHandler); // const closeMenuHandler = () => {
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

var closeMenuContainer = function closeMenuContainer(event) {
  console.log(event.path);

  if (event.path[0].tagName === 'ASIDE' || event.path[2].classList[0] === 'box-one__icon') {
    asideMenuWrapper.style.display = 'none';
  }
};

asideMenuWrapper.addEventListener('click', closeMenuContainer);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _width_fix_width_fix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./width-fix/width-fix.js */ "./js/width-fix/width-fix.js");
/* harmony import */ var _width_fix_width_fix_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_width_fix_width_fix_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modals_modals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/modals.js */ "./js/modals/modals.js");
/* harmony import */ var _modals_modals_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modals_modals_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aside_menu_aside_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aside-menu/aside-menu.js */ "./js/aside-menu/aside-menu.js");
/* harmony import */ var _aside_menu_aside_menu_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aside_menu_aside_menu_js__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var swiper = undefined;
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var isMobile = function isMobile(screenWidth) {
  return screenWidth <= 767;
};

var slidesPerView = function slidesPerView() {
  var slide = document.getElementsByClassName('btn-repair')[0].clientWidth;
  return screenWidth / (slide + 8);
};

var slidesPerViewScnd = function slidesPerViewScnd() {
  var slide = document.getElementsByClassName('swiper-gadgets__item')[0].clientWidth;
  return screenWidth / (slide + 8);
};

var slidesPerViewPrices = function slidesPerViewPrices() {
  var slide = document.getElementsByClassName('swiper-service-prise__element')[0].clientWidth;
  return screenWidth / (slide + 8);
};

if (isMobile(screenWidth)) {
  swiper = new Swiper('.swiper-repair', {
    pagination: {
      el: '.swiper-pagination-repair',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: slidesPerView(),
    spaceBetween: 32,
    updateOnWindowResize: true
  });
} // if (isMobile(screenWidth)) {
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


var resize = function resize() {
  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log(screenWidth);

  if (swiper != undefined) {
    if (isMobile(screenWidth)) {
      swiper = new Swiper('.swiper-repair', {
        pagination: {
          el: '.swiper-pagination-repair',
          type: 'bullets',
          clickable: true
        },
        slidesPerView: slidesPerView(),
        spaceBetween: 32,
        updateOnWindowResize: true
      });
    } else {
      swiper.destroy(false, false);
      swiper.disable();
    }
  }
};

window.addEventListener('resize', resize);
var btnRepairBrandsMoreInfo = document.querySelector('.repair-brands__btn-more-info');
var swiperClass = document.querySelector('.swiper-repair'); // const btnDivMoreInfo = document.getElementsByClassName('repair-brands__wrapper-more-info')

var buttonState = false;

var clickHandler = function clickHandler() {
  var _btnRepairBrandsMoreI = _slicedToArray(btnRepairBrandsMoreInfo.children, 2),
      arrows = _btnRepairBrandsMoreI[0],
      text = _btnRepairBrandsMoreI[1];

  console.log('click handler');

  var toggle = function toggle(state) {
    if (!state) {
      text.innerHTML = 'Скрыть';
      arrows.style.transform = 'rotate(180deg)';
      swiperClass.style.height = '296px';
    } else {
      text.innerHTML = 'Показать все';
      arrows.style.transform = 'rotate(0)';
      swiperClass.style.height = '192px';
    }

    buttonState = !buttonState;
  };

  toggle(buttonState);
};

btnRepairBrandsMoreInfo.addEventListener('click', clickHandler); //2nd swiper options

if (isMobile(screenWidth)) {
  swiper = new Swiper('.swiper-gadgets', {
    pagination: {
      el: '.swiper-pagination-gadgets',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: slidesPerViewScnd(),
    spaceBetween: 32,
    updateOnWindowResize: true
  });
}

var resizeGadgets = function resizeGadgets() {
  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log(screenWidth);

  if (swiper != undefined) {
    if (isMobile(screenWidth)) {
      swiper = new Swiper('.swiper-gadgets', {
        pagination: {
          el: '.swiper-pagination-gadgets',
          type: 'bullets',
          clickable: true
        },
        slidesPerView: slidesPerViewScnd(),
        spaceBetween: 32,
        updateOnWindowResize: true
      });
    } else {
      swiper.destroy(false, false);
      swiper.disable();
    }
  }
};

window.addEventListener('resize', resizeGadgets);
var btnMoreInfoGadgets = document.querySelector('.gadgets__btn-more-info');
var swiperGadgets = document.querySelector('.swiper-gadgets'); // const btnDivMoreInfo = document.getElementsByClassName('repair-brands__wrapper-more-info')

var buttonStateGadgets = false;

var clickHandlerGadgets = function clickHandlerGadgets() {
  var _btnMoreInfoGadgets$c = _slicedToArray(btnMoreInfoGadgets.children, 2),
      arrows = _btnMoreInfoGadgets$c[0],
      text = _btnMoreInfoGadgets$c[1];

  console.log('click handler');

  var toggle = function toggle(state) {
    if (!state) {
      text.innerHTML = 'Скрыть';
      arrows.style.transform = 'rotate(180deg)';
      swiperGadgets.style.height = '560px';
    } else {
      text.innerHTML = 'Показать все';
      arrows.style.transform = 'rotate(0)';
      swiperGadgets.style.height = '176px';
    }

    buttonStateGadgets = !buttonStateGadgets;
  };

  toggle(buttonStateGadgets);
};

btnMoreInfoGadgets.addEventListener('click', clickHandlerGadgets); //service-price swiper

if (isMobile(screenWidth)) {
  swiper = new Swiper('.swiper-service-prise', {
    pagination: {
      el: '.swiper-pagination-service-price',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: slidesPerViewPrices(),
    spaceBetween: 32,
    updateOnWindowResize: true
  });
}

var resizePrices = function resizePrices() {
  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log(screenWidth);

  if (swiper != undefined) {
    if (isMobile(screenWidth)) {
      swiper = new Swiper('.swiper-service-prise', {
        pagination: {
          el: '.swiper-pagination-service-price',
          type: 'bullets',
          clickable: true
        },
        slidesPerView: slidesPerViewPrices(),
        spaceBetween: 32,
        updateOnWindowResize: true
      });
    } else {
      swiper.destroy(false, false);
      swiper.disable();
    }
  }
};

window.addEventListener('resize', resizePrices); //top-services section btn-more-info

var btnMoreInfoTopServices = document.querySelector('.text-box__uncover-button');
var textBoxTopServices = document.querySelector('.text-box__content'); // const btnDivMoreInfo = document.getElementsByClassName('repair-brands__wrapper-more-info')

var buttonStateTopServices = false;

var clickHandlerTopServices = function clickHandlerTopServices() {
  var _btnMoreInfoTopServic = _slicedToArray(btnMoreInfoTopServices.children, 2),
      arrows = _btnMoreInfoTopServic[0],
      text = _btnMoreInfoTopServic[1];

  console.log('click handler');

  var toggle = function toggle(state) {
    if (!state) {
      text.innerHTML = 'Скрыть';
      arrows.style.transform = 'rotate(180deg)';
      textBoxTopServices.style.height = '160px';
    } else {
      text.innerHTML = 'Показать все';
      arrows.style.transform = 'rotate(0)';
      textBoxTopServices.style.height = '112px';
    }

    buttonStateTopServices = !buttonStateTopServices;
  };

  toggle(buttonStateTopServices);
};

btnMoreInfoTopServices.addEventListener('click', clickHandlerTopServices);

/***/ }),

/***/ "./js/modals/modals.js":
/*!*****************************!*\
  !*** ./js/modals/modals.js ***!
  \*****************************/
/***/ (() => {

var e = null;
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var getTextAreaEl = function getTextAreaEl() {
  e = document.getElementsByClassName('modal__input--last')[0];
  e.innerHTML = '';
};

var modalCointaier = document.getElementsByClassName('modal-container')[0];

var closeModalContaier = function closeModalContaier(event) {
  if (event.path[0].tagName === 'ASIDE' || event.path[1].classList[0] === 'modal__top__button') {
    modalCointaier.classList.remove('modal-container--visible');
  }
};

modalCointaier.addEventListener('click', closeModalContaier);
var placeOrder = document.getElementsByClassName('place-order')[0];
var placeOrderMobile = document.getElementsByClassName('footer-btn-call')[0];
var mobileMenu = document.getElementsByClassName('aside-menu-container')[0];

var handlePlaceOrderClick = function handlePlaceOrderClick() {
  modalCointaier.classList.add('modal-container--visible');

  if (screenWidth < 1366) {
    mobileMenu.style.display = 'none';
  }

  changeModalHeaderText('placeOrder');
  getTextAreaEl();
};

console.log(placeOrder);
placeOrder.addEventListener('click', handlePlaceOrderClick);
placeOrderMobile.addEventListener('click', handlePlaceOrderClick);
var repairStatus = document.getElementsByClassName('repair-status')[0];
var repairStatusMobile = document.getElementsByClassName('top-menu__checkstatus')[0];

var handleRepairStatusClick = function handleRepairStatusClick() {
  modalCointaier.classList.add('modal-container--visible');

  if (screenWidth < 1366) {
    mobileMenu.style.display = 'none';
  }

  changeModalHeaderText('repairStatus');
  getTextAreaEl();
};

repairStatus.addEventListener('click', handleRepairStatusClick);
repairStatusMobile.addEventListener('click', handleRepairStatusClick);
var modalHeader = document.getElementsByClassName('modal-header__text')[0];

var changeModalHeaderText = function changeModalHeaderText(typeOfModal) {
  var modalInputs = document.getElementsByClassName('modal__input');

  if (String(typeOfModal) === 'placeOrder') {
    modalHeader.innerHTML = 'Обратная связь';

    for (var i = 0; i < modalInputs.length; i++) {
      modalInputs[i].style.display = 'block';
    }
  } else if (String(typeOfModal) === 'repairStatus') {
    modalHeader.innerHTML = "Заказать звонок";

    for (var _i = 0; _i < modalInputs.length; _i++) {
      if (_i !== 1) {
        modalInputs[_i].style.display = 'none';
      }
    }
  } else {
    throw new Error('Invalid Type of Modal');
  }
};

/***/ }),

/***/ "./js/width-fix/width-fix.js":
/*!***********************************!*\
  !*** ./js/width-fix/width-fix.js ***!
  \***********************************/
/***/ (() => {

var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var all = document.getElementsByTagName("*"),
    i = 0,
    rect,
    docWidth = document.documentElement.offsetWidth;

if (screenWidth > 768) {
  for (; i < all.length; i++) {
    var _all$i$getBoundingCli = all[i].getBoundingClientRect(),
        right = _all$i$getBoundingCli.right,
        left = _all$i$getBoundingCli.left;

    if (right > docWidth || left < 0) {
      all[i].style.width = 'auto';
    }
  }
}

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger.svg */ "./img/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/divider.svg */ "./img/divider.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/call.svg */ "./img/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chat.svg */ "./img/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile.svg */ "./img/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/repair.svg */ "./img/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkstatus.svg */ "./img/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/dividerAqua.svg */ "./img/dividerAqua.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrowsSection.svg */ "./img/arrowsSection.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logoCPS.jpg */ "./img/logoCPS.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/lenovo.svg */ "./img/brands-list/lenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/arrowBrandList.svg */ "./img/brands-list/arrowBrandList.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/samsung.svg */ "./img/brands-list/samsung.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/apple.svg */ "./img/brands-list/apple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/viewsonic.svg */ "./img/brands-list/viewsonic.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/bosch.svg */ "./img/brands-list/bosch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/hp.svg */ "./img/brands-list/hp.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/acer.svg */ "./img/brands-list/acer.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands-list/sony.svg */ "./img/brands-list/sony.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/footer/arrowToRight.svg */ "./img/footer/arrowToRight.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\r\n  <title>Lay out 1.6</title>\r\n\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css\" />\r\n\r\n  <script src=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js\"></script>\r\n</head>\r\n\r\n<body>\r\n\r\n  <header class=\"header-layout\">\r\n    <div class=\"top-menu\">\r\n      <div class=\"top-menu__background\">\r\n        <div class=\"top-menu__wrapper\">\r\n          <button class=\"top-menu__burger\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"menu\">\r\n          </button>\r\n          <div class=\"top-menu__divider\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"divider\">\r\n          </div>\r\n          <button class=\"top-menu__logo\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"logo\">\r\n          </button>\r\n\r\n          <button class=\"top-menu__call top-menu--hidden place-order\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"call\">\r\n          </button>\r\n          <button class=\"top-menu__chat top-menu--hidden \">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"chat\">\r\n          </button>\r\n          <button class=\"top-menu__profile top-menu--hidden\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"profile\">\r\n          </button>\r\n          <div class=\"top-menu__divider\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"divider\">\r\n          </div>\r\n          <button class=\"top-menu__repair\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\r\n          </button>\r\n          <button class=\"top-menu__checkstatus\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"checkstatus\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div class=\"main-wrapper\">\r\n    <main class=\"main-content\">\r\n\r\n      <article class=\"top-services\">\r\n\r\n        <div class=\"holder\">\r\n          <div class=\"holder__divider\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"divider aqua\">\r\n          </div>\r\n          <div class=\"holder__text\">\r\n            <h1>Услуги и сервисы</h1>\r\n          </div>\r\n          <div class=\"holder__buttons\">\r\n            <button class=\"holder__button\">\r\n              <div class=\"holder__button-text\">\r\n                <p>Оставить заявку</p>\r\n              </div>\r\n\r\n              <img class=\"holder__button-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Иконка оставить заявку\">\r\n\r\n            </button>\r\n            <button class=\"holder__button\">\r\n              <div class=\"holder__button-text\">\r\n                <p>Статус ремонта</p>\r\n              </div>\r\n\r\n              <img class=\"holder__button-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Иконка статус ремонта\">\r\n\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <ul class=\"scroll-menu\">\r\n          <li class=\"scroll-menu__element \"><button class=\"scroll-menu__element-button\">\r\n              <p>Ремонтируемые\r\n                устройства</p>\r\n            </button></li>\r\n          <li class=\"scroll-menu__element \"><button class=\"scroll-menu__element-button\">\r\n              <p>Цены на услуги</p>\r\n            </button>\r\n          </li>\r\n          <li class=\"scroll-menu__element \"><button class=\"scroll-menu__element-button\">\r\n              <p>Адреса сервесных\r\n                центров</p>\r\n            </button></li>\r\n          <li class=\"scroll-menu__element \"><button class=\"scroll-menu__element-button\">\r\n              <p>Специальные\r\n                цены</p>\r\n            </button></li>\r\n          <li class=\"scroll-menu__element \"><button class=\"scroll-menu__element-button\">\r\n              <p>Отзывы</p>\r\n            </button></li>\r\n          <li class=\"scroll-menu__element \"><button class=\"scroll-menu__element-button\">\r\n              <p>Ремонтируемые\r\n                бренды</p>\r\n            </button>\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"text-box\">\r\n\r\n          <section class=\"text-box__wrapper\">\r\n            <p class=\"text-box__content\">\r\n              Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете\r\n              отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n              <br><br>\r\n              Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает\r\n              большое\r\n              количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою\r\n              очередь, советуют нас родным и близким.\r\n              <br><br>\r\n            </p>\r\n            <button class=\"text-box__uncover-button\">\r\n              <div class=\"text-box__arrows\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Стрелки статьи\">\r\n                </svg>\r\n              </div>\r\n              <div class=\"text-box__uncover-text\">\r\n                <p>Читать далее</p>\r\n\r\n              </div>\r\n            </button>\r\n          </section>\r\n\r\n          <div class=\"text-box__image\">\r\n            <img class=\"text-box__image-content\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Логотип компании\">\r\n          </div>\r\n        </div>\r\n\r\n      </article>\r\n\r\n      <article class=\"repair-brands\">\r\n        <div class=\"repair-brands__header\">\r\n          <h2>РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</h2>\r\n        </div>\r\n\r\n        <div class=\"swiper swiper-repair\">\r\n          <div class=\"swiper-wrapper repair-brands__list\">\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Ленова логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Самсунг логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Эпл логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"Вью соник логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Бош логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Эйч пи логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"Эйсер логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"Сони логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"repair-brands__btn-list-element btn-repair\">\r\n                <div class=\"btn-repair__logo\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Эпл логотип\">\r\n                </div>\r\n                <div class=\"btn-repair__arrow\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              </button></div>\r\n          </div>\r\n\r\n          <div class=\"swiper-pagination swiper-pagination-repair\"></div>\r\n        </div>\r\n\r\n        <div class=\"repair-brands__wrapper-more-info\">\r\n          <button class=\"repair-brands__btn-more-info\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Стрелки вниз\">\r\n            <p>Показать все</p>\r\n          </button>\r\n        </div>\r\n\r\n      </article>\r\n\r\n      <article class=\"gadgets\">\r\n        <div class=\"gadgets__header\">\r\n          <h2>РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ</h2>\r\n        </div>\r\n\r\n        <div class=\"swiper-gadgets\">\r\n          <div class=\"swiper-wrapper swiper-gadgets__list\">\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт ноутбуков</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт телефонов</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт мониторов</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт гарнитуры</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт планшетов</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт клавиатур</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт компьютерных мышек</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт электронных часов</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-gadgets__item\">\r\n                <p>Ремонт умных зеркал</p>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Стрелка влево\">\r\n              </button></div>\r\n          </div>\r\n\r\n          <div class=\"swiper-pagination swiper-pagination-gadgets\"></div>\r\n        </div>\r\n\r\n        <div class=\"gadgets__wrapper-more-info\">\r\n          <button class=\"gadgets__btn-more-info\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Стрелки вниз\">\r\n            <p>Показать все</p>\r\n          </button>\r\n        </div>\r\n\r\n\r\n\r\n      </article>\r\n\r\n      <article class=\"service-price\">\r\n        <div class=\"service-price__header\">\r\n          <h2>ЦЕНЫ НА УСЛУГИ</h2>\r\n        </div>\r\n\r\n        <div class=\"swiper-service-prise\">\r\n          <div class=\"swiper-wrapper swiper-service-prise__list\">\r\n            <div class=\"swiper-slide\"><button class=\"swiper-service-prise__element table\">\r\n                <div class=\"table__repair\">\r\n                  <h3>Ремонтные услуги</h3>\r\n                  <p>Тестирование с выдачей технического заключения</p>\r\n                </div>\r\n\r\n                <div class=\"table__price\">\r\n                  <h3>Цена</h3>\r\n                  <p>Бесплатно</p>\r\n                </div>\r\n\r\n                <div class=\"table__term\">\r\n                  <h3>Срок</h3>\r\n                  <p>30-120 мин</p>\r\n                </div>\r\n\r\n                <div class=\"table__order\">\r\n                  <svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                    <path\r\n                      d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                      fill=\"white\" />\r\n                    <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                      d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                      fill=\"white\" />\r\n                  </svg>\r\n\r\n                </div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-service-prise__element table\">\r\n                <div class=\"table__repair\">\r\n                  <h3>Ремонтные услуги</h3>\r\n                  <p>Замена програмного обеспечения</p>\r\n                </div>\r\n\r\n                <div class=\"table__price\">\r\n                  <h3>Цена</h3>\r\n                  <p>1000₽</p>\r\n                </div>\r\n\r\n                <div class=\"table__term\">\r\n                  <h3>Срок</h3>\r\n                  <p>30-120 мин</p>\r\n                </div>\r\n\r\n                <div class=\"table__order\">\r\n                  <svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                    <path\r\n                      d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                      fill=\"white\" />\r\n                    <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                      d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                      fill=\"white\" />\r\n                  </svg>\r\n\r\n                </div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-service-prise__element table\">\r\n                <div class=\"table__repair\">\r\n                  <h3>Ремонтные услуги</h3>\r\n                  <p>Замена полифонического динамика</p>\r\n                </div>\r\n\r\n                <div class=\"table__price\">\r\n                  <h3>Цена</h3>\r\n                  <p>1000₽</p>\r\n                </div>\r\n\r\n                <div class=\"table__term\">\r\n                  <h3>Срок</h3>\r\n                  <p>30-120 мин</p>\r\n                </div>\r\n\r\n                <div class=\"table__order\">\r\n                  <svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                    <path\r\n                      d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                      fill=\"white\" />\r\n                    <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                      d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                      fill=\"white\" />\r\n                  </svg>\r\n\r\n                </div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-service-prise__element table\">\r\n                <div class=\"table__repair\">\r\n                  <h3>Ремонтные услуги</h3>\r\n                  <p>Замена дисплея</p>\r\n                </div>\r\n\r\n                <div class=\"table__price\">\r\n                  <h3>Цена</h3>\r\n                  <p>1000₽</p>\r\n                </div>\r\n\r\n                <div class=\"table__term\">\r\n                  <h3>Срок</h3>\r\n                  <p>30-120 мин</p>\r\n                </div>\r\n\r\n                <div class=\"table__order\">\r\n                  <svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                    <path\r\n                      d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                      fill=\"white\" />\r\n                    <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                      d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                      fill=\"white\" />\r\n                  </svg>\r\n\r\n                </div>\r\n              </button></div>\r\n            <div class=\"swiper-slide\"><button class=\"swiper-service-prise__element table\">\r\n                <div class=\"table__repair\">\r\n                  <h3>Ремонтные услуги</h3>\r\n                  <p>Диагностика</p>\r\n                </div>\r\n\r\n                <div class=\"table__price\">\r\n                  <h3>Цена</h3>\r\n                  <p>1000₽</p>\r\n                </div>\r\n\r\n                <div class=\"table__term\">\r\n                  <h3>Срок</h3>\r\n                  <p>30-120 мин</p>\r\n                </div>\r\n\r\n                <div class=\"table__order\">\r\n                  <svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                    <path\r\n                      d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                      fill=\"white\" />\r\n                    <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                      d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                      fill=\"white\" />\r\n                  </svg>\r\n\r\n                </div>\r\n              </button></div>\r\n          </div>\r\n\r\n          <div class=\"swiper-pagination swiper-pagination-service-price\"></div>\r\n        </div>\r\n\r\n        <div class=\"service-prise-table\">\r\n          <div class=\"service-prise-table__header-wrapper\">\r\n            <div class=\"service-prise-table__services-repair\">\r\n              <h3>Ремонтные услуги</h3>\r\n            </div>\r\n            <div class=\"service-prise-table__price\">\r\n              <h3>Цена</h3>\r\n            </div>\r\n            <div class=\"service-prise-table__term\">\r\n              <h3>Срок</h3>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"service-price-table__main-content service-price-main\">\r\n            <div class=\"service-price-main__content-wrapper\">\r\n              <p>Диагностика</p>\r\n              <p>1 000 ₽</p>\r\n              <p>30 мин</p>\r\n              <button><svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                  <path\r\n                    d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                    fill=\"white\" />\r\n                  <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                    d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                    fill=\"white\" />\r\n                </svg></button>\r\n\r\n            </div>\r\n            <div class=\"service-price-main__content-wrapper\">\r\n              <p>Замена дисплея</p>\r\n              <p>1 000 ₽</p>\r\n              <p>30-120 мин</p>\r\n              <button><svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                  <path\r\n                    d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                    fill=\"white\" />\r\n                  <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                    d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                    fill=\"white\" />\r\n                </svg></button>\r\n\r\n            </div>\r\n            <div class=\"service-price-main__content-wrapper\">\r\n              <p>Замена полифонического динамика</p>\r\n              <p>1 000 ₽</p>\r\n              <p>30-120 мин</p>\r\n              <button><svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                  <path\r\n                    d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                    fill=\"white\" />\r\n                  <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                    d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                    fill=\"white\" />\r\n                </svg></button>\r\n\r\n            </div>\r\n            <div class=\"service-price-main__content-wrapper\">\r\n              <p>Тестирование с выдачей технического заключения</p>\r\n              <p>Бесплатно</p>\r\n              <p>30-120 мин</p>\r\n              <button><svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                  <path\r\n                    d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                    fill=\"white\" />\r\n                  <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                    d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                    fill=\"white\" />\r\n                </svg></button>\r\n\r\n            </div>\r\n            <div class=\"service-price-main__content-wrapper\">\r\n              <p>Замена программного обеспечения</p>\r\n              <p>1 000 ₽</p>\r\n              <p>30-120 мин</p>\r\n              <button><svg width=\"119\" height=\"32\" viewBox=\"0 0 119 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <rect width=\"119\" height=\"32\" rx=\"16\" fill=\"#FF3E79\" />\r\n                  <path\r\n                    d=\"M20.0027 14.24C20.0027 14.528 19.9467 14.76 19.8347 14.936C19.7227 15.104 19.5987 15.236 19.4627 15.332C19.3027 15.444 19.1227 15.52 18.9227 15.56V15.68C19.1467 15.728 19.3467 15.816 19.5227 15.944C19.6747 16.056 19.8107 16.216 19.9307 16.424C20.0587 16.624 20.1227 16.896 20.1227 17.24V18.02C20.1227 19.42 19.4227 20.12 18.0227 20.12H14.7227C13.3227 20.12 12.6227 19.42 12.6227 18.02V17.42C12.6227 17.22 12.7227 17.12 12.9227 17.12H14.2427C14.4427 17.12 14.5427 17.22 14.5427 17.42V17.78C14.5427 18.22 14.7627 18.44 15.2027 18.44H17.5427C17.9827 18.44 18.2027 18.22 18.2027 17.78V17.24C18.2027 16.8 17.9827 16.58 17.5427 16.58H15.8027C15.6027 16.58 15.5027 16.48 15.5027 16.28V15.2C15.5027 15 15.6027 14.9 15.8027 14.9H17.4227C17.8627 14.9 18.0827 14.68 18.0827 14.24V13.82C18.0827 13.38 17.8627 13.16 17.4227 13.16H15.3227C14.8827 13.16 14.6627 13.38 14.6627 13.82V14.18C14.6627 14.38 14.5627 14.48 14.3627 14.48H13.0427C12.8427 14.48 12.7427 14.38 12.7427 14.18V13.58C12.7427 12.18 13.4427 11.48 14.8427 11.48H17.9027C19.3027 11.48 20.0027 12.18 20.0027 13.58V14.24ZM23.4929 18.26L22.9529 19.7C22.9129 19.788 22.8609 19.86 22.7969 19.916C22.7409 19.972 22.6529 20 22.5329 20H21.0329C20.8329 20 20.7729 19.9 20.8529 19.7L23.7929 11.9C23.8729 11.7 24.0329 11.6 24.2729 11.6H26.0129C26.1329 11.6 26.2209 11.628 26.2769 11.684C26.3409 11.74 26.3929 11.812 26.4329 11.9L29.3729 19.7C29.4529 19.9 29.3929 20 29.1929 20H27.6929C27.5729 20 27.4809 19.972 27.4169 19.916C27.3609 19.86 27.3129 19.788 27.2729 19.7L26.7329 18.26H23.4929ZM26.1329 16.58L25.1729 14H25.0529L24.0929 16.58H26.1329ZM32.2628 14.78H33.8828L35.4428 11.9C35.4908 11.812 35.5508 11.74 35.6228 11.684C35.7028 11.628 35.8028 11.6 35.9228 11.6H37.4228C37.5108 11.6 37.5748 11.628 37.6148 11.684C37.6548 11.74 37.6508 11.812 37.6028 11.9L35.5628 15.56L37.8428 19.7C37.8908 19.788 37.8948 19.86 37.8548 19.916C37.8148 19.972 37.7508 20 37.6628 20H36.1628C36.0428 20 35.9428 19.972 35.8628 19.916C35.7908 19.86 35.7308 19.788 35.6828 19.7L33.9428 16.46H32.2628V19.7C32.2628 19.9 32.1628 20 31.9628 20H30.6428C30.4428 20 30.3428 19.9 30.3428 19.7V11.9C30.3428 11.7 30.4428 11.6 30.6428 11.6H31.9628C32.1628 11.6 32.2628 11.7 32.2628 11.9V14.78ZM40.6538 18.26L40.1138 19.7C40.0738 19.788 40.0218 19.86 39.9578 19.916C39.9018 19.972 39.8138 20 39.6938 20H38.1938C37.9938 20 37.9338 19.9 38.0138 19.7L40.9538 11.9C41.0338 11.7 41.1938 11.6 41.4338 11.6H43.1738C43.2938 11.6 43.3818 11.628 43.4378 11.684C43.5018 11.74 43.5538 11.812 43.5938 11.9L46.5338 19.7C46.6138 19.9 46.5538 20 46.3538 20H44.8538C44.7338 20 44.6418 19.972 44.5778 19.916C44.5218 19.86 44.4738 19.788 44.4338 19.7L43.8938 18.26H40.6538ZM43.2938 16.58L42.3338 14H42.2138L41.2538 16.58H43.2938ZM54.5238 14.24C54.5238 14.528 54.4678 14.76 54.3558 14.936C54.2438 15.104 54.1198 15.236 53.9838 15.332C53.8238 15.444 53.6438 15.52 53.4438 15.56V15.68C53.6678 15.728 53.8678 15.816 54.0438 15.944C54.1958 16.056 54.3318 16.216 54.4518 16.424C54.5798 16.624 54.6438 16.896 54.6438 17.24V18.02C54.6438 19.42 53.9438 20.12 52.5438 20.12H49.2438C47.8438 20.12 47.1438 19.42 47.1438 18.02V17.42C47.1438 17.22 47.2438 17.12 47.4438 17.12H48.7638C48.9638 17.12 49.0638 17.22 49.0638 17.42V17.78C49.0638 18.22 49.2838 18.44 49.7238 18.44H52.0638C52.5038 18.44 52.7238 18.22 52.7238 17.78V17.24C52.7238 16.8 52.5038 16.58 52.0638 16.58H50.3238C50.1238 16.58 50.0238 16.48 50.0238 16.28V15.2C50.0238 15 50.1238 14.9 50.3238 14.9H51.9438C52.3838 14.9 52.6038 14.68 52.6038 14.24V13.82C52.6038 13.38 52.3838 13.16 51.9438 13.16H49.8438C49.4038 13.16 49.1838 13.38 49.1838 13.82V14.18C49.1838 14.38 49.0838 14.48 48.8838 14.48H47.5638C47.3638 14.48 47.2638 14.38 47.2638 14.18V13.58C47.2638 12.18 47.9638 11.48 49.3638 11.48H52.4238C53.8238 11.48 54.5238 12.18 54.5238 13.58V14.24ZM58.014 18.26L57.474 19.7C57.434 19.788 57.382 19.86 57.318 19.916C57.262 19.972 57.174 20 57.054 20H55.554C55.354 20 55.294 19.9 55.374 19.7L58.314 11.9C58.394 11.7 58.554 11.6 58.794 11.6H60.534C60.654 11.6 60.742 11.628 60.798 11.684C60.862 11.74 60.914 11.812 60.954 11.9L63.894 19.7C63.974 19.9 63.914 20 63.714 20H62.214C62.094 20 62.002 19.972 61.938 19.916C61.882 19.86 61.834 19.788 61.794 19.7L61.254 18.26H58.014ZM60.654 16.58L59.694 14H59.574L58.614 16.58H60.654ZM67.4486 19.7C67.4486 19.9 67.3486 20 67.1486 20H65.8286C65.6286 20 65.5286 19.9 65.5286 19.7V13.28H63.1286C62.9286 13.28 62.8286 13.18 62.8286 12.98V11.9C62.8286 11.7 62.9286 11.6 63.1286 11.6H69.8486C70.0486 11.6 70.1486 11.7 70.1486 11.9V12.98C70.1486 13.18 70.0486 13.28 69.8486 13.28H67.4486V19.7ZM76.1772 14.12C77.5772 14.12 78.2772 14.82 78.2772 16.22V17.9C78.2772 19.3 77.5772 20 76.1772 20H71.3772C71.1772 20 71.0772 19.9 71.0772 19.7V11.9C71.0772 11.7 71.1772 11.6 71.3772 11.6H72.6972C72.8972 11.6 72.9972 11.7 72.9972 11.9V14.12H76.1772ZM75.6972 18.32C76.1372 18.32 76.3572 18.1 76.3572 17.66V16.46C76.3572 16.02 76.1372 15.8 75.6972 15.8H72.9972V18.32H75.6972Z\"\r\n                    fill=\"white\" />\r\n                  <rect x=\"87\" y=\"4\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                    d=\"M99.8 15.9999L96.7916 13.229C96.3641 12.8353 96.3611 12.1614 96.7851 11.7639L96.9203 11.6372C97.3032 11.2782 97.8985 11.2763 98.2836 11.6329L102.938 15.9426C102.971 15.9735 102.971 16.0263 102.938 16.0572L98.3467 20.3085C97.9261 20.698 97.2758 20.696 96.8576 20.3039C96.3945 19.8697 96.3977 19.1336 96.8646 18.7036L99.8 15.9999Z\"\r\n                    fill=\"white\" />\r\n                </svg></button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </article>\r\n    </main>\r\n\r\n    <footer class=\"footer-layout\">\r\n\r\n      <section class=\"footer-top-section\">\r\n        <p>Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого\r\n          предложения на постоянное обслуживание, оставьте заявку.</p>\r\n        <button class=\"footer-top-section__button\">\r\n          <p>Получить коммерческое предложение <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"Стрелка вправо\"></p>\r\n\r\n        </button>\r\n      </section>\r\n\r\n      <section class=\"footer-bottom-section\">\r\n        <div class=\"footer-bottom-section__info\">\r\n          <p>© 2019 CPS <br>Разработано командой Apesong </p>\r\n        </div>\r\n        <div class=\"footer-bottom-section__politice\">\r\n          <p>Политика конфиденциальности</p>\r\n        </div>\r\n        <div class=\"footer-bottom-section__offer\">\r\n          <p>Информация, размещенная на данной странице, не является публичной офертой</p>\r\n        </div>\r\n\r\n      </section>\r\n    </footer>\r\n  </div>\r\n\r\n\r\n  <aside class=\"modal-container\">\r\n    <div class=\"modal\">\r\n      <div class=\"modal__top\">\r\n        <svg class=\"modal__top__button\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\"\r\n          xmlns=\"http://www.w3.org/2000/svg\">\r\n          <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n            d=\"M13.7935 12.2571C13.403 11.8666 12.7698 11.8666 12.3793 12.2571L12.2571 12.3793C11.8666 12.7698 11.8666 13.403 12.2571 13.7935L18.4636 20L12.2571 26.2065C11.8666 26.597 11.8666 27.2302 12.2571 27.6207L12.3793 27.7429C12.7698 28.1334 13.403 28.1334 13.7935 27.7429L20 21.5364L26.2065 27.7429C26.597 28.1334 27.2302 28.1334 27.6207 27.7429L27.7429 27.6207C28.1334 27.2302 28.1334 26.597 27.7429 26.2065L21.5364 20L27.7429 13.7935C28.1334 13.403 28.1334 12.7698 27.7429 12.3793L27.6207 12.2571C27.2302 11.8666 26.597 11.8666 26.2065 12.2571L20 18.4636L13.7935 12.2571Z\"\r\n            fill=\"white\" />\r\n        </svg>\r\n        <header class=\"modal-header\">\r\n          <svg class=\"modal-header__accent\" width=\"4\" height=\"40\" viewBox=\"0 0 4 40\" fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n              d=\"M4 4C4 1.79086 2.20914 0 0 0V40C2.20914 40 4 38.2091 4 36V4Z\" fill=\"#41F6D7\" />\r\n          </svg>\r\n          <h2 class=\"modal-header__text\">Обратная связь</h2>\r\n        </header>\r\n      </div>\r\n      <form>\r\n        <!-- <label for=\"name\">Имя</label> -->\r\n        <input type=\"text\" name=\"name\" placeholder=\"Имя\" class=\"modal__input\">\r\n        <!-- <label for=\"phone\">Телефон</label> -->\r\n        <input type=\"text\" name=\"phone\" placeholder=\"Телефон\" class=\"modal__input\">\r\n        <!-- <label for=\"email\">Электронная почта</label> -->\r\n        <input type=\"text\" name=\"email\" placeholder=\"Электронная почта\" class=\"modal__input\">\r\n        <!-- <label for=\"message\">Сообщение</label> -->\r\n        <textarea type=\"text\" name=\"message\" placeholder=\"Сообщение\" class=\"modal__input modal__input--last\">\r\n      </form>\r\n      <p class=\"modal__description\">Нажимая “отправить”, вы даете согласие на <a class=\"modal__description--highlight\">обработку персональных данных</a> и соглашаетесь с нашей <a class=\"modal__description--highlight\">политикой конфиденциальности</a></p>\r\n      <button class=\"modal__button\">\r\n        <p>отправить</p>\r\n        <svg width=\"28\" height=\"24\" viewBox=\"0 0 28 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <rect x=\"0.428589\" width=\"27.4286\" height=\"24\" rx=\"12\" fill=\"#FF3E79\"/>\r\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.0572 11.9999L11.6719 9.27169C11.178 8.87364 11.1747 8.12223 11.6652 7.71992L11.9126 7.51698C12.2795 7.21596 12.8075 7.21436 13.1763 7.51313L18.6223 11.9254C18.6697 11.9638 18.6697 12.0361 18.6223 12.0745L13.2754 16.4064C12.8489 16.752 12.2383 16.7501 11.8139 16.402C11.2468 15.9367 11.2505 15.0678 11.8217 14.6074L15.0572 11.9999Z\" fill=\"white\"/>\r\n        </svg>          \r\n      </button>\r\n    </div>\r\n  </aside>\r\n\r\n  <aside class=\"aside-menu-container\">\r\n    <div class=\"aside-menu\">\r\n      <div class=\"header-menu\">\r\n        <div class=\"box-one\">\r\n            <button class=\"box-one__icon button button--hover\">\r\n                <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M13.7935 12.2571C13.403 11.8666 12.7698 11.8666 12.3793 12.2571L12.2571 12.3793C11.8666 12.7698 11.8666 13.403 12.2571 13.7935L18.4636 20L12.2571 26.2065C11.8666 26.597 11.8666 27.2302 12.2571 27.6207L12.3793 27.7429C12.7698 28.1334 13.403 28.1334 13.7935 27.7429L20 21.5364L26.2065 27.7429C26.597 28.1334 27.2302 28.1334 27.6207 27.7429L27.7429 27.6207C28.1334 27.2302 28.1334 26.597 27.7429 26.2065L21.5364 20L27.7429 13.7935C28.1334 13.403 28.1334 12.7698 27.7429 12.3793L27.6207 12.2571C27.2302 11.8666 26.597 11.8666 26.2065 12.2571L20 18.4636L13.7935 12.2571Z\"\r\n                        fill=\"white\" />\r\n                </svg>\r\n\r\n            </button>\r\n            <div class=\"box-one__logo\">\r\n                <svg width=\"98\" height=\"52\" viewBox=\"0 0 98 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M36.5703 0.726074C36.018 0.726074 35.5703 1.17379 35.5703 1.72607V6.00103C35.5703 6.55331 36.018 7.00103 36.5703 7.00103H72.8973C83.0242 7.00103 90.9777 14.7977 90.9777 24.8905C90.9777 25.1761 91.2092 25.4076 91.4948 25.4076H96.757C97.0425 25.4076 97.274 25.1761 97.274 24.8905C97.274 11.4012 86.432 0.726074 72.8973 0.726074H36.5703Z\"\r\n                        fill=\"#6B7B84\" stroke=\"#80949F\" stroke-width=\"0.5\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M7.10658 25.846C7.10658 25.6039 6.91035 25.4077 6.66829 25.4077H1.16412C0.922059 25.4077 0.72583 25.6039 0.72583 25.846C0.72583 39.4954 10.9491 50.7649 24.1685 51.5024L66.5101 51.5402C67.0628 51.5406 67.511 51.0928 67.511 50.5402V45.9605C67.511 45.4083 67.0633 44.9605 66.511 44.9605H25.6263C15.3901 44.9322 7.10658 36.4168 7.10658 25.846Z\"\r\n                        fill=\"#6B7B84\" stroke=\"#80949F\" stroke-width=\"0.5\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M28.1413 39.9262C30.8801 39.9262 33.1614 39.3941 35.4147 38.2993L35.5702 38.1537V30.3193L34.7271 31.3987C33.1046 33.1716 30.9257 34.1475 28.4606 34.1475C23.869 34.1475 19.2573 31.1796 19.2573 25.5076C19.2573 21.2212 22.4379 16.6658 28.2991 16.6658C29.4686 16.6658 32.3128 16.9423 34.7229 19.5018L35.5702 20.5455V12.7465L35.4215 12.5991C33.1256 11.4485 30.7841 10.8892 28.1134 10.8892C23.5465 10.8892 19.9818 12.0915 17.1436 14.5627C15.3433 16.1115 12.3406 19.5823 12.3406 25.4261C12.3406 29.7468 13.8791 33.1213 17.1666 36.0482C20.225 38.73 23.616 39.9262 28.1413 39.9262Z\"\r\n                        fill=\"#6B7B84\" />\r\n                    <path\r\n                        d=\"M28.1413 39.9262C30.8801 39.9262 33.1614 39.3941 35.4147 38.2993L35.5702 38.1537V30.3193L34.7271 31.3987C33.1046 33.1716 30.9257 34.1475 28.4606 34.1475C23.869 34.1475 19.2573 31.1796 19.2573 25.5076C19.2573 21.2212 22.4379 16.6658 28.2991 16.6658C29.4686 16.6658 32.3128 16.9423 34.7229 19.5018L35.5702 20.5455V12.7465L35.4215 12.5991C33.1256 11.4485 30.7841 10.8892 28.1134 10.8892C23.5465 10.8892 19.9818 12.0915 17.1436 14.5627C15.3433 16.1115 12.3406 19.5823 12.3406 25.4261C12.3406 29.7468 13.8791 33.1213 17.1666 36.0482C20.225 38.73 23.616 39.9262 28.1413 39.9262\"\r\n                        stroke=\"#80949F\" stroke-width=\"0.5\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M47.911 17.4225H49.2753C50.5268 17.4225 51.9532 17.4908 53.0327 18.2266C53.5599 18.6032 54.4444 19.4749 54.4444 21.0582C54.4444 22.2283 53.9273 23.2774 53.0732 23.932C51.9782 24.7269 50.6767 24.6813 49.6308 24.6813H47.911V17.4225ZM50.9767 29.9516C54.2081 29.9516 56.7375 29.0196 58.494 27.2636C60.6547 25.1073 60.9777 22.1411 60.9777 20.5773C60.9777 18.904 60.5811 15.6404 57.9209 13.2773C55.7405 11.3666 53.414 10.8892 50.1322 10.8892H41.3777V39.9262H48.0363V29.9516H50.9767Z\"\r\n                        fill=\"#6B7B84\" />\r\n                    <path\r\n                        d=\"M47.911 17.4225V17.1725H47.661V17.4225H47.911ZM53.0327 18.2266L53.1781 18.0232L53.1735 18.0201L53.0327 18.2266ZM53.0732 23.932L53.2201 24.1344L53.2253 24.1304L53.0732 23.932ZM47.911 24.6813H47.661V24.9313H47.911V24.6813ZM58.494 27.2636L58.3174 27.0867L58.3173 27.0868L58.494 27.2636ZM57.9209 13.2773L58.087 13.0904L58.0857 13.0893L57.9209 13.2773ZM41.3777 10.8892V10.6392H41.1277V10.8892H41.3777ZM41.3777 39.9262H41.1277V40.1762H41.3777V39.9262ZM48.0363 39.9262V40.1762H48.2863V39.9262H48.0363ZM48.0363 29.9516V29.7016H47.7863V29.9516H48.0363ZM47.911 17.6725H49.2753V17.1725H47.911V17.6725ZM49.2753 17.6725C50.5325 17.6725 51.8837 17.746 52.8919 18.4332L53.1735 18.0201C52.0226 17.2355 50.5211 17.1725 49.2753 17.1725V17.6725ZM52.8874 18.4301C53.375 18.7784 54.1944 19.5832 54.1944 21.0582H54.6944C54.6944 19.3666 53.7447 18.428 53.178 18.0232L52.8874 18.4301ZM54.1944 21.0582C54.1944 22.1542 53.7106 23.1285 52.9211 23.7336L53.2253 24.1304C54.144 23.4263 54.6944 22.3023 54.6944 21.0582H54.1944ZM52.9264 23.7297C51.909 24.4682 50.697 24.4313 49.6308 24.4313V24.9313C50.6563 24.9313 52.0474 24.9855 53.2201 24.1343L52.9264 23.7297ZM49.6308 24.4313H47.911V24.9313H49.6308V24.4313ZM48.161 24.6813V17.4225H47.661V24.6813H48.161ZM50.9767 30.2016C54.2566 30.2016 56.8561 29.2545 58.6708 27.4404L58.3173 27.0868C56.6189 28.7847 54.1597 29.7016 50.9767 29.7016V30.2016ZM58.6706 27.4406C60.9027 25.2131 61.2277 22.1625 61.2277 20.5773H60.7277C60.7277 22.1197 60.4068 25.0016 58.3174 27.0867L58.6706 27.4406ZM61.2277 20.5773C61.2277 18.876 60.826 15.5236 58.087 13.0904L57.7549 13.4642C60.3361 15.7571 60.7277 18.9321 60.7277 20.5773H61.2277ZM58.0857 13.0893C55.8398 11.1212 53.4415 10.6392 50.1322 10.6392V11.1392C53.3865 11.1392 55.6412 11.612 57.7562 13.4653L58.0857 13.0893ZM50.1322 10.6392H41.3777V11.1392H50.1322V10.6392ZM41.1277 10.8892V39.9262H41.6277V10.8892H41.1277ZM41.3777 40.1762H48.0363V39.6762H41.3777V40.1762ZM48.2863 39.9262V29.9516H47.7863V39.9262H48.2863ZM48.0363 30.2016H50.9767V29.7016H48.0363V30.2016Z\"\r\n                        fill=\"#80949F\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M80.9528 24.6025C79.5051 23.3198 77.4843 22.5763 75.1908 21.8051C73.5567 21.2364 72.6563 20.9232 72.056 20.3759C71.5822 19.9737 71.371 19.5371 71.371 18.96C71.371 17.696 72.2299 16.3451 74.6412 16.3451C76.2799 16.3451 77.6519 17.0458 78.7194 18.4268L79.1432 18.9752L82.6595 14.4994L82.3389 14.1783C80.1884 12.0262 77.3546 10.8892 74.1437 10.8892C67.6654 10.8892 64.7655 15.1037 64.7655 19.2806C64.7655 21.522 65.5649 23.3298 67.1364 24.6513C68.5434 25.8572 70.2593 26.5329 71.9052 27.0845L72.0912 27.1461C73.5528 27.6292 75.0643 28.1292 75.9671 28.9372C76.5952 29.5143 76.8751 30.1414 76.8751 30.9705C76.8751 32.8706 75.3788 34.1475 73.1518 34.1475C71.3914 34.1475 69.0733 33.2846 67.8469 30.8634L67.5261 30.2291L63.1555 34.2748L63.4133 34.6394C64.8077 36.6138 67.9542 39.9262 73.3591 39.9262C79.3188 39.9262 83.4814 36.0946 83.4814 30.6089C83.4814 27.4712 82.1049 25.609 80.9528 24.6025Z\"\r\n                        fill=\"#6B7B84\" />\r\n                    <path\r\n                        d=\"M80.9528 24.6025C79.5051 23.3198 77.4843 22.5763 75.1908 21.8051C73.5567 21.2364 72.6563 20.9232 72.056 20.3759C71.5822 19.9737 71.371 19.5371 71.371 18.96C71.371 17.696 72.2299 16.3451 74.6412 16.3451C76.2799 16.3451 77.6519 17.0458 78.7194 18.4268L79.1432 18.9752L82.6595 14.4994L82.3389 14.1783C80.1884 12.0262 77.3546 10.8892 74.1437 10.8892C67.6654 10.8892 64.7655 15.1037 64.7655 19.2806C64.7655 21.522 65.5649 23.3298 67.1364 24.6513C68.5434 25.8572 70.2593 26.5329 71.9052 27.0845L72.0912 27.1461C73.5528 27.6292 75.0643 28.1292 75.9671 28.9372C76.5952 29.5143 76.8751 30.1414 76.8751 30.9705C76.8751 32.8706 75.3788 34.1475 73.1518 34.1475C71.3914 34.1475 69.0733 33.2846 67.8469 30.8634L67.5261 30.2291L63.1555 34.2748L63.4133 34.6394C64.8077 36.6138 67.9542 39.9262 73.3591 39.9262C79.3188 39.9262 83.4814 36.0946 83.4814 30.6089C83.4814 27.4712 82.1049 25.609 80.9528 24.6025\"\r\n                        stroke=\"#80949F\" stroke-width=\"0.5\" />\r\n                </svg>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"box-two\">\r\n            <button class=\"box-two__icon button button--hover\">\r\n                <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M23.5006 22.0006H22.7106L22.4306 21.7306C23.6306 20.3306 24.2506 18.4206 23.9106 16.3906C23.4406 13.6106 21.1206 11.3906 18.3206 11.0506C14.0906 10.5306 10.5306 14.0906 11.0506 18.3206C11.3906 21.1206 13.6106 23.4406 16.3906 23.9106C18.4206 24.2506 20.3306 23.6306 21.7306 22.4306L22.0006 22.7106V23.5006L26.2606 27.7506C26.6706 28.1606 27.3306 28.1606 27.7406 27.7506L27.7506 27.7406C28.1606 27.3306 28.1606 26.6706 27.7506 26.2606L23.5006 22.0006ZM17.5006 22.0006C15.0106 22.0006 13.0006 19.9906 13.0006 17.5006C13.0006 15.0106 15.0106 13.0006 17.5006 13.0006C19.9906 13.0006 22.0006 15.0106 22.0006 17.5006C22.0006 19.9906 19.9906 22.0006 17.5006 22.0006Z\"\r\n                        fill=\"white\" />\r\n                </svg>\r\n\r\n            </button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <nav class=\"main-menu\">\r\n        <div class=\"divider\">\r\n            <svg width=\"4\" height=\"32\" viewBox=\"0 0 4 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                    d=\"M4 4C4 1.79086 2.20914 0 0 0V32C2.20914 32 4 30.2091 4 28V4Z\" fill=\"#41F6D7\" />\r\n            </svg>\r\n\r\n        </div>\r\n        <ul class=\"main-menu\">\r\n            <li>\r\n            </li>\r\n            <div class=\"main-menu__element main-menu__element--check\">\r\n                <button class=\"main-menu__button\">\r\n                    <p class=\"button-selected\">Ремонт техники</p>\r\n                </button>\r\n            </div>\r\n            <li>\r\n                <div class=\"main-menu__element\">\r\n                    <button class=\"main-menu__button\">\r\n                        <p>Услуги и сервисы</p>\r\n                    </button>\r\n                </div>\r\n            </li>\r\n            <div class=\"main-menu__element\">\r\n                <button class=\"main-menu__button\">\r\n                    <p>Корпоративным клиентам</p>\r\n                </button>\r\n            </div>\r\n            <li>\r\n                <div class=\"main-menu__element\">\r\n                    <button class=\"main-menu__button\">\r\n                        <p>Продавцам техники</p>\r\n                    </button>\r\n                </div>\r\n            </li>\r\n            <div class=\"main-menu__element\">\r\n                <button class=\"main-menu__button\">\r\n                    <p>Партнерам</p>\r\n                </button>\r\n            </div>\r\n            <li>\r\n                <div class=\"main-menu__element\">\r\n                    <button class=\"main-menu__button\">\r\n                        <p>Производителям</p>\r\n                    </button>\r\n                </div>\r\n            </li>\r\n            <div class=\"main-menu__element\">\r\n                <button class=\"main-menu__button\">\r\n                    <p>Наши сервисные центры</p>\r\n                </button>\r\n            </div>\r\n            <li>\r\n                <div class=\"main-menu__element\">\r\n                    <button class=\"main-menu__button\">\r\n                        <p>Контакты</p>\r\n                    </button>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n\r\n    <div class=\"footer\">\r\n        <div class=\"footer__icons\">\r\n            <button class=\"footer__icon footer-btn-call button button--hover\">\r\n                <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M12.7602 23.25L15.3002 22.96C15.9102 22.89 16.5102 23.1 16.9402 23.53L18.7802 25.37C21.6102 23.93 23.9302 21.62 25.3702 18.78L23.5202 16.93C23.0902 16.5 22.8802 15.9 22.9502 15.29L23.2402 12.77C23.3602 11.76 24.2102 11 25.2302 11H26.9602C28.0902 11 29.0302 11.94 28.9602 13.07C28.4302 21.61 21.6002 28.43 13.0702 28.96C11.9402 29.03 11.0002 28.09 11.0002 26.96V25.23C10.9902 24.22 11.7502 23.37 12.7602 23.25Z\"\r\n                        fill=\"white\" />\r\n                </svg>\r\n\r\n            </button>\r\n            <button class=\"footer__icon repair-status button button--hover\">\r\n                <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M28 11H12C10.9 11 10.01 11.9 10.01 13L10 31L14 26H28C29.1 26 30 25.1 30 24V13C30 11.9 29.1 11 28 11ZM21 22H15C14.45 22 14 21.55 14 21C14 20.45 14.45 20 15 20H21C21.55 20 22 20.45 22 21C22 21.55 21.55 22 21 22ZM25 17H15C14.45 17 14 16.55 14 16C14 15.45 14.45 15 15 15H25C25.55 15 26 15.45 26 16C26 16.55 25.55 17 25 17Z\"\r\n                        fill=\"white\" />\r\n                    <mask id=\"mask0_0_2408\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"11\"\r\n                        width=\"20\" height=\"20\">\r\n                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                            d=\"M28 11H12C10.9 11 10.01 11.9 10.01 13L10 31L14 26H28C29.1 26 30 25.1 30 24V13C30 11.9 29.1 11 28 11ZM21 22H15C14.45 22 14 21.55 14 21C14 20.45 14.45 20 15 20H21C21.55 20 22 20.45 22 21C22 21.55 21.55 22 21 22ZM25 17H15C14.45 17 14 16.55 14 16C14 15.45 14.45 15 15 15H25C25.55 15 26 15.45 26 16C26 16.55 25.55 17 25 17Z\"\r\n                            fill=\"white\" />\r\n                    </mask>\r\n                    <g mask=\"url(#mask0_0_2408)\">\r\n                    </g>\r\n                </svg>\r\n\r\n            </button>\r\n            <button class=\"footer__icon button button--hover\">\r\n                <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                    <path\r\n                        d=\"M20.5 19C22.9853 19 25 16.9853 25 14.5C25 12.0147 22.9853 10 20.5 10C18.0147 10 16 12.0147 16 14.5C16 16.9853 18.0147 19 20.5 19Z\"\r\n                        fill=\"white\" />\r\n                    <path\r\n                        d=\"M10.0166 26.6118C9.88693 27.3412 10.5352 28 11.339 28H28.6604C29.4902 28 30.1125 27.3412 29.9829 26.6118C29.2309 22.4 25.0561 20 19.9997 20C14.9433 20 10.7686 22.4 10.0166 26.6118Z\"\r\n                        fill=\"white\" />\r\n                </svg>\r\n\r\n            </button>\r\n        </div>\r\n        <div class=\"footer__email\">\r\n            <a href=\"\">mail@cps.com</a>\r\n        </div>\r\n        <div class=\"footer__number\">\r\n            <a href=\"\">8 800 890 8900</a>\r\n        </div>\r\n        <div class=\"footer__languages\">\r\n            <button>RU</button>\r\n            <button>EN</button>\r\n            <button>CH</button>\r\n        </div>\r\n    </div>\r\n\r\n    </div>\r\n\r\n  </aside>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/arrowsSection.svg":
/*!*******************************!*\
  !*** ./img/arrowsSection.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/arrowsSection.svg";

/***/ }),

/***/ "./img/brands-list/acer.svg":
/*!**********************************!*\
  !*** ./img/brands-list/acer.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/acer.svg";

/***/ }),

/***/ "./img/brands-list/apple.svg":
/*!***********************************!*\
  !*** ./img/brands-list/apple.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/apple.svg";

/***/ }),

/***/ "./img/brands-list/arrowBrandList.svg":
/*!********************************************!*\
  !*** ./img/brands-list/arrowBrandList.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/arrowBrandList.svg";

/***/ }),

/***/ "./img/brands-list/bosch.svg":
/*!***********************************!*\
  !*** ./img/brands-list/bosch.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosch.svg";

/***/ }),

/***/ "./img/brands-list/hp.svg":
/*!********************************!*\
  !*** ./img/brands-list/hp.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hp.svg";

/***/ }),

/***/ "./img/brands-list/lenovo.svg":
/*!************************************!*\
  !*** ./img/brands-list/lenovo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lenovo.svg";

/***/ }),

/***/ "./img/brands-list/samsung.svg":
/*!*************************************!*\
  !*** ./img/brands-list/samsung.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/samsung.svg";

/***/ }),

/***/ "./img/brands-list/sony.svg":
/*!**********************************!*\
  !*** ./img/brands-list/sony.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sony.svg";

/***/ }),

/***/ "./img/brands-list/viewsonic.svg":
/*!***************************************!*\
  !*** ./img/brands-list/viewsonic.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/viewsonic.svg";

/***/ }),

/***/ "./img/burger.svg":
/*!************************!*\
  !*** ./img/burger.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/call.svg":
/*!**********************!*\
  !*** ./img/call.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./img/chat.svg":
/*!**********************!*\
  !*** ./img/chat.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/checkstatus.svg":
/*!*****************************!*\
  !*** ./img/checkstatus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/divider.svg":
/*!*************************!*\
  !*** ./img/divider.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/divider.svg";

/***/ }),

/***/ "./img/dividerAqua.svg":
/*!*****************************!*\
  !*** ./img/dividerAqua.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/dividerAqua.svg";

/***/ }),

/***/ "./img/footer/arrowToRight.svg":
/*!*************************************!*\
  !*** ./img/footer/arrowToRight.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/arrowToRight.svg";

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/logoCPS.jpg":
/*!*************************!*\
  !*** ./img/logoCPS.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logoCPS.jpg";

/***/ }),

/***/ "./img/profile.svg":
/*!*************************!*\
  !*** ./img/profile.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/repair.svg":
/*!************************!*\
  !*** ./img/repair.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-16da14"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
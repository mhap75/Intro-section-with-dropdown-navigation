let navItems = document.querySelectorAll('.nav-item:has(img)');
let allArrows = document.querySelectorAll('.nav-item > img');
let exceptSubNav = document.querySelector('main');
let allSubs = document.querySelectorAll('.nav-sub');
function addClass(el, cls) {
    el.classList.add(cls);
}
function removeClass(el, cls) {
    el.classList.remove(cls);
}

exceptSubNav.addEventListener('click', () => {
    allArrows.forEach((arrow) => {
        removeClass(arrow, 'rotate-180');
    });
    allSubs.forEach((item) => {
        removeClass(item, 'active');
    });
});

navItems.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
        e.preventDefault();
        allArrows.forEach((item) => {
            removeClass(item, 'rotate-180');
        });
        let arrow = navItem.querySelector('img');
        let subNav = navItem.querySelector('.nav-sub');
        removeClass(subNav, 'active');
        allSubs.forEach((sub) => {
            removeClass(sub, 'active');
        });
        if (!arrow.classList.contains('rotate-180')) {
            addClass(arrow, 'rotate-180');
            addClass(subNav, 'active');
        } else {
            removeClass(arrow, 'rotate-180');
            removeClass(subNav, 'active');
        }
    });
});

let openMenuBtn = document.getElementById('menu-open');
let canvas = document.querySelector('canvas');
let menu = document.getElementById('menu-main');
console.log(canvas);
openMenuBtn.addEventListener('click', () => {
    let isOpened = openMenuBtn.getAttribute('data-expanded');
    if (isOpened === 'false' || isOpened === 'none') {
        openMenuBtn.setAttribute('data-expanded', 'true');
        canvas.setAttribute('data-expanded', 'true');
        menu.setAttribute('data-expanded', 'true');
        openMenuBtn.setAttribute('src', 'assets/image/icon-close-menu.svg');
        addClass(canvas, 'd-block');
    } else {
        openMenuBtn.setAttribute('data-expanded', 'false');
        canvas.setAttribute('data-expanded', 'false');
        menu.setAttribute('data-expanded', 'false');
        openMenuBtn.setAttribute('src', 'assets/image/icon-menu.svg');
        removeClass(canvas, 'd-block');
    }
});
const menuBars = document.querySelector('.menu-bars');
const overlay = document.querySelector('.overlay');
const nav1 = document.querySelector('.nav-1');
const nav2 = document.querySelector('.nav-2');
const nav3 = document.querySelector('.nav-3');
const nav4 = document.querySelector('.nav-4');
const nav5 = document.querySelector('.nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Nav Animation
const navAnimation = (dir1, dir2) => {
    navItems.map((nav, i) => {
        console.log(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`)
        nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`)
    });
}

const toggleNav = () => {
    // open/close menu bars
    menuBars.classList.toggle('change');
    // toggle active menu
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Overlay animate in (show)
         overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // animate Nav Items in
        navAnimation('out', 'in');
    } else {
        // Overlay animate out (hide)
         overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Nav Items Out
        navAnimation('in', 'out');
    }
}

menuBars.addEventListener('click', toggleNav);
navItems.map(nav => {
    nav.addEventListener('click', toggleNav);
})

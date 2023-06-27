const navbar = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
function isMobile() {
    return /iPhone|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
    navbar.style.position = "absolute";
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.width = "100%";
    navbar.style.height = "101vh";
    navbar.style.backgroundColor = "#111";
    navbar.style.display = "none";
    navbar.style.justifyContent = "center";
    navbar.style.alignItems = "center";
    navbar.style.textAlign = "center";
    navbar.style.fontSize = "20px";
    navbar.style.gap = "4em";

    let clickedHamburger = false;

    hamburger.addEventListener('click', () => {
        clickedHamburger = !clickedHamburger;

        if (clickedHamburger) {
            hamburger.textContent = "✖";
            navbar.style.display = "flex";
            navbar.style.flexDirection = "column";

            document.body.style.overflow = 'hidden';
        } else {
            hamburger.textContent = "☰";
            navbar.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
}

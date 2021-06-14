const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = none;
    }
}

window.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}
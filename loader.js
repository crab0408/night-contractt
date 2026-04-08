window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("fade-out");

    setTimeout(function () {
        loader.style.display = "none";
    }, 3000);
    }, 1500);
});
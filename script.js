document.getElementById("color-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const icon = document.querySelector(".material-icons");

    if (document.body.classList.contains("dark-mode")) {
        icon.textContent = "light_mode";
    } else {
        icon.textContent = "dark_mode";
    }
});
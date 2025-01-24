fetch("pages/sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar").innerHTML = data;

        const colorModeButton = document.getElementById("color-mode");

        const isDarkMode = localStorage.getItem("darkMode") === "true";
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            const icon = document.querySelector(".material-icons");
            if (icon) icon.textContent = "light_mode";
        }

        if (colorModeButton) {
            colorModeButton.addEventListener("click", function () {
                document.body.classList.toggle("dark-mode");
                const icon = document.querySelector(".material-icons");

                const isDarkMode = document.body.classList.contains("dark-mode");
                localStorage.setItem("darkMode", isDarkMode);

                if (isDarkMode) {
                    icon.textContent = "light_mode";
                } else {
                    icon.textContent = "dark_mode";
                }
            });
        }

    });

fetch("pages/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

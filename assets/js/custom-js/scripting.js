//Header & Footer
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            initSearchBox(); 
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    initAccordionIcons(); 
});

// Search Box 
function initSearchBox() {
    let searchBox = document.getElementById("searchBox");
    let searchIcon = document.getElementById("searchIcon");

    if (!searchBox || !searchIcon) {
        console.error("Search elements not found!");
        return;
    }

    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {
            searchBox.focus();
        }
    });

    document.addEventListener("click", function (event) {
        if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBox.classList.remove("active");
        }
    });
}

// Accordion 
function initAccordionIcons() {
    let accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        let icon = button.querySelector(".icon");

        button.addEventListener("click", function () {
            setTimeout(() => {
                if (this.classList.contains("collapsed")) {
                    icon.classList.remove("bi-folder2-open");
                    icon.classList.add("bi-folder-fill"); 
                } else {
                    icon.classList.remove("bi-folder-fill");
                    icon.classList.add("bi-folder2-open"); 
                }
            }, 100); 
        });
    });

    let firstAccordion = document.querySelector("#collapseOne");
    let firstButton = document.querySelector("[data-bs-target='#collapseOne'] .icon");

    if (firstAccordion && firstButton) {
        firstAccordion.classList.add("show"); 
        firstButton.classList.remove("bi-folder-fill");
        firstButton.classList.add("bi-folder2-open"); 
    }
}

function showPage(page) {
    // Hide all sections
    document.querySelectorAll("main section").forEach(section => {
        section.classList.add("hidden");
    });

    // Show the selected section
    document.getElementById(page).classList.remove("hidden");

    // Update active class on menu
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.classList.remove("active");
    });

    event.target.classList.add("active");
}

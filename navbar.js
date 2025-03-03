// Load and insert the navigation bar into the page
document.addEventListener("DOMContentLoaded", function () {
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading navigation:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("foot.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("foot").innerHTML = data;
        })
        .catch(error => console.error("Error loading navigation:", error));
});
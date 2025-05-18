document.addEventListener("DOMContentLoaded", function() {
    fetch("partials/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data)
        .catch(error => console.error("Erro ao carregar o header:", error));

    fetch("partials/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data)
        .catch(error => console.error("Erro ao carregar o footer:", error));
});


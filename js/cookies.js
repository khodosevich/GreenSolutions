document.addEventListener("DOMContentLoaded", function() {
    var cookieAlert = document.getElementById("cookie-alert");
    var closeCookieAlert = document.getElementById("close-cookie-alert");

    if (!localStorage.getItem("cookieAccepted")) {
        cookieAlert.style.display = "block";
    }

    closeCookieAlert.addEventListener("click", function() {
        cookieAlert.style.display = "none";
        localStorage.setItem("cookieAccepted", "true");
    });
});

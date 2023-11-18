document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var savedFormData = JSON.parse(localStorage.getItem("contactFormData")) || {};
    nameInput.value = savedFormData.name || "";
    emailInput.value = savedFormData.email || "";
    messageInput.value = savedFormData.message || "";

    var formData;

    contactForm.addEventListener("input", function() {
        formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };
        localStorage.setItem("contactFormData", JSON.stringify(formData));
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(formData);

        localStorage.removeItem("contactFormData");

        window.location.href = "/GreenSolutions/thankyou.html";
    });
});

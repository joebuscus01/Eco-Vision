let form = document.querySelector(".contact-form"); // Selects the form using its class

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form submission prevented!");
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const emailInput = document.getElementById("email");

    // Create and style email error message
    const emailError = document.createElement("small");
    emailError.id = "email-error";
emailError.style.color = "red";
emailError.style.display = "none";
emailError.style.fontSize = "12px";
emailError.style.marginTop = "4px";
emailError.style.fontFamily = "Arial, sans-serif";
emailError.style.textAlign = "center"; 
emailError.style.display = "block";
emailError.style.width = "100%";

    emailInput.insertAdjacentElement("afterend", emailError);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const first = document.getElementById("firstname").value.trim();
        const last = document.getElementById("lastname").value.trim();
        const email = emailInput.value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.querySelector("textarea").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|ca)$/i;

        let isValid = true;
        emailError.style.display = "none";

        if (!first || !last || !email || !phone || !message) {
            alert("❌ Please fill in all fields.");
            return;
        }

        if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email (.com or .ca)";
            emailError.style.display = "block";
            return;
        }

        showThankYouDialog();
    });

    function showThankYouDialog() {
        const dialog = document.createElement("dialog");
        dialog.style.padding = "30px";
        dialog.style.textAlign = "center";
        dialog.style.border = "none";
        dialog.style.borderRadius = "8px";
        dialog.innerHTML = `
            <h2 style="color:green;">Thank You For Your Feedback!</h2>
            <p>We appreciate you reaching out.</p>
            <button style="margin-top: 20px; padding: 10px 20px; background: green; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="location.href='home.html'">Return to Home</button>
        `;
        document.body.appendChild(dialog);
        dialog.showModal();
    }
});

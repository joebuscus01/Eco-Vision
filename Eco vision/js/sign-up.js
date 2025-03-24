window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("policy-check");

    // ========== Error Elements ==========
    const emailError = createError("email-error", emailInput);
    const passwordError = createError("password-error", passwordInput);
    const checkboxError = createError("checkbox-error", checkbox.parentElement);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("firstname").value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        let isValid = true;

        const users = JSON.parse(localStorage.getItem("users")) || [];  

        // 🔒 Validate Email Format
        const emailFormat = /^[^\s@]+@[^\s@]+\.(com|ca)$/i;
        if (!emailFormat.test(email)) {
            emailError.textContent = "Please enter a valid email address";
            emailError.style.display = "block";
            isValid = false;
        } else if (users.some(user => user.email === email)) {
            emailError.textContent = "Email already in use. Please log in.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // 🔐 Password must be at least 8 characters + 1 number
        const passwordValid = /^(?=.*\d).{8,}$/.test(password);
        if (!passwordValid) {
            passwordError.textContent = "Password must be at least 8 characters and include a number.";
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        // ✅ Must tick the policy checkbox
        if (!checkbox.checked) {
            checkboxError.textContent = "You must agree to the privacy policy.";
            checkboxError.style.display = "block";
            isValid = false;
        } else {
            checkboxError.style.display = "none";
        }

        if (!isValid) return;

        // ✅ Save new user
        users.push({ name: fullName, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        // ✅ Set active user session
        localStorage.setItem("currentUser", email);

        showPopup(`Thank you, ${fullName.split(" ")[0]}, for signing up!`);
        form.reset();

        setTimeout(() => {
            window.location.href = "account.html";
        }, 1500);
    });
});

// 🔧 Utility to create and insert inline <small> error elements
function createError(id, targetElement) {
    const el = document.createElement("small");
    el.id = id;
    el.style.color = "red";
    el.style.display = "none";
    targetElement.insertAdjacentElement("afterend", el);
    return el;
}

// ✅ Reusable popup
function showPopup(message, isError = false) {
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.top = "20%";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.background = isError ? "#ffcccc" : "#ffffff";
    popup.style.border = isError ? "2px solid red" : "2px solid green";
    popup.style.padding = "20px 30px";
    popup.style.fontSize = "18px";
    popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    popup.style.zIndex = "9999";
    popup.style.borderRadius = "8px";
    popup.style.textAlign = "center";
    popup.style.fontFamily = "Arial, sans-serif";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("login");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  login_valid();
});

function login_valid() {
  const emailValue = email.value.trim();
  const passwordValue = password.value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // ✅ Email Format Check
  const emailFormat = /^[^\s@]+@[^\s@]+\.(com|ca)$/i;
  if (!emailFormat.test(emailValue)) {
    showPopup("Please enter a valid email address", true);
    return;
  }

  const foundUser = users.find(
    (user) => user.email === emailValue && user.password === passwordValue
  );

  if (foundUser) {
    localStorage.setItem("currentUser", foundUser.email);
    showPopup(`Welcome back, ${foundUser.name.split(" ")[0]}!`);
    setTimeout(() => {
      window.location.href = "account.html";
    }, 1500);
  } else {
    showPopup("Incorrect email or password.", true);
  }
}

function two_fa() {
  const log_window = document.querySelector(".login-wrapper");
  log_window.style.display = "none";

  const two_fa = document.getElementById("two-fa");
  two_fa.style.display = "flex";
}

function two_fa_return() {
  const log_window = document.querySelector(".login-wrapper");
  log_window.style.display = "flex";

  const two_fa = document.getElementById("two-fa");
  two_fa.style.display = "none";
}

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

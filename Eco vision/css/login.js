function Resgister(){
    window.location.href = 'Register.html';
}

function login_valid(){
    return true;
}

function two_fa(){
        const log_window = document.querySelector(".login-wrapper")
        log_window.style.display = "none"
        const two_fa = document.querySelector(".two-fa")
        two_fa.style.display = "flex"
}
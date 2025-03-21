


function Resgister(){
    window.location.href = 'Register.html';
}

function login_valid(){
    return true;
}

function two_fa(){
    const log_window = document.querySelector(".login-wrapper") // see if u can make this global

        log_window.style.display = "none"
    const two_fa = document.getElementById("two-fa")
    two_fa.style.display = "flex"
        
}

function two_fa_return(){
    const log_window = document.querySelector(".login-wrapper") // see if u can make this global
        log_window.style.display = "flex"
    const two_fa = document.getElementById("two-fa")
    two_fa.style.display = "none"

}
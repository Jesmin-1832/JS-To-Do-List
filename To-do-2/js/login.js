// Loader

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';

    setTimeout(function () {
        loader.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
        loader.style.display = 'none';
    }, 2000);
})

document.addEventListener("DOMContentLoaded", function () {
    const login = document.querySelector('.login');
    login.style.display = 'none';

    setTimeout(function () {
        login.style.opacity = 1;
    }, 1500);
    setTimeout(function () {
        login.style.display = 'flex';
    }, 1000);
})


// Login and Signup button

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm");
    const registerForm = document.querySelector("#registerForm");
    const loginBtn = document.querySelector("#loginBtn");
    const registerBtn = document.querySelector("#registerBtn");

    loginForm.style.display = "block";
    registerForm.style.display = "none";

    loginBtn.addEventListener("click", function () {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    registerBtn.addEventListener("click", function () {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });
});


// Sign Up Functionality


document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();


        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("registerPhone").value;
        const password = document.getElementById("registerPassword").value;


        const userData = {
            username: username,
            email: email,
            phone: phone,
            password: password
        };

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
        Toastify({
            text: "Register successfully...",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { }
        }).showToast();
        registerForm.reset();
    });
});


// Login Functionality 

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const phone = document.getElementById("loginPhone").value;
        const password = document.getElementById("loginPassword").value;

        if (typeof (Storage) !== "undefined") {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const matchedUser = users.find(user => user.phone === phone && user.password === password);

            if (matchedUser) {
                localStorage.setItem("currentUser", matchedUser.username);
                localStorage.setItem("email", matchedUser.email);
                Toastify({
                    text: "Login successfully...",
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "center",
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function () { }
                }).showToast();
                setTimeout(() => {
                    window.location = './todo.html';
                }, 1500);
            } else {
                Toastify({
                    text: "Invalid phone number or password. Please try again.",
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "center",
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, rgb(180 209 24), rgb(255 48 48))",
                    },
                    onClick: function () { }
                }).showToast();
            }

        } else {
            Toastify({
                text: "Sorry, your browser does not support local storage. Please use a different browser.",
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, rgb(180 209 24), rgb(255 48 48))",
                },
                onClick: function () { }
            }).showToast();
        }
    });
});



// Password show hide 


document.addEventListener("DOMContentLoaded", function () {
    const togglePasswordLogin = document.querySelector(".login #togglePassword");
    const loginPassword = document.getElementById("loginPassword");

    togglePasswordLogin.addEventListener("click", function () {
        const type = loginPassword.getAttribute("type") === "password" ? "text" : "password";
        loginPassword.setAttribute("type", type);
        togglePasswordLogin.querySelector("i").classList.toggle("fa-eye-slash");
        togglePasswordLogin.querySelector("i").classList.toggle("fa-eye");
    });


    const togglePasswordRegister = document.querySelector(".register #togglePassword");
    const registerPassword = document.getElementById("registerPassword");

    togglePasswordRegister.addEventListener("click", function () {
        const type = registerPassword.getAttribute("type") === "password" ? "text" : "password";
        registerPassword.setAttribute("type", type);
        togglePasswordRegister.querySelector("i").classList.toggle("fa-eye-slash");
        togglePasswordRegister.querySelector("i").classList.toggle("fa-eye");
    });

});


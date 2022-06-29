let credentials = {
    login: "admin",
    password: "qwerty"
};

function check() {
    if (credentials.login == document.getElementById('login').value && credentials.password == document.getElementById('pass').value) {
            alert("All correct")
    }
    else {
        alert("Wrong login or password")
    };
}


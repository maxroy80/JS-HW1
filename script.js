let credentials = {
    login: "admin",
    password: "qwerty"
};

// let login = document.getElementById('login');
// let pass = document.getElementById('pass');
// console.log("Login - " + credentials.login + " Password - " + credentials.password);

function check() {

    // console.log(login.value);
    // console.log(pass.value);

    // if (credentials.login == login.value && credentials.password == pass.value) {
    if (credentials.login == document.getElementById('login').value && credentials.password == document.getElementById('pass').value) {
            alert("All correct")
    }
    else {
        alert("Wrong login or password")
    };
    // alert("function run");
}


let credentials = {
    login: "admin",
    password: "qwerty"
};

let login;
let pass;

function letLog(l) {
    login = (l.value);
}
function letPass(p) {
    pass = (p.value);
}

// console.log("Login - " + credentials.login + " Password - " + credentials.password);

function check() {
    console.log(login);
    console.log(pass);
    
    if (credentials.login == login && credentials.password == pass) {
        alert("All correct")
    }
    else {
        alert("Wrong login or password")
    };
    // alert("function run");
}


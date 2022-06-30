let credentials = {
    login: "admin",
    password: "qwerty"
};

let answerStyle = document.getElementById('check_res');
let checkBool;

function check() {
    if (credentials.login == document.getElementById('login').value && credentials.password == document.getElementById('pass').value) {
        
        answerStyle.style.backgroundColor = "#98e69d";
        answerStyle.style.transform = "translate(-20px, 50%)";
        answerStyle.style.visibility = "visible";
        checkBool = true;
        document.getElementById('check_massage').innerHTML = "All correct";
        return false;
        // alert("All correct");
    }
    else {
        answerStyle.style.backgroundColor = "#ff5757";
        answerStyle.style.transform = "translate(-20px, 50%)";
        answerStyle.style.visibility = "visible";
        checkBool = false;
        document.getElementById('check_massage').innerHTML = "Wrong login or password";
        return false;
        // alert("Wrong login or password")
    };
}

function checkDone() {
    if (checkBool === true) {
        // location.href = 'https://www.google.ua';
        location.reload();
    }
    else {
        location.reload();
    }
}

function validateForm() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const cnf_password = document.getElementById("cnf_pass").value;

    if (firstName === "" || lastName === "" || email === "" || password === "" || cnf_password === "") {
        alert("All fields must be filled out");
        console.log("All fields must be filled out");
        return false;
    }
    else if (!isAlphanumeric(firstName) || !isAlphanumeric(lastName)) {
        alert('Please enter a valid name');
        return false;
    } else if (!validateEmail(email)) {
        alert('Invalid Email Address');
        return false;
    }
    else if (password !== cnf_password) {
        alert('Password and confirmation password do not match');
        return false;
    }
    return true;
}

function isAlphanumeric(input) {
    var regex = /^[a-zA-Z0-9]+$/;
    return regex.test(input);
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S{2,3}/;    
    return re.test(email);
}

const registerBtn = document.querySelector('#registerButton');
registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(validateForm()){
        console.log('Submitted');
        // window.location.href = '../dashboard.html';
    }
});

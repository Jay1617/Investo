let Investo_LoginRegisterClick = document.querySelector(".Investo_LoginRegister");
let IndexBody = document.getElementById("IndexBody");

Investo_LoginRegisterClick.addEventListener("click", () => {
    console.log("Button Active")

    let LoginContainer = document.createElement("div");
    LoginContainer.classList.add("LoginAndRegisterContainer");
    IndexBody.appendChild(LoginContainer);

    //main body of login page
    let LoginBody = document.createElement("div");
    LoginBody.classList.add("LoginBody");
    LoginContainer.appendChild(LoginBody);


    // left side of login page
    let LoginBodyLeft = document.createElement("div");
    LoginBodyLeft.classList.add("LoginBodyLeft");
    LoginBody.appendChild(LoginBodyLeft);

    

    //left side innner element bottom container
    let LoginBodyLeftBottom = document.createElement("div");
    LoginBodyLeftBottom.classList.add("LoginBodyLeftBottom");
    LoginBodyLeft.appendChild(LoginBodyLeftBottom);

    //left side inner element bottom Animation box
    let LoginBodyLeftBottomAnimation = document.createElement("div");
    LoginBodyLeftBottomAnimation.classList.add("LoginBodyLeftBottomAnimation");
    LoginBodyLeftBottom.appendChild(LoginBodyLeftBottomAnimation);

    let LoginBodyLeftText = document.createElement("h2");
    LoginBodyLeftText.classList.add("LoginBodyLeftText");

    let TextContentDisplay = ["Mutual Funds", "ETFs", "Gold",
        "US Stocks", "Fixed Deposits", "Stocks"];


    let num = 0;
    LoginBodyLeftText.textContent = TextContentDisplay[num];
    function ChangeText() {
        if (num != 6) {
            LoginBodyLeftText.textContent = TextContentDisplay[num];
            num++;
        }
        else {
            num = 0;
        }
    }
    setInterval(ChangeText, 2000);
    LoginBodyLeftBottom.appendChild(LoginBodyLeftText);

    // Right side of login page
    let LoginBodyRight = document.createElement("div");
    LoginBodyRight.classList.add("LoginBodyRight");
    LoginBody.appendChild(LoginBodyRight);

    //close button
    let TopRightDiv = document.createElement("div");
    TopRightDiv.classList.add("TopRightDIV");
    let Btn = document.createElement("button")
    Btn.setAttribute('onclick', 'location.href="index.html"');
    Btn.innerHTML = "x";
    TopRightDiv.appendChild(Btn);
    LoginBodyRight.appendChild(TopRightDiv);


    //right side of login page Heading
    let LoginBodyRighth2 = document.createElement("h2");
    LoginBodyRighth2.classList.add("LoginBodyRighth1");
    LoginBodyRighth2.textContent = "Welcome To Investo📈";
    LoginBodyRight.appendChild(LoginBodyRighth2);

    //Right side paragraph
    let LoginBodyRightP = document.createElement("p");
    LoginBodyRightP.classList.add("LoginBodyRightP");
    LoginBodyRightP.textContent = "Simple, Free Investing.";
    LoginBodyRight.appendChild(LoginBodyRightP);

    //Creating login form
    let Form = document.createElement('form');
    Form.setAttribute('id', 'Form')
    LoginBodyRight.appendChild(Form)

    // Creating Username input field
    let UserNameInputField = document.createElement('input');
    UserNameInputField.id = 'loginPageInput'
    UserNameInputField.type = 'email';
    UserNameInputField.placeholder = '📧 Email Address';
    UserNameInputField.required = true;
    Form.appendChild(UserNameInputField).addEventListener('keyup', () => {
        UserNameInputField.value = UserNameInputField.value.replace(/[^A-Za-z0-9@._]/g, '').toLowerCase();
    });
    // Creating Password Input Field
    let PasswordInputField = document.createElement('input');
    PasswordInputField.id = 'loginPagePassword';
    PasswordInputField.type = 'password';
    PasswordInputField.placeholder = '🔒 Password';
    PasswordInputField.required = true;
    Form.appendChild(PasswordInputField);


    //creating submit button
    let SubmitButton = document.createElement('button')
    SubmitButton.id = 'loginPageSubmit'
    SubmitButton.innerHTML = 'Sign in'
    SubmitButton.setAttribute('type', "submit")
    Form.appendChild(SubmitButton)


    Form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Submitted!');

        let userName = UserNameInputField.value; 
        let password = PasswordInputField.value; 

        if (userName === "" || password === "") {
            alert("Fields can not be empty!");
        } else {
            alert(`Welcome ${userName}`);
            window.location.href = "./dashboard.html";
        }
    });


    let RegisterLink = document.createElement('p')
    RegisterLink.className = 'registerLink'
    RegisterLink.innerHTML = 'Don\'t have an account? <a href="./loginAndRegister/signup.html">Register</a>'
    Form.appendChild(RegisterLink)
    document.getElementsByClassName('registerLink').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = "./loginAndRegister/signup.html";
    });
})
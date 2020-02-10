const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

//show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//get fieldname
function getFieldName(input) {
    idStr = input.id;
    return idStr.charAt(0).toUpperCase() + idStr.slice(1);
}

//check if required fields are filled
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be more than ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be no more than ${max} characters`);
    }
}

//check if email is valid
function checkValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

//add event listener
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    //only display length validation if inputs aren't empty
    const formControl = input.parentElement;
    if (formControl.className === "form-control success") {
        checkLength(username, 3, 10);
        checkLength(password, 8, 20);
    }

    checkValidEmail(email);
});



//extra functionalities
/**
 * make sure username isn't used as password
 *
 *
 */

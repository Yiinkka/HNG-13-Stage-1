const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const shortMessage = document.getElementById("short-Message");

// Show error function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const p = formControl.querySelector("p");
    p.innerText = message;
    const successMessage = formControl.querySelector("small");
    
    if (successMessage) {
        successMessage.style.visibility = "hidden";
    }


}

// Show success function
function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = "form-control success";
}


// email function
function checkEmail(input) {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
        return true;
    }
    else {
        showError(input, `Email is not valid`);
        return false;
    }
}

// Check required function 

function checkRequired(inputArr) {
    let isValid = true;
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
            isValid = false;
        }
        else {
            showSuccess(input);
        }
    });
    return isValid;
}

// check input lenght

function checkLength(textarea, min, max) {
    if (textarea.value.length < min){
        showError(textarea, `${getFieldName(textarea)} must be at least ${min} characters`);
        return false;
    }
    else if (textarea.value.length > max){
        showError(textarea, `${getFieldName(textarea)} must be less than ${max} characters`);
        return false;
    }
    else{
        showSuccess(textarea);
        return true;
    }
}
// get field name
function getFieldName(input){
    return "*" + input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Function for validating a single field while live typing

function validateField(input) {
    if (input === email) {
        return checkEmail(input);
    }
    else if (input === shortMessage) {
        return checkLength(input, 10, 1e5);
    }
    else {
        if (input.value.trim() === "") {
            showError (input, `${getFieldName(input)} is required`);
            return false;
        }
        else {
            showSuccess(input);
            return true;
        }
    }
}

// Event listeners 

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const requiredOk = checkRequired([fullName, email, subject, shortMessage]);
    const messageOk = checkLength(shortMessage, 10, 1e5);
    const emailOk = checkEmail(email);

    if (requiredOk && messageOk && emailOk) {

        setTimeout (() => {
            document.querySelectorAll(".form-control small").forEach((msg) => {
                msg.style.visibility = "visible";
        });

            form.submit();

            form.reset();
        }, 700);
    }
});


[fullName, email, subject, shortMessage].forEach((input) => {
    input.addEventListener("input", () => validateField(input));
});


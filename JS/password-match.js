function passwordMatch() {
    const a = document.getElementById('password1').value;
    const b = document.getElementById('password2').value;    
    if ((a == b) && ((a != '') || (b != ''))) {
        const successMessage = document.createElement("p");
        const successText = document.createTextNode("Password matches");
        successMessage.classList.add("success");
        successMessage.appendChild(successText);
        const success = document.getElementById('password-1');
        success.appendChild(successMessage);
    }
    else {
        const errorMessage = document.createElement("p");
        const errorText = document.createTextNode("Passwords do not match");
        errorMessage.classList.add("error");
        errorMessage.appendChild(errorText);
        const error = document.getElementById('password-1');
        error.appendChild(errorMessage);
        const borders = document.getElementsByClassName('passwordfield');
        for (const border of borders) {
            border.classList.add("error-border");
        }
    }   
};

document.getElementById('formSubmit').addEventListener('click',passwordMatch);

function removeHelperMessage() {
    if (document.querySelector('p.success') != null){
        element = document.querySelector('p.success');
    }
    if (document.querySelector('p.error') != null){
        element = document.querySelector('p.error');
        const borders = document.getElementsByClassName('passwordfield');
        for (const border of borders) {
            border.classList.remove("error-border");
        }
    }
    element.remove();
};

document.getElementById('password1').addEventListener('click',removeHelperMessage);


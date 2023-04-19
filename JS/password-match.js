
const password1 = document.getElementById("password1").value;
const password2 = document.getElementById("password2").value;

const passwordMatch = (password1, password2) => {
    if ((password1 != null) || (password2 != null)) {
        if (password1 == password2) {
            const successMessage = document.createElement("p");
            const successText = document.createTextNode("Password matches");
            successMessage.classList.add("success");
            successMessage.appendChild(successText);
            const element = document.querySelector("password-1");
            element.appendChild(successMessage);
            return;
        }
        else {
            const errorMessage = document.createElement("p");
            const errorText = document.createTextNode("Passwords do not match");

        }
    };
};

passwordMatch(password1,password2);
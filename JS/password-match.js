//compare values in password1 and password2
const password1 = document.getElementById("password1").value;
const password2 = document.getElementById("password2").value;

const passwordMatch = (password1, password2) => {
    if ((password1 != null) || (password2 != null)) {
        if password1 == password2 {
            const successMessage = document.createElement("p");
            const successText = document.createTextNode("Password matches");
            successMessage.classList.add("success");
            successMessage.appendChild(successText);
            const element = document.querySelector("")
        }
    }
    //if one or both of the values is empty, do not show any changes to the UI
    //compare values in password1 and password2
    //if values are not matching, show error color border and error text under first input
    //if values are matching, show success text under first input
}


function passwordMatching() {
    const passwordFirst = document.getElementById("password1").value;
    const passwordSecond = document.getElementById("password2").value;
    
    if ((passwordFirst != null) && (passwordSecond != null)) {
        console.log(passwordFirst);
    }
};

const formSubmit = document.getElementById("formSubmit").addEventListener("click")
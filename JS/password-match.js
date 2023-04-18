function passwordMatch() {
    const passwordFirst = document.getElementById("password1").value;
    const passwordSecond = document.getElementById("password2").value;
    
    if ((passwordFirst != null) && (passwordSecond != null)) {
        console.log(passwordFirst);
    }
};

passwordMatch();
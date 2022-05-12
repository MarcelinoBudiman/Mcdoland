var form = document.getElementById("form-register")
var namee = document.getElementById("name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var address = document.getElementById("address");
var gender = document.getElementsByName("gender");
var payment = document.getElementsByName("payment")
var terms = document.getElementById("checkbox");

var flag = true;
form.addEventListener('submit', (e) =>{
    flag = true;

    checkInputs();

    if(flag == false){
        e.preventDefault();
    }
    
})

function checkInputs(){
    let nameContainer = namee.value;
    let phoneContainer = phone.value;
    let emailContainer = email.value;
    let addressContainer = address.value;
    let termsContainer = terms.value;

    // Name Validation
    if(nameContainer === ''){
        flag = false;
        setErrorMsg(namee, "Please fill in the name");
    } else if (nameContainer.length < 5){
        setErrorMsg(namee, "Name must be at least 5 characters");
        flag = false;
    } else {
        setCorrect(namee);
        flag = true;
    }

    // Phone Validation
    if(phoneContainer === ''){
        setErrorMsg(phone, "Please fill in the phone number");
        flag = false;
    } else if (phoneContainer.length < 13){
        setErrorMsg(phone, "Phone number must be at least 13 numbers");
        flag = false;
    } else {
        setCorrect(phone);
        flag = true;
    }

    // Email Validation
    if(emailContainer === ''){
        setErrorMsg(email, "Please fill in the email address");
        flag = false;
    } else if (emailContainer.length < 5){
        setErrorMsg(email, "Please enter a valid email address");
        flag = false;
    } else if (emailContainer.indexOf('@') == -1){
        setErrorMsg(email, "Please enter a valid email address");
        flag = false;
    } else {
        setCorrect(email);
        flag = true;
    }

    // Address Validation
    if(addressContainer === ''){
        setErrorMsgAddress(address, "Please fill in your address");
        flag = false;
    } else {
        setCorrect(address);
        flag = true;
    }

    // Gender Validation
    var checked = false;
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked == true){
            checked = true;
        }
    }

    if(checked == false){
        setErrorMsg(gender[0], "Please choose the option above");
        flag = false;
    } else {
        setCorrect(gender[0]);
        flag = true;
    }

    // Payment Validation
    var checked = false;
    for(i = 0; i < payment.length; i++) {
        if(payment[i].checked){
            checked = true;
        }
    }

    if(checked == false){
        setErrorMsg(payment[0], "Please choose the option above");
        flag = false;
    } else {
        setCorrect(payment[0]);
        flag = true;
    }

    // Terms Validation
    if(terms.checked === false){
        setErrorMsgTerms(terms, "Please agree to the terms and condition above");
        flag = false;
    } else {
        setCorrect(terms);
        flag = true;
    }
}

function setErrorMsg(lbl, msg){
    const formControl = lbl.parentElement;
    const p = formControl.querySelector('p');

    formControl.className = "form error";
    p.innerText = msg;

}

function setErrorMsgAddress(lbl, msg){
    const formControl = lbl.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = "form error";
    small.innerText = msg;

}

function setErrorMsgTerms(lbl, msg){
    const formControl = lbl.parentElement;
    const em = formControl.querySelector('em');

    formControl.className = "form error";
    em.innerText = msg;

}

function setCorrect(lbl){
    const formControl = lbl.parentElement;
    formControl.className = "form";
}
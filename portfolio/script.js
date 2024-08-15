const form = document.getElementById('contact-form')
const fname= document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const  message = document.getElementById('message-box')
const errorName = document.getElementById('error-name')
const errorMail = document.getElementById('error-mail')
const errorMsg= document.getElementById('error-msg')



form.addEventListener('submit', (e) =>{
    if (fname.value.trim() === '') {
        e.preventDefault();
        errorName.style.display = 'block';
        fname.style.border = '1.5px solid rgb(186, 27, 27)';
        errorName.innerText ='Please enter your full name.';
    }
    else{
        fname.style.border = '';
        errorName.style.display = 'none';
    }
    if (lname.value.trim() === '') {
        e.preventDefault();
        errorName.style.display = 'block';
        lname.style.border = '1.5px solid rgb(186, 27, 27)';
        errorName.innerText ='Please enter your full name.';
    }
    else{
        lname.style.border = '';
        errorName.style.display = 'none';
    }
    if (email.value.trim() === '') {
        e.preventDefault();
        errorMail.style.display = 'block';
        email.style.border = '1.5px solid rgb(186, 27, 27)';
        errorMail.innerText ='Please enter your email.';
    }
    else {
        email.style.border = '';
        errorMail.style.display = 'none';
    }
    if (message.value.trim() === '') {
        e.preventDefault();
        errorMsg.style.display = 'block';
        message.style.border = '1.5px solid rgb(186, 27, 27)';
        errorMsg.innerText ='Please fill the messagebox.';
    }
    else{
        message.style.border = '';
        errorMsg.style.display = 'none';
    }
   
    
})







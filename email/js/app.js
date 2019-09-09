
//variables
const sendBtn = document.getElementById ('sendBtn'),
       email = document.getElementById ('email'),
       subject = document.getElementById ('subject'),
       message = document.getElementById ('message'),
       Form = document.getElementById ('email-form'),
       resetBtn = document.getElementById ('resetBtn');

//event listeners
eventListeners ();

function eventListeners () {

//App Init - inits gunction when page loads
document.addEventListener ('DOMContentLoaded', appInit);

//Valideate the form
email.addEventListener ('blur' , validateField); 
subject.addEventListener ('blur' , validateField);
message.addEventListener ('blur' , validateField);

//Send email and resend button
Form.addEventListener ('submit', submitEmail)

resetBtn.addEventListener ('click', resetForm);

}

//functions 
    function appInit () {
        //disable SEND button on load
        sendBtn.disabled = true;

    }

    function submitEmail (e) {
        e.preventDefault ();

        //when email is submitted-show the spinner!
        const spinner = document.getElementById ('spinner');
        spinner.style.display = "block";

        //show second image that email is sent
        const mailsentImg = document.createElement ('img')
        mailsentImg.src = 'img/mail.gif';
        mailsentImg.style.display = 'block';

        //Hide spinner than add send Email image
        setTimeout (function () {
            //Hide spinner after 3 s
            spinner.style.display = 'none'

            //show image after spinner is hidded (above)
        document.getElementById ('loaders').appendChild (mailsentImg);

            //after 5s hide the omage and restart the form
            setTimeout (function () {
                Form.reset ();
                mailsentImg.remove ();
            }, 5000);
        }, 3000);
    };

    //Validate the Fields
    function validateField () {

        //Validate the length of the fields
        validateLength (this);

        //special: validate the email
        if (this.type === 'email') {
            validateEmail (this); //special validation-email
        }

        //both (lenghth/email function) will return errors, then check if there are errors
        let errors;
        errors = document.querySelectorAll ('.error')

        //check that all inputs are not empty
        if (email.value !=='' && subject.value !=='' && message.value !=='') {
            if (errors.length === 0) {
                //the send button should be enabled
                sendBtn.disabled = false;
            }
        }
    };


    //Validate the lenghth of the fields
    function validateLength (field) {
        if (field.value.length > 0) {
            field.style.borderBottomColor = 'green';
            field.classList.remove ('error');
        }else{
            field.style.borderBottomColor = 'red';
            field.classList.add ('error');
        }

    }

    //validates email (checks for @ value)
    function validateEmail (field) {
        let emailText = field.value //text u email polju
        //check if the email text has @
        if (emailText.indexOf ('@') !== -1) {
            field.style.borderBottomColor = 'green';
            field.classList.remove ('error');
        }else{
            field.style.borderBottomColor = 'red';
            field.classList.add ('error');
        }
    }

    //Reset the Form
    function resetForm () {
        Form.reset ();
    }




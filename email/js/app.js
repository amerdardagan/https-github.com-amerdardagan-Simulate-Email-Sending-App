
//variables
const sendBtn = document.getElementById ('sendBtn'),
       email = document.getElementById ('email'),
       subject = document.getElementById ('subject'),
       message = document.getElementById ('message'),
       resetBtn = document.getElementById ('resetBtn'),
       Form = document.getElementById ('email-form');

//event listeners
eventListeners ();

function eventListeners () {

//App Init - inits gunction when page loads
document.addEventListener ('DOMContentLoaded', appInit);

//Valideate the form
email.addEventListener ('blur' , validateField); //blur:napisati nešto u polje pa click u sljedeće
subject.addEventListener ('blur' , validateField);
message.addEventListener ('blur' , validateField);

//Send email and resend button
resetBtn.addEventListener ('click', resetForm);

}

//functions 
    //App Init (kada prvi put loadiram stranicu 
        //1.želim da SEND bude disable
        //2.da ispunim 3 validate polja prije nego mogu SEND
    function appInit () {
        //disable SEND button on load
        sendBtn.disabled = true;

    }

    //Validate the Fields
    function validateField () {
        let errors;

        //Validate the length of the fields
        validateLength (this); //odnosi se na trenutno polje koje kliknimo

        //special: validate the email
        if (this.type === 'email') {
            validateEmail (this); //special validation-email
        }

        //both (lenghth/email function) will return errors, then check if there are errors
        errors = document.querySelectorAll ('.error')

        //check that all inputs are not empty
        if (email.value !=='' && subject.value !=='' && message.value !=='') {
            if (errors.length === 0) {
                //the send button should be enabled
                sendBtn.disabled = false;
            }
        }
    }


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

//greške: getElementsById; indexOf ('@'); fields.value.length; emailText=field.value; querySelectorAll ('.error)



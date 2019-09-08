//variables
const sendBtn = document.getElementById ('sendBtn'),
       email = document.getElementById ('email'),
       subject = document.getElementById ('subject')
       message = document.getElementById ('message');

//event listeners
eventListeners ();

function eventListeners () {

//App Init - inits gunction when page loads
document.addEventListener ('DOMContentLoaded', appInit);

//Valideate the form
email.addEventListener ('blur' , validateField); //blur:napisati nešto u polje pa click u sljedeće
subject.addEventListener ('blur' , validateField);
message.addEventListener ('blur' , validateField);


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



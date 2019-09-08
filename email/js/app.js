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

        //Validate the length of the field
        validateLength (this); //odnosi se na trenutno polje koje kliknimo
    }



//variables
const sendBtn = document.getElementById ('sendBtn');

//event listeners
eventListeners ();

function eventListeners () {

//App Init - inits gunction when page loads
document.addEventListener ('DOMContentLoaded', appInit)

}

//functions 
    //App Init (kada prvi put loadiram stranicu 
        //1.želim da SEND bude disable
        //2.da ispunim 2 validate polja prije nego mogu SEND
    function appInit () {
        //disable SEND button on load
        sendBtn.disabled = true;

    }



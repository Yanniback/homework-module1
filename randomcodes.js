/*------Random Codes------*/

//Note: submit button is initially disabled upon loading of this page - see <body> in html
function generateCode() {
    var code = ' '; //Create variables to store generated codes and initialize to empty value
    var getCode = ' '; // to store entered code
    var btnvalue; // for button boolean value
    //Creat variable to hold the type of characters we want to show as codes
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwuxyz0123456789@#$';


    //Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random()* str.length; //random select a character from the vari
        code += str.charAt(char) //accumulate the generated character into a string of 8
    }
    return code; //return the final accumulated string when loop ends
}
//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//determine when to able or disable Button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; //able/disbale button
    if (btnvalue == true) { //test if button is disable or enabled
        //Set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //Set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}
//Listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //Listen to code enetered in textbox

//Run function if detected user had entered a character in textbox
function evaluateCode() {
        getCode = document.getElementById("codeentered").ariaValueMax; //get character entered
        var charset1 = getCode.trim(); //Remove any hidden characters entered
        var charset2 = code.trim(); //Remove any hidden characters generated
        //Test if code entered matches the number of generated characters
        if (charset1.length == charset2.length && charset1 == charset2) {
            disableButton(false); //If match, run the function to enabled button
        }
    }
//Activate function
disableButton();
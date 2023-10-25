//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log (message); //local variable
    console.log(globalMessage);
    function prinAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    console.log(childMessage);
}
printMessage();
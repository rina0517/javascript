function printHello(){
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234)

//2.Parameters
//premitive parameters: passed by value
//object parameters: passed by reference

function changeName(obj) {
    obj.name='coder'
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log (message); //local variable
    console.log(globalMessage);
}
printMessage();
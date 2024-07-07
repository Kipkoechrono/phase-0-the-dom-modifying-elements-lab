// Write your code here!
const newMain = document.querySelector("main#main");
newMain.remove();
//creates a new h1
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'RONO is the champion';//Peter Rono is the champion

document.body.appendChild(newHeader);//append newHeader to body

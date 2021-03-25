// Write your code here!
let body = document.getElementsByTagName('body')[0];
body.removeChild(body.querySelector('#main'));
let newHeader = document.createElement('h1');
newHeader.innerHTML = 'YOUR-NAME is the champion';
newHeader.id = 'victory';
body.appendChild(newHeader);


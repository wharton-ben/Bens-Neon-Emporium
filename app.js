
const button = document.getElementById('colorChangeButton');
const button1 = document.getElementById('colorChangeButton');

button.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('titleToChange').style.color = (`#${randomColor}`);
    // console.log('click');
} ) 

button1.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('historyToChange').style.color = (`#${randomColor}`);
    // console.log('click');
} ) 

setInterval(function () {document.getElementById('colorChangeButton').click();}, 10000)
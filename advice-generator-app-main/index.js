const getDataButton = document.querySelector('.diceButton');
const adviceId = document.querySelector('.adviceValue');
const quoteText = document.querySelector('.quoteText');

getDataButton.addEventListener('click', function(){
        const xhr = new XMLHttpRequest();

        xhr.open('GET' , 'https://api.adviceslip.com/advice');

        xhr.onload = function() {
            const data = JSON.parse(this.responseText);
            const dataId = data.slip.id;
            const dataAdvice = data.slip.advice;
            console.log(data);
            adviceId.innerHTML = `ADVICE #${dataId}`;
            quoteText.innerHTML = `"${dataAdvice}"`;
        }
    xhr.send();
});
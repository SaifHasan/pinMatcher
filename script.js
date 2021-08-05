function getPin() {
    //const random = Math.random() * 10000;
    const pin = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    if (pin.length === 4) {

        return pin;
    } else {

        return getPin();
    }
}

function pinClick() {
    const pinArea = document.getElementById('pinarea');
    pinArea.value = getPin();
}

const parentbody = document.getElementById('parentBody');
parentbody.addEventListener('click', function(even) {
    const result = even.target.innerText;
    if (isNaN(result)) {
        //its not a number;
    } else {
        //console.log(result);
        const formInput = document.getElementById('form-Control');
        formInput.value = formInput.value + result;
    }
})

function equalValue() {
    const pinAreaNum = document.getElementById('pinarea').value;
    const form = document.getElementById('form-Control').value;
    if (pinAreaNum === form) {
        const submitBtn = document.getElementById('pinMatcher');
        submitBtn.style.display = 'block';
    } else {
        const falsePin = document.getElementById('falsePin');
        falsePin.style.display = 'block';

    }
}

























//const pinAreaType = parseInt(pinArea);
// function randomPin() {
//     const random = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
//     const randomResult = random;
//     console.log(randomResult);
//     // const pinArea = document.getElementById('pinarea');
//     // const pinAreaType = parseInt(pinArea.value);
//     // document.getElementById('pinarea').Value = randomResult;

// }

// function pinClick() {

//     // randomPin();
//     const pinArea = document.getElementById('pinarea');
//     // const pinAreaType = parseInt(pinArea.value);
//     pinArea.value = randomPin();
// }
//formPage
// var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
// console.log(seq);
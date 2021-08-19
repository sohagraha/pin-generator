function pin() {
    let pinValue = Math.round((Math.random() * 10000));
    let valuestring = pinValue + '';

    if (valuestring.length == 4) {
        return pinValue
    }
    else
        return pin();
}

let generate = document.getElementById('generatePinId');
generate.addEventListener('click', function () {

    let pinVal = pin();
    document.getElementById('generatePinFId').value = pinVal;

    success.style.display = 'none'
    fail.style.display = 'none'

})

let attempt = 3;
let atmp = document.getElementById('attemptLeft');
atmp.innerText = attempt;

document.getElementById('keypad').addEventListener('click', function (event) {

    let viewbox = document.getElementById('inputUser').value;
    let key = event.target.innerText;
    if (key >= 0) {
        document.getElementById('inputUser').value = viewbox + key;
    }
    if (key == 'C') {
        document.getElementById('inputUser').value = ''
    }

})

let success = document.getElementById('trues');
let fail = document.getElementById('falses');

document.getElementById('btnId').addEventListener('click', function () {
    if (attempt > 0) {
        attempt--;
        atmp.innerText = attempt;
        let pinV = document.getElementById('generatePinFId').value;
        let test = document.getElementById('inputUser').value;
        if (pinV == test) {

            success.style.display = 'block'
            fail.style.display = 'none'
        }
        else {
            success.style.display = 'none'
            fail.style.display = 'block'
        }
    }
    else {
        console.log("please contact us ");
    }

})
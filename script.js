//your JS code here. If required.
const output = document.getElementById('output');
const input = document.querySelector('input');
const button = document.querySelector('#btn');

let delay = 0;
function updateDelay(interval) {
    delay += interval;
    return delay;
}

button.addEventListener('click', () => {

    const initialPromise = new Promise(function (resolve, reject) {
        let condition;
        condition = input.value ? true : false;        

        setTimeout(() => {

            if (condition) {

                const number = input.value;

                resolve(number);
            }
            else {
                reject('ERROR: no valid input found');
            }

        }, updateDelay(2000));
    })

    initialPromise
        .then(function print1(number) {
            setTimeout(() => {
                console.info('initital then, printing')
                displayOutput(number);
            }, updateDelay(2000));
            return number;
        })
        .then(function twice(number) {
            number *= 2;

            setTimeout(() => {
                console.info('doubling');
                displayOutput(number);
            }, updateDelay(1000));

            return number;
        })
        .then(function reduceThree(number) {

            number -= 1;
            setTimeout(() => {
                console.info('three plus')
                displayOutput(number);
            }, updateDelay(1000));

            return number;;
        })
        .then(function halve(number) {

            number = Math.floor(number / 2);
            setTimeout(() => {
                console.info('by 2');
                displayOutput(number);
            }, updateDelay(1000));

            return number;
        })
        .then(function addTen(number) {

            number += 10;
            setTimeout(() => {
                console.info('ten plus');
                displayOutput(number);
            }, updateDelay(1000));

            return number;
        })
        .catch((error) => {
            console.info(error);
        });


})


function displayOutput(number) {
    output.innerText = `Result: ${number}`;
} 
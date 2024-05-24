'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);


        // case: no input
        if (!guess) {
            document.querySelector('.message').textContent = '🙅🏻‍♂️ No number';

            // case: player inputs secret number
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🥳 Correct number!';
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#70B485';

            document.querySelector('.number').style.width = '30rem';



            // case: player inputs number too high
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '🍆 Too high!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥 You loose the game!';
                document.querySelector('.score').textContent = 0;
            }

            // case: player inputs number too low
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '🍌 Too low!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥 You loose the game!';
                document.querySelector('.score').textContent = 0;
            }
        }
        // case: player clicks button again and resets game
        document.querySelector('.again').addEventListener
            ('click', function () {
                secretNumber = Math.trunc(Math.random() * 20) + 1;
                score = 20;
                document.querySelector('.message').textContent = 'Start guessing...'
                document.querySelector('.score').textContent = score;
                document.querySelector('body').style.backgroundColor = '#222';
                document.querySelector('.number').style.width = '15rem';
                document.querySelector('.number').textContent = '?';
                document.querySelector('.guess').value = '';
            })


    });

function random(number) {
    return Math.ceil(Math.random() * number);
}

let name = prompt('Hallo. What is your name?');

while (name == '' || name == null) {
    name = prompt('Hallo. What is your name?');
}

alert('Hallo ' + name + '. This program generate the number from 1 to 100. Try to get, what number is that.');

let number = random(100);

for (let i = 5; i ; i--) {
    let guess = prompt('Guess, what the number?');
    let numberOfGuesses = i - 1;

    if (guess != number && i === 1) {
    alert("You didn't guess the number " + number);
    } else if (guess < number) {
    alert('Too less. Try again. You have ' + numberOfGuesses + ' more chance');
    } else if(guess > number){
    alert('Too much. Try again. You have ' + numberOfGuesses + ' more chance');
    } else {
    alert('You are absolutely right.' + number);
    break;
    }
}

alert('Program finished execution');
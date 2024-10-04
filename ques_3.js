//program to find odd or even number
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const checkOddEven = (number) => {
    return number % 2 === 0 ? `${number} is even.` : `${number} is odd.`;
};
const startREPL = () => {
    rl.question('Enter a number: ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Goodbye!');
            rl.close();
        } else {
            const number = parseInt(input);
            if (!isNaN(number)) {
                console.log(checkOddEven(number));
            } else {
                console.log('Please enter a valid number.');
            }
            startREPL();
        }
    });
};
startREPL();

/*output:
Enter a number : 7
7 is odd.
Enter a number : 10
10 is even.
Enter a number : hello
Please enter a valid number.
Enter a number: exit
Goodbye!
*/

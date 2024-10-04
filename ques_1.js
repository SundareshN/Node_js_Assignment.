//Blocking code Example
function blockingOperation() {
    console.log("Starting blocking operation");
    const start = Date.now();
    while (Date.now() - start < 3000) {
    }
    console.log("Blocking operation completed.");
}

function main() {
    blockingOperation();
    console.log("Continuing with the rest of the program");
}

main();

/*output:
Starting blocking operation
Blocking operation completed.
Continuing with the rest of the program
*/

//Non-Blocking Code Example
function nonBlockingOperation() {
    console.log("Starting non-blocking operation");
    setTimeout(() => {
        console.log("Non-blocking operation completed.");
    }, 3000); 
}

function main() {
    nonBlockingOperation();
    console.log("Continuing with the rest of the program");
}

main();

/*output:
Starting non-blocking operation
Continuing with the rest of the program
# (waits for about 3 seconds)
Non-blocking operation completed.
*/
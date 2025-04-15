// Function to check if a number is prime
function checkPrime() {
    let num = document.getElementById("primeInput").value;
    let resultElement = document.getElementById("result");

    // Validate input
    if (num === "" || isNaN(num) || num < 1) {
        resultElement.textContent = "Please enter a valid positive number.";
        resultElement.style.color = "red";
        return;
    }

    num = parseInt(num);
    
    if (num < 2) {
        resultElement.textContent = `${num} is NOT a prime number.`;
        resultElement.style.color = "red";
        return;
    }

    // Prime number check using efficient algorithm
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Display result
    if (isPrime) {
        resultElement.textContent = `${num} is a PRIME number!`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `${num} is NOT a prime number.`;
        resultElement.style.color = "red";
    }
}

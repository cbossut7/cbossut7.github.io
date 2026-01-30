function calculateSum() {
    // 1. Get the values from the input fields
    // const input1 = document.getElementById("strin").value;

    // 2. Convert the input strings to numbers (using parseFloat to allow decimals)
    // const num1 = parseFloat(input1);

    // // Optional: Basic validation to ensure inputs are valid numbers
    // if (isNaN(num1) || isNaN(num2)) {
    //     document.getElementById("result").textContent = "Invalid input";
    //     return;
    // }

    const str = document.getElementById("str-in").value;

    let sum = 1; 
    for (let letter of str) {
        let val = letter.charCodeAt(0);
        sum = ((sum + 1) * val) %1809;
        console.log(letter);
    }

    // 3. Perform the calculation
    // const sum = num1 + num2;

    // 4. Display the result
    document.getElementById("result").textContent = sum;
}

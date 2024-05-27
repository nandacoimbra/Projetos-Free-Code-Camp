function reverseString(str) {
    return str.split('').reverse().join('');
}

function checkInput() {
    const input = document.getElementById("text-input");
    const description = document.querySelector(".description");
    
    if (input.value === "") {
        alert("Please input a value");
    } else {
        description.style.display='none';
        let cleanedString = input.value.replace(/[^a-zA-Z0-9]/g, '');
        // document.getElementById("result").innerText = cleanedString;
        let lowerCaseString = cleanedString.toLowerCase();
        // document.getElementById("result").innerText += lowerCaseString;
        let reversedString = reverseString(lowerCaseString);

        if (lowerCaseString === reversedString) {
            document.getElementById("result").innerText = `${input.value} is a palindrome`;
        }else{
            document.getElementById("result").innerText = `${input.value} is not a palindrome`;
        }
    }
}
// palindrome function

document.getElementById("check").addEventListener("click", function () {

    // get input
    let word = document.getElementById("input").value;
    let revWord = "";
    
    for (let i = word.length - 1; i >= 0; i--) {
        let character = word.substr(i, 1);
        revWord += character;
    }
    if (word == revWord) {
        document.getElementById("output").innerText = `${word} is a Palindrome!` 
    }
    else {
        document.getElementById("output").innerText = `${word} is a NOT a Palindrome!` 
    }
});

// Clear the input and output
document.getElementById("clear").addEventListener("click", function () {
    
    document.getElementById("input").value="";  
    document.getElementById("output").innerText = "";
});
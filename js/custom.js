
// palindrome function


document.getElementById("check").addEventListener("click", function(){
    let word = document.getElementById("input").value; 
    for (let i = 0, len = word.length - 1; i < length / 2; i++) {
    if (word[i] !== word[length - i]) {
          document.getElementById('output').innerText= "sorry this is not a palindrome."
    }
    else  document.getElementById('output').innerText= "you have a palindrom!"
    }
    
}); 

document.getElementById("clear").addEventListener("clear", function(){
    // Clear the word the user entered
    document.getElementById("input").reset();  
 
});
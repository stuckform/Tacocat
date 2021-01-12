      // custom JS
      // piece of code that knows what to do when the button is clicked addEventListener.
      document.getElementById("solve").addEventListener("click", function () {
        // step 1: collect the number the user entered.
        // declare a locale var named num1
        // then set it equal to whatever the user typed.
        let num1 = document.getElementById("input1").value;
        // step 2: collect the word the user entered
        let word2 = document.getElementById("input2").value;
        // step 3: print out the number and the word they enter
        // use JS to find the output element and then add data.
        document.getElementById("output1").innerHTML =
          `the number you entered is <span class="boldy">${num1}</span>`;

        document.getElementById("output2").innerHTML = `the number you entered is <span class="boldy">${word2}</span>`;
      });





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
    document.getElementById("input").value = "";  
 
});
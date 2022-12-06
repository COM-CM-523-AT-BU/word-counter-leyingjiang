// put your globals here - hint: select elements from the HTML
const textInput = document.getElementById("text-area");
const countBtn = document.getElementById("countBtn");
const wordCountInput = document.getElementById("wordCountInput");
const findWordInput = document.getElementById("findWordInput");
const findBtn = document.getElementById("findBtn");
const wordFoundInput = document.getElementById("wordFoundInput");

// dont' forget to add event listeners to the buttons
countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);

function countWords() {
  // your code here
  const text = textInput.value;
  const words = text.split(" ");
  console.log(words.length);
  // call printData
  printData(words.length + " words", wordCountInput);
}

function findWords() {
  // put your local variable for the empty array here
  let foundWords = [];
  // remainder of your code follows
  const text = textInput.value;
  const words = text.split(" ");
  
  words.forEach((item) => {
    if (item == findWordInput.value){
      foundWords.push(item);
    }});
    console.log(findWords.length);
  // call printData
  printData(foundWords.length + " instances", wordFoundInput);
}

function printData(message, destination) {
  // your code here... one line
  destination.value = message;
}




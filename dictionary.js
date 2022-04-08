const newWord = document.getElementById("newWord");
const addButton = document.getElementById("addButton");
const messageAdd = document.getElementById("messageAdd");
const searchWord = document.getElementById("searchWord");
const searchButton = document.getElementById("searchButton");
const messageSearch = document.getElementById("messageSearch");
const words = [];

addButton.addEventListener('click', addWords);
searchButton.addEventListener('click', searchWords);



function addWords() {
  let inputWord = newWord.value;
  if(inputWord !== "" && words.indexOf(inputWord) == -1) {
    words.push(inputWord);
    messageAdd.textContent = 'The word is added to dictionary.';
  } else if (inputWord === "") {
    messageAdd.textContent = "You must enter a word before click the 'Submit' button.";
  } else if (words.indexOf(inputWord) > -1) {
    messageAdd.textContent ="This word already exists in dictionary";
  }
}

function searchWords() {
  let searchedWord = searchWord.value;
  if (words.indexOf(searchedWord) > -1) {
    messageSearch.textContent = "This word exists in dictionary";
  } else if (searchedWord === "") {
    messageSearch.textContent = "Please type a word";
  } else {
    messageSearch.textContent = "This word doesn't exist in dictionary";
  }
}

let textarea = document.getElementById("textarea");

let btn = document.getElementById("btn");

let showWords = document.getElementById("showWords");

let showCharacters = document.getElementById("showCharacters");

// it stores the words from textarea.

btn.addEventListener("click", function(){
  
  let text;
  
  //   it fetch the whole text present in the textarea.   
  text = textarea.value;

  text = text.trim();

  let count_words = text.split(' ');

  showWords.innerHTML = `Total Words: ${count_words.length}`;

  showCharacters.innerHTML = `Total Characters: ${text.length} (including spaces)`;
  
});



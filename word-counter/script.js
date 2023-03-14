const textareaElement = document.getElementById("story");
const wordCountElement = document.getElementById("word-count");
const charCountElement = document.getElementById("char-count");

textareaElement.addEventListener("input", function onInput() {
  const allText = textareaElement.value;
  const charLength = allText.length;
  const splittedText = allText.split(" ");
  let wordCount = 0;

  for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] !== "") {
      wordCount++;
    }
  }

  // Autres manières de filtrer
  const splittedTextWithoutEmptyString = splittedText.filter(
    function filterFunction(word) {
      return word !== "";
    }
  );

  const splittedTextWithRegex = allText.split(/\s+/);

  charCountElement.innerText = charLength;
  wordCountElement.innerText = wordCount;

  console.log(
    "input",
    splittedTextWithoutEmptyString.length,
    splittedTextWithRegex.length,
    wordCount
  );
});

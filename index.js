const wordInput = document.getElementById("wordInput");
const searchbtn = document.getElementById("searchbtn");
const wordOutput = document.getElementById("wordOutput");
const syn = document.getElementById("syn");
const meaning = document.getElementById("meaning");
const phonetics = document.getElementById("phone");
const formEl = document.querySelector("form");
const result = document.querySelector("div");
var numid = 0;
const dark = document.getElementById("darkbtn");
const body = document.querySelector("body");


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const wordValue = wordInput.value;
    console.log(wordValue);
    getWordData(wordValue);
    result.style.display = "block";
})

async function getWordData(wordValue) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordValue}`)
        if (!response.ok) {
            throw new error("Network response was not ok")
        }

        const data = await response.json()
        console.log(data);
        wordOutput.innerHTML = `${data[0].word} <sub>${data[0].meanings[0].partOfSpeech}</sub>`;
        syn.innerHTML = `Synonyms: ${data[0].meanings[0].synonyms}`;
        meaning.innerHTML = `1: ${data[0].meanings[0].definitions[0].definition} <br><hr><br> 2: ${data[0].meanings[0].definitions[1].definition}  <br><hr><br>3 : ${data[0].meanings[0].definitions[2].definition}`;

        phonetics.innerHTML = `Phonetics: ${data[0].phonetic}`;
        // condition.innerHTML = `${data.weather[0].description}`;
        // icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    } catch (error) {
        alert("Sorry there was an error..." + error);
    }
}
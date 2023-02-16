// Your code here


const charactersList = document.querySelector("#character-bar");
const characterInfo = document.querySelector("#detailed-info");
const characterName = document.querySelector("#name");
const characterImage = document.querySelector("#image");
const voteCount = document.querySelector("#vote-count");
let currentCharacter

fetch('http://localhost:3000/characters')
.then(Response => Response.json())
.then(data => data.forEach(renderCharacters));

const renderCharacters = (character) => {
    console.log(character)
    const span = document.createElement('span');
    span.textContent = character.name;
    span.style.cursor = 'pointer';
    charactersList.append(span);
    span.addEventListener('click', () => {
        currentCharacter = character
        showInfo(character)
    })
};
const showInfo = (character) => {
    characterName.textContent = character.name;
    characterImage.src = character.image
    voteCount.textContent = character.votes
}

const form = document.querySelector("#votes-form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    currentCharacter.votes += parseInt(e.target.votes.value)
    showInfo(currentCharacter)
})

document.querySelector("#reset-btn").addEventListener("click", () => {
    currentCharacter.votes = 0
    showInfo(currentCharacter)
})
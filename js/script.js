var frontImage = document.getElementById("frontImage");
var backImage = document.getElementById("backImage");

frontImage.addEventListener("mouseover", function() {
  frontImage.classList.add("hidden");
  backImage.classList.remove("hidden");
});

frontImage.addEventListener("mouseout", function() {
  frontImage.classList.remove("hidden");
  backImage.classList.add("hidden");
});

const selectedWords = ["frontend", "web", "development", "React", "developer"];
const paragraph = document.getElementById("typing-text");

function wrapSelectedWords() {
  const textContent = paragraph.textContent;
  let updatedHTML = '';

  const words = textContent.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (selectedWords.includes(word)) {
      updatedHTML += `<span class="red-animation">${word}</span>`;
    } else {
      updatedHTML += `${word}`;
    }

    if (i !== words.length - 1) {
      updatedHTML += ' ';
    }
  }

  paragraph.innerHTML = updatedHTML;
}

wrapSelectedWords();

const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.classList.add('pale-blue');
  });

  section.addEventListener('mouseout', () => {
    section.classList.remove('pale-blue');
  });
});



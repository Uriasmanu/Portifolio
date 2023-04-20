function changePage(page) {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        document.querySelector("body").innerHTML = data;
      });
  }

const birthday = new Date('2001-01-24'); // Insira aqui sua data de nascimento
const ageElement = document.getElementById('age');

function updateAge() {
  const age = calculateAge(birthday);
  const ageSpan = document.createElement('span');
  ageSpan.classList.add('destaques');
  ageSpan.textContent = age;
  ageElement.appendChild(ageSpan); // Adiciona o span como filho do elemento age
}

function calculateAge(birthday) {
  const ageDiffMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.addEventListener('DOMContentLoaded', updateAge); // Adicione essa linha para chamar updateAge() no carregamento da página inicial

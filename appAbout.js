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

updateAge(); // Chame a função para atualizar a idade no carregamento da página

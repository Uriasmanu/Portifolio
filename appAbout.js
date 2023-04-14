const birthday = new Date('2001-01-24'); // Insira aqui sua data de nascimento
const ageElement = document.getElementById('age');

function updateAge() {
  const age = calculateAge(birthday);
  ageElement.innerHTML = `Age: ${age}`;
}

function calculateAge(birthday) {
  const ageDiffMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

updateAge(); // Chame a função para atualizar a idade no carregamento da página


function generateStatesList () {
  const selectList = document.getElementById('states');
  const statesArray = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];
  const statesInitialsArray = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  for (let index = 0; index < statesArray.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = statesArray[index];
    option.setAttribute('value', statesInitialsArray[index]);
    selectList.appendChild(option);
  }
}

generateStatesList ();
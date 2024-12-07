const getStringFeedback = (data, configuracao) => {
  let result = '';
  if (data.pesoAroma < configuracao.pesoAroma || data.pesoAroma > configuracao.pesoAroma) {
    result += `Aroma real: ${configuracao.pesoAroma} Aroma avaliação: ${data.pesoAroma} `;
  }else{ result += `Aroma Perfeito. `}

  if (data.pesoCor < configuracao.pesoCor || data.pesoCor > configuracao.pesoCor) {
    result += `Cor real: ${configuracao.pesoCor} Cor avaliação: ${data.pesoCor} `;
  }else{ result += `Cor Perfeita. `}

  if (data.pesoSabor < configuracao.pesoSabor || data.pesoSabor > configuracao.pesoSabor) {
    result += `Sabor real: ${configuracao.pesoSabor} Sabor avaliação: ${data.pesoSabor} `;
  }else{ result += `Sabor Perfeito. `}

  if (data.pesoCorpo < configuracao.pesoCorpo || data.pesoCorpo > configuracao.pesoCorpo) {
    result += `Corpo real: ${configuracao.pesoCorpo} Corpo avaliação: ${data.pesoCorpo} `;
  }else{ result += `Corpo Perfeito. `}

  if (data.pesoPersistencia < configuracao.pesoPersistencia || data.pesoPersistencia > configuracao.pesoPersistencia) {
    result += `Persistencia real: ${configuracao.pesoPersistencia} Persistencia avaliação: ${data.pesoPersistencia} `;
  }else{ result += `Persistencia Perfeita. `}

  let valorData = data.pesoAroma + data.pesoCor + data.pesoSabor + data.pesoCorpo + data.pesoPersistencia;
  let valorConfiguracao = data.pesoAroma + data.pesoCor + data.pesoSabor + data.pesoCorpo + data.pesoPersistencia;

  if ( valorData === valorConfiguracao ) {
    result += `Parece que temos um especialista.`
  }else { result += `Continua a trabalhar estas quase.`}

  return result;
}

module.exports = {getStringFeedback};

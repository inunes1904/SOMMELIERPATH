const getStringFeedback = (data, configuracao) => {
  let result = '';
  if (data.pesoAroma < configuracao.pesoAroma || data.pesoAroma > configuracao.pesoAroma) {
    result += `Aroma real: ${configuracao.pesoAroma} Aroma avaliação: ${data.pesoAroma} \n`;
  }else{ result += `Aroma Perfeito. \n`}

  if (data.pesoCor < configuracao.pesoCor || data.pesoCor > configuracao.pesoCor) {
    result += `Cor real: ${configuracao.pesoCor} Cor avaliação: ${data.pesoCor} \n`;
  }else{ result += `Cor Perfeita. \n`}

  if (data.pesoSabor < configuracao.pesoSabor || data.pesoSabor > configuracao.pesoSabor) {
    result += `Sabor real: ${configuracao.pesoSabor} Sabor avaliação: ${data.pesoSabor} \n`;
  }else{ result += `Sabor Perfeito. \n`}

  if (data.pesoCorpo < configuracao.pesoCorpo || data.pesoCorpo > configuracao.pesoCorpo) {
    result += `Corpo real: ${configuracao.pesoCorpo} Corpo avaliação: ${data.pesoCorpo} \n`;
  }else{ result += `Corpo Perfeito. \n`}

  if (data.pesoPersistencia < configuracao.pesoPersistencia || data.pesoPersistencia > configuracao.pesoPersistencia) {
    result += `Persistencia real: ${configuracao.pesoPersistencia} Persistencia avaliação: ${data.pesoPersistencia} \n`;
  }else{ result += `Persistencia Perfeita. \n`}

  let valorData = Number(data.pesoAroma) + Number(data.pesoCor) + Number(data.pesoSabor) + Number(data.pesoCorpo) + Number(data.pesoPersistencia);
  let valorConfiguracao = configuracao.pesoAroma + configuracao.pesoCor + configuracao.pesoSabor
    + configuracao.pesoCorpo + configuracao.pesoPersistencia;

  if ( valorData <= valorConfiguracao+3 && valorData >= valorConfiguracao-3 ) {
    result += `Parece que temos um especialista.`
  }else { result += `Continua a trabalhar estas quase.`}

  return result;
}

module.exports = {getStringFeedback};

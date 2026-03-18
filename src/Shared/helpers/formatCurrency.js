function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}
module.exports = formatCurrency;


// Exemplo de uso
/*
const formatCurrency = require('../../shared/helpers/formatCurrency');
console.log(formatCurrency(123.456)); // $123.46
*/
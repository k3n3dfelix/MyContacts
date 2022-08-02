export default function formatPhone(phoneNumber) {
  return phoneNumber
    .replace(/\D/g, '') //limpa a string e aceita somente numeros
    .replace(/^(\d{2})\B/, '($1) ') //pegao os dois primeiros caracteres e coloca entre parenteses
    .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3'); // deixa o nono digito como opcional e separa o restante por hifen
}

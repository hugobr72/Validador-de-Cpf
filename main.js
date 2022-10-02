var cpf = document.querySelector('#input');
var validar = document.querySelector('.validar');
const texto = document.querySelector('.texto h3');

validar.addEventListener('click', function () {
  texto.innerHTML = ''
  var replaceCpf = replace(cpf.value)
  var soma = 0
  var resto = 0

  for (c in replaceCpf) {
    if (c == 0) soma = soma + (replaceCpf[c] * 11)

    else if (c == 1) soma = soma + (replaceCpf[c] * 10)

    else if (c == 2) soma = soma + (replaceCpf[c] * 9)

    else if (c == 3) soma = soma + (replaceCpf[c] * 8)

    else if (c == 4) soma = soma + (replaceCpf[c] * 7)

    else if (c == 5) soma = soma + (replaceCpf[c] * 6)

    else if (c == 6) soma = soma + (replaceCpf[c] * 5)

    else if (c == 7) soma = soma + (replaceCpf[c] * 4)

    else if (c == 8) soma = soma + (replaceCpf[c] * 3)

    else if (c == 9) soma = soma + (replaceCpf[c] * 2)

  }

  resto = (soma * 10) % 11
  if (resto == 11 || resto == 10) {
    resto = 0
  }

  if (replaceCpf[10] == resto) {
    texto.classList.remove("invalido")
    texto.innerHTML = `O seu Cpf de numero ${replaceCpf} é válido`
  } else {
    texto.classList.add("invalido")
    texto.innerHTML = `O seu Cpf de numero ${replaceCpf} é inválido`

  }
})

function replace(e) {
  e = e.replace('.', '')
  e = e.replace('.', '')
  e = e.replace('-', '')
  return e
};






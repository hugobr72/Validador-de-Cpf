function Validador() {
  this.cpf = document.querySelector('#input');
  this.validar = document.querySelector('.validar');
  this.texto = document.querySelector('.texto h3');

  this.validar = addEventListener('click', () => {
    const replaceCpf = this.replace(this.cpf.value)
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
      this.texto.classList.remove("invalido")
      this.texto.innerHTML = `O seu Cpf de numero ${replaceCpf} é válido`
    } else {
      this.texto.classList.add("invalido")
      this.texto.innerHTML = `O seu Cpf de numero ${replaceCpf} é inválido`
    }
  })


  this.replace = (e) => {
    e = e.replace('.', '')
    e = e.replace('.', '')
    e = e.replace('-', '')
    return e
  };

  

  this.inicia = () => {
    this.cpf.focus();
    this.validar();

  }
}

const validador = new Validador()
validador.inicia()

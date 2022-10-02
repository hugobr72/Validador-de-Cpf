function Validador() {
  this.cpf = document.querySelector('#input');
  this.validar = document.querySelector('.validar');
  this.texto = document.querySelector('.texto h3');

  this.validar = addEventListener('click', () => {
    const replaceCpf = this.replace(this.cpf.value)
    var soma = 0
    var resto = 0
    var cont = 11

    for (c in replaceCpf) {
      if (c <= 8 ) soma = soma + (replaceCpf[c] * cont)
      cont -=1
    }

    resto = (soma * 10) % 11
    if (resto == 11 || resto == 10) resto = 0
    
    if (replaceCpf[10] == resto) {
      this.texto.classList.remove("invalido")
      this.texto.innerHTML = `O seu Cpf de número ${replaceCpf} é válido`
    } else {
      this.texto.classList.add("invalido")
      this.texto.innerHTML = `O seu Cpf é inválido`
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

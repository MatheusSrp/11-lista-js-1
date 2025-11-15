/**** Escreva o código abaixo 👇******/
const somar = (a, b) => {
  return (a + b);
}
console.log(somar(2, 6));

const multiplicar = (a, b) => {
  return (a * b);
}
console.log(multiplicar(2, 5));

const subtrair = (a, b) => {
  return (a - b);
}
console.log(subtrair(7, 4));

const dividir = (a, b) =>{
  if(a == 0 || b == 0){
   throw new Error("Erro: divisão por zero")
  }
  else
    return (a / b);
}
console.log(dividir(10, 2)); 

const calcularMedia = (nota1, nota2, nota3, nota4) => {
  return ((nota1 + nota2 + nota3 + nota4) / 4);
}
console.log(calcularMedia(3, 5, 2, 4));

const elevarPotencia = (base, expoente) => {
  return (Math.pow(base, expoente));
}
console.log(elevarPotencia(2, 3));

const calcularAreaRetangulo = (largura, altura) => {
  return (multiplicar(largura, altura));
}
console.log(calcularAreaRetangulo(10, 2));

const verificarParOuImpar = (numero) => {
  if(numero % 2 === 0) {
    return ("par");
  } else{
    return ("ímpar");
  }
}
console.log(verificarParOuImpar(10));
console.log(verificarParOuImpar(5));

const calcularRaizQuadrada = (numero) => {
  return (Math.sqrt(numero));
}
console.log(calcularRaizQuadrada(25));

const calcularHipotenusa = (cateto1, cateto2) => {
  const quadrado1 = elevarPotencia(cateto1, 2);
  const quadrado2 = elevarPotencia(cateto2, 2);
  const somar_quadrado = somar(quadrado1, quadrado2);
  const raiz_quadrado = calcularRaizQuadrada(somar_quadrado);
  return (raiz_quadrado);
  
}
console.log(calcularHipotenusa(10, 10));


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};

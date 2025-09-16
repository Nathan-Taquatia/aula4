const usuario = 'Bruce Wayne';
const depositos = [100, 200, 200, 400];
const saques = [200, 200, 100];

let saldoInicial = 0;
console.log('teste');

let dep = 0;
for(let i =0; i<depositos.length;i++){
    console.log('Depósito de: '+depositos[i]+' feito')
  dep= dep+depositos[i];
        console.log('saldo '+dep);
}
let saldoAtual = saldoInicial+dep;
console.log('O saldo atual é: '+saldoAtual)
    
let sub =0;
for(let i = 0; i<saques.length;i++){
    console.log('Saque de '+saques[i]+' realizado');
    sub = sub+depositos[i];
    console.log('O total de saques no momento é: '+sub);
}
    saldoAtual= saldoAtual-sub;
    console.log('O seu saldo atual é: '+saldoAtual);

let real = 1;
let dolar = 6;
let euro =  7;

console.log('Tipo de moeda real, valor inserido: '+saldoAtual*real);
console.log('Tipo de moeda é dolar, valor inserido é: '+saldoAtual*dolar);
console.log('Tipo de moeda euro, valor inserido é: '+saldoAtual*euro);
let moeda=euro;

console.log('Informe o tipo de moeda: '); if (moeda== real) {
    console.log('Valor em real é: '+saldoAtual*real);
    
} else if (moeda == dolar){
        console.log('Valor em dolar é: '+saldoAtual*dolar);

    
}else{
        console.log('Valor em euro é: '+saldoAtual*euro);

}




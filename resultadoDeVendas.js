const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const meses = ["janeiro", "fevereiro", "março"];
let vendas = [];
let posicao = 0;

function perguntarVenda() {
  rl.question("Venda de " + meses[posicao] + ": R$ ", function (valor) {
    vendas[posicao] = Number(valor);
    posicao = posicao + 1;

    if (posicao < 3) {
      perguntarVenda();
    } else {
      let total = 0;

      // Laço de repetição para somar as 3 vendas.
      for (let i = 0; i < 3; i++) {
        total = total + vendas[i];
      }

      const meta = 17000;

      console.log("Total de vendas: R$ " + total);

      // Condição para ver se a meta foi alcançada.
      if (total >= meta) {
        console.log("Meta atingida!");
      } else {
        console.log("Meta não atingida.");
      }

      rl.close();
    }
  });
}

perguntarVenda();

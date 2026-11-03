// Exercício: resultado de vendas
// Assuntos usados: variáveis, entrada, contas e condição.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Venda de janeiro: R$ ", function (janeiro) {
  rl.question("Venda de fevereiro: R$ ", function (fevereiro) {
    rl.question("Venda de março: R$ ", function (marco) {
      janeiro = Number(janeiro);
      fevereiro = Number(fevereiro);
      marco = Number(marco);

      const total = janeiro + fevereiro + marco;
      const meta = 17000;

      console.log("Total de vendas: R$ " + total);

      if (total >= meta) {
        console.log("Meta atingida!");
      } else {
        console.log("Meta não atingida.");
      }

      rl.close();
    });
  });
});

const meses = ["janeiro", "fevereiro", "março"];
const vendas = [1000, 2000, 3000];
let total = 0;
const meta = 17000;

for (let i = 0; i < 3; i++) {
  console.log("Venda de " + meses[i] + ": R$ " + vendas[i]);
  total = total + vendas[i];
}

console.log("Total de vendas: R$ " + total);

if (total >= meta) {
  console.log("Meta atingida!");
} else {
  console.log("Meta não atingida.");
}
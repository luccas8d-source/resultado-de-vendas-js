const vendas = [1000, 2000, 3000];
let total = 0;

for (let i = 0; i < 3; i++) {
  console.log("Venda: R$ " + vendas[i]);
  total = total + vendas[i];
}

const meta = 17000;

console.log("Total de vendas: R$ " + total);

if (total >= meta) {
  console.log("Meta atingida!");
} else {
  console.log("Meta não atingida.");
}
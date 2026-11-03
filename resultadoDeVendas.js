// Conversão do algoritmo "Vendas" (Portugol) para JavaScript.
// Atividade: Conversão da Linguagem - Jovem Tech.

const readline = require("readline");

const meses = ["Janeiro", "Fevereiro", "Março"];
const META_TRIMESTRAL = 17000;

function calcularResultado(vendas) {
  let total = 0;
  let maiorVenda = -Infinity;
  let mesesComMaiorVenda = [];

  // Laço de repetição: percorre as vendas dos três meses.
  for (let i = 0; i < vendas.length; i++) {
    const vendaAtual = vendas[i];
    total += vendaAtual;

    if (vendaAtual > maiorVenda) {
      maiorVenda = vendaAtual;
      mesesComMaiorVenda = [meses[i]];
    } else if (vendaAtual === maiorVenda) {
      mesesComMaiorVenda.push(meses[i]);
    }
  }

  return { total, metaAtingida: total >= META_TRIMESTRAL, maiorVenda, mesesComMaiorVenda };
}

function iniciarPrograma() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  function perguntar(pergunta) { return new Promise((resolve) => rl.question(pergunta, resolve)); }

  async function lerVenda(mes) {
    let valor;
    do {
      valor = Number(await perguntar(`Qual foi o valor de vendas de ${mes}? R$ `));
      if (!Number.isFinite(valor) || valor < 0) {
        console.log("Digite um valor numérico igual ou maior que zero.");
      }
    } while (!Number.isFinite(valor) || valor < 0);
    return valor;
  }

  async function executar() {
    let continuar = "s";
    while (continuar === "s") {
      const vendas = [];
      for (const mes of meses) { vendas.push(await lerVenda(mes)); }
      const resultado = calcularResultado(vendas);
      console.log(`\nTotal de vendas no trimestre: R$ ${resultado.total.toFixed(2)}`);
      if (resultado.metaAtingida) {
        console.log("Meta trimestral atingida!");
      } else {
        console.log("Meta trimestral não atingida.");
      }
      console.log(`Maior valor de vendas: R$ ${resultado.maiorVenda.toFixed(2)}`);
      console.log(`Mês(es) com maior venda: ${resultado.mesesComMaiorVenda.join(" e ")}`);
      continuar = (await perguntar("\nDeseja fazer outra consulta? (s/n): " )).trim().toLowerCase();
      while (continuar !== "s" && continuar !== "n") {
        continuar = (await perguntar("Resposta inválida. Digite s ou n: " )).trim().toLowerCase();
      }
    }
    console.log("Programa encerrado.");
    rl.close();
  }
  executar();
}

if (require.main === module) { iniciarPrograma(); }
module.exports = { calcularResultado, META_TRIMESTRAL };

# Resultado de Vendas

## Atividade: Conversão da Linguagem

Este projeto converte para **JavaScript** o algoritmo em Portugol chamado `Vendas`, criado anteriormente para o exercício **ResultadoDeVendas**.

## Por que este código foi escolhido?

O algoritmo de vendas foi escolhido porque já tinha decisões importantes: ele verifica se a meta trimestral foi atingida e descobre o maior valor entre janeiro, fevereiro e março. Isso permite mostrar bem o uso de estruturas condicionais e laços de repetição em JavaScript.

## O que o programa faz?

1. Solicita o valor de vendas de janeiro, fevereiro e março.
2. Soma os valores para encontrar o total do trimestre.
3. Informa se a meta de R$ 17.000,00 foi atingida.
4. Mostra a maior venda e o mês, ou os meses, que tiveram esse valor.

## Melhorias realizadas

- **Laço `for`:** percorre os três meses sem repetir o mesmo código várias vezes.
- **Laço `while`:** permite fazer uma nova consulta sem reiniciar o programa.
- **Validação dos valores:** não aceita vendas negativas ou texto no lugar de número.
- **Empate:** se dois ou três meses tiverem a mesma maior venda, todos são mostrados.
- **Meta corrigida:** a meta é considerada atingida quando o total é igual ou maior que R$ 17.000,00.

## Estruturas usadas

- `if`, `else if` e `else`: verificam condições, como meta atingida e maior venda.
- `for`: percorre os meses e soma as vendas.
- `do...while`: repete a pergunta caso seja digitado um valor inválido.
- `while`: mantém o sistema funcionando para uma nova consulta.
- `function`: organiza a lógica para calcular o resultado.

## Como executar

Com o Node.js instalado, execute no terminal:

```bash
node resultadoDeVendas.js
```

## Autora
Monansci

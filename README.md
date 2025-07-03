# 🧪 Teste de Pacotes Node.js

Este repositório foi criado como um teste básico para entender o funcionamento de pacotes no Node.js utilizando **ES Modules** (`type: "module"`), com foco na utilização das bibliotecas [`chalk`](https://www.npmjs.com/package/chalk) e [`log-symbols`](https://www.npmjs.com/package/log-symbols).

## 📁 Estrutura do Projeto

```
packages-basic/
├── index.js
├── package.json
```

## 📦 Pacotes Utilizados

- **chalk**: usado para estilizar o texto no terminal com cores.
- **log-symbols**: fornece símbolos visuais para logs (✔, ✖, ℹ, ⚠).

## 📜 Código de Exemplo (`index.js`)

```js
import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.red("Hello World"));
console.log(logSymbols.success, "Servidor iniciado com sucesso");
console.log(logSymbols.error, "Servidor com problema");
```

## ▶️ Como Executar

1. Clone o repositório:

2. Instale as dependências:

```bash
npm install
```

3. Execute o script:

```bash
node src/index.js
```

## 🛠️ Observações

- O projeto usa o modo `module` (ESM), então a importação de pacotes segue o padrão `import`.
- Apesar de `log-symbols` estar listado como `devDependency`, ele também é usado em tempo de execução neste exemplo.

## ✨ Saída Esperada

Ao rodar o script, o terminal exibirá:

- A frase "Hello World" em vermelho.
- Um símbolo de sucesso seguido de "Servidor iniciado com sucesso".
- Um símbolo de erro seguido de "Servidor com problema".

import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.red("Hello World"));
console.log(logSymbols.success, "Servidor iniciado com sucesso");
console.log(logSymbols.error, "Servidor com problema");
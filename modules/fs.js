const fs = require("fs");
const path = require("path");

//criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Pasta criada com sucesso!");
});

//criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "Hello World!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);

//adicionar conteudo ao arquivo
fs.appendFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "\nHello Node.js!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo atualizado com sucesso!");
  }
);

//ler arquivo
fs.readFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log(data);
  }
);

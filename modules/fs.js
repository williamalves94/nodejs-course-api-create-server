const fs = require("fs");
const path = require("path");

// mkdir cria uma pasta
//fs.mkdir(path.join(__dirname, "/testing"), (error) => {
//  if (error) {
//    return console.log("Erro: ", error);
//  }
//  console.log("Pasta criada com sucesso!");
//});

//writeFile cria um arquivo
fs.writeFile(
  path.join(__dirname, "/testing", "testing.html"),
  "hello node",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");

    fs.appendFile(
      path.join(__dirname, "/testing", "testing.txt"),
      "hello world",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );
    fs.readFile(
      path.join(__dirname, "/testing", "testing.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log(data);
      }
    );
  }
);

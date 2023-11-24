const path = require("path");

// Basename nome do arquivo que esta sendo executado no momento.
console.log(path.basename(__filename));

// Dirname: nome do diretório atual.
console.log(path.dirname(__dirname));

// Extname: extensão(.js) do arquivo atual.
console.log(path.extname(__filename));

// Parse: cria um objeto com informações do arquivo atual.
console.log(path.parse(__filename));

// junta o caminhos dos arquivos
// exemplo da junção
// caminho original: C:\\Users\\William\\Desktop\\nodejs-course\\modules'
console.log(path.join(__dirname, "testing...", "testing.html"));
// C:\Users\William\Desktop\nodejs-course\modules\testing...\testing.html
// o join adicionou a string "testing..." e o arquivo "testing.html".

const fs = require('fs');

fs.readFile('teste.txt', (erro, dados) => {
    if (erro) {
        console.log(erro);
    }
    console.log(dados.toString());
});



fs.writeFile('./teste2.txt', 'test test test', () => {
    console.log("file written");
});  


fs.mkdir('./pasta', () => {
    console.log("folder created");
});

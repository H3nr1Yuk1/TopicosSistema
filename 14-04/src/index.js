//Instalar express: npm install express
//Instalar TypeScript: npm install typescript -D
//Inicializando o TypeScript: npx tsc --init
//Chamar express
const express = require('express');

//Criando um servidor web através do express
const app = express();

//Configurar a aplicação apra receber dados no formato JSON
app.use(express.json());

//Configurando uma requisição com o metodo HTTP GET para a raiz da aplicação
app.get("/", function(req, res){
    //Gerando uma resposta
    res.status(200).json({message : "Resposta enviada em JSON"});
});

//Receber informação pela URL
app.get("/:categoria/:produto", (req, res) => {
    // console.log(req.params.produto, req.params.categoria);
    // const produto = req.params.produto
    // const categoria = req.params.categoria
    // console.log(produto, categoria)

    const { produto, categoria } = req.params;
    res.status(200).json({ categoria, produto });
});

//Enviar informações pelo corpo da aplicação
app.post("/", (req, res) => {
    res.status(201).json(
        { mensage : "Categoria cadastrada!" , categoria : req.body}
    );
});

//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});
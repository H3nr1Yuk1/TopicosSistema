//Instalar express: npm install express
//Instalar TypeScript: npm install typescript -D
//Inicializando o TypeScript: npx tsc --init
//Instalar Tsx : npm i tsx -D
//Chamando tudo que foi instalado: npm i
//Chamar express
import express, { Request, Response } from 'express';
import { Produto } from './Models/produto.model';

//Criando um servidor web através do express
const app = express();

//Configurar a aplicação apra receber dados no formato JSON
app.use(express.json());

let produtos : Produto[] = [];

//Configurando uma requisição com o metodo HTTP GET para a raiz da aplicação
app.get("/", function(req : Request, res : Response) : Response{
    //Gerando uma resposta
    return res.status(200).json({message : "Listagem de produtos", listaProd : produtos});
});

//Receber informação pela URL
app.get("/:produto/:preco", (req : Request, res : Response) : Response => {
    const { preco, produto } = req.params;
    return res.status(200).json({ produto, preco });
});

//Enviar informações pelo corpo da aplicação
app.post("/", (req : Request, res : Response) : Response => {
    let produto : Produto = new  Produto();

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    
    produtos.push(produto);

    return res.status(201).json(
        { mensage : "Produto cadastrado!" , newProd : produto}
    );
});

//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});
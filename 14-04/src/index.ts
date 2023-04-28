//Instalar express: npm install express
//Instalar TypeScript: npm install typescript -D
//Inicializando o TypeScript: npx tsc --init
//Instalar Tsx : npm i tsx -D
//Chamando tudo que foi instalado: npm i
//Chamar express
import express from 'express';
import { router } from './Config/routes';


//Criando um servidor web através do express
const app = express();

//Configurar a aplicação apra receber dados no formato JSON
app.use(express.json());
app.use(router);

//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});
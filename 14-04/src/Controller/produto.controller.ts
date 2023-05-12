import { Request, Response } from 'express';
import { Produto } from '../Models/produto.model';

let produtos : Produto[] = [];

export class ProdutoController {
    cadastrar(req : Request, res : Response) : Response {
    let produto : Produto = new  Produto();
    const nome = req.body.nome;
    
    for (let x of produtos) {
        if (x.nome == nome) {
            return res.status(404).json(
                { message : "Produto já cadastrado!"}
            );
        }
    }
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    produtos.push(produto);

    return res.status(201).json(
        { mensage : "Produto cadastrado!" , newProd : produto}
    );
    }

    listar(req : Request, res : Response) : Response {
        return res.status(200).json(
            {message : "Listagem de produtos", listaProd : produtos}
        );
    }

    buscar(req : Request, res : Response) : Response {
        const { nome } = req.params;

        for (let x of produtos) {
            if (x.nome == nome){
                return res.status(200).json(
                    { message : "OK", dados : produtos }
                ); 
            }
        }
        return res.status(404).json(
            { message : "Produto não encontrado!"}
        );
    }

    apagar(req : Request, res : Response) : Response {
        const { nome } = req.params;

        for (let x of produtos) {
            if (x.nome == nome){
                const index = produtos.findIndex((x) => x.nome === nome);
                produtos.splice(index, 1);
                return res.status(200).json(
                    { message : "Produto apagado!" }
                ); 
            }
        }
        return res.status(404).json(
            { message : "Produto não encontrado!"}
        );
    }

    mudarPreco(req : Request, res : Response) : Response {
        const { nome } = req.params;

        for (let x of produtos) {
            if (x.nome == nome){
                const nPreco = req.body.novoPreco;
                const index = produtos.findIndex((x) => x.nome === nome);
                produtos[index].preco = nPreco;
                return res.status(200).json(
                    { message : "Novo preço cadastrado!" }
                ); 
            }
        }
        return res.status(404).json(
            { message : "Produto não encontrado!"}
        );
    }
}
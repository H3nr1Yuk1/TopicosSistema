import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { Produto } from "../../models/produto.model";

function DetalharProdutos(){
    const { id } = useParams();
    const [produto, setProduto] = useState<Produto>();

    useEffect(() => {
        axios
        .get(`http://localhost:3001/${id}`)
        .then((resposta) => {
            setProduto(resposta.data.data)
        })
        .catch((erro) => {
            console.log(erro);
          });
    }, [id]);

    if (!produto) {
        return <div>Carregando...</div>;
    }
    
    return(
        <>
            <div>
                <h3>Nome do produto: {produto.nome}</h3>
                <h3>Preço do produto: {produto.preco}</h3>
            </div>
        </>
    )
}

export default DetalharProdutos
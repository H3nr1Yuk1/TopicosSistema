import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  //Função de carregamento do componente
  //React Router DOM - https://www.youtube.com/watch?v=7b42lVMdEjE
  function gerarLista(){
    axios
      .get("http://localhost:3001")
      .then((resposta) => {
        setProdutos(resposta.data.dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  useEffect(() => {
    gerarLista();
  })

  function removerProduto(id : number) {
    axios
      .delete(`http://localhost:3001/${id}`)
      .then((resposta) => {
        gerarLista();
      })
      .catch((erro) => {
        
      });
  }

  return (
    <div>
      <h1>Listagem de produtos</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Detalhes</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto: any) => (
            <tr>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>
                <Link to={`/detalhar/${produto.id}`}>Detalhes</Link>
              </td>
              <td>
                <Button variant="outlined" onClick={() => removerProduto(produto.id)}>Remover</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;

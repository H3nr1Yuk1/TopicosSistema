import { useState } from "react";
import { Produto } from "../models/produto.model";
import axios from "axios";

function ProdCadas(){
    const [prodName, setProdName] = useState<any>();
    const [prodVal, setProdVal] = useState<any>();
    let listProd : Produto[] = [];

    function setNomeProd(event : any){
        setProdName(event.target.value);
    }

    function setValProd(event : any){
        setProdVal(event.target.value);
    }

    function saveProd(){
        let produto : Produto = new Produto();
        produto.nome = prodName;
        produto.valor = prodVal;
        listProd.push(produto);
        console.log("Tudo Certo!!!")
    }

    return (
        <div>
            <h1>Cadastrar Produto</h1>
            <div>
                <label htmlFor="">Nome do Produto:</label>
                <input type="text" name="prodName" onChange={setNomeProd}/>
            </div>
            <div>
                <label htmlFor="">Valor do Produto:</label>
                <input type="text" name="prodVal" onChange={setValProd}/>
            </div>
            <button onClick={saveProd}>Cadastrar</button>
        </div>
    );
}

export default ProdCadas;
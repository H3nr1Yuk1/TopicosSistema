import { useState } from "react";

function Subtracao() {
    const [n1, setN1] = useState<any>();
    const [n2, setN2] = useState<any>();
    const [result, setResult] = useState<any>();

    function calcularVal(){
        setResult(Number.parseInt(n1) - Number.parseInt(n2));
        console.log(result)
    }

    function salvarVal1 (event : any){
        setN1(event.target.value);
    }

    function salvarVal2 (event : any){
        setN2(event.target.value);
    }

    return (
        <div>
            <h1>Componente de Subtração</h1>
            <div>
                <label htmlFor="">Valor 1: </label>
                <input type="number" name="n1" onChange={salvarVal1}/>
            </div>
            <div>
                <label htmlFor="">Valor 2: </label>
                <input type="number" name="n2" onChange={salvarVal2}/>
            </div>
            <br />
            <button onClick={calcularVal}>Subtrair</button>
            <br /><br />
            <span>Resultado: {result}</span>
        </div>
    );
}

export default Subtracao;
//Todo componente deve ter a sua primeira letra como maiúscula
//Também deve conter uma função que retorna um HTML
//Também deve ser exportado

import { useState } from "react";

//Também só pode retornar apenas um elemento-pai HTML
function Soma(){
    const [n1, setN1]= useState<any>();
    const [n2, setN2] = useState<any>();
    const [soma, setSoma] = useState<any>();



    function calcularVal(){
        setSoma(Number.parseInt(n1) + Number.parseInt(n2));        
        console.log(soma)
    }

    function salvarVal1(event : any){
        setN1(event.target.value);
    }

    function salvarVal2(event : any){
        setN2(event.target.value);
    }

    return (
    <div>
        <h1> Componente da Soma </h1>
        <div>
            <label>Número 1:</label>
            <input type="number" name="n1" onChange={salvarVal1}/>
        </div>
        <div>
            <label>Número 2:</label>
            <input type="number" name="n2" onChange={salvarVal2}/>
        </div>
        <div>
            <br />
            <button onClick={calcularVal}>Somar</button>
            <br /><br />
            <span>Resultado: {soma}</span>
        </div>
    </div>
    );
}

export default Soma;
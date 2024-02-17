import React, {useState} from 'react'
export default function Calculadora(){
    const [expressao,setExpressao] = useState(true)
    const [decimal,setDecimal] = useState(true)
    const [num,setNum] = useState(0)

    function setarValor(e){
        let valor = e.target.textContent
        if(valor == '+' || valor == '-' || valor == '/' || valor == 'X' || valor == '%' || valor == ','){
            if(expressao){
                if(valor == 'X'){
                    valor = '*'
                }
                setExpressao(false)
                setDecimal(false)
                setNum(num + valor)
            }
            return
        }
        if(num == 0){
            setNum(valor)
            return
        }
        setNum(num + valor)
        setExpressao(true)
        setDecimal(true)
    }
    function limpar(){
        setNum(0)
        setExpressao(true)
        setDecimal(true)
    }
    function operar(){
        try{
            const operar = eval(num)
            setNum(operar)
            setExpressao(true)
            setDecimal(true)
        }catch{
            setNum('ERRO!')
            setExpressao(true)
            setDecimal(true)
            setTimeout(() => {
                setNum(0)
            }, 1000);
        }
    }
    return (
        <>
        <h1 style={{textAlign:'center'}}>Calculadora</h1>
      <div className="App">
            <div className='result'>
                <span>{num}</span>
            </div>
            <div className="container">
                <button className='op' onClick={()=>limpar()}>AC</button>
                <button className='op' onClick={(e) => setarValor(e)}>+/-</button>
                <button className='op' onClick={(e) => setarValor(e)}>%</button>
                <button className='orange' onClick={(e) => setarValor(e)}>/</button>
                <button className='gray' onClick={(e) => setarValor(e)}>7</button>
                <button className='gray' onClick={(e) => setarValor(e)}>8</button>
                <button className='gray' onClick={(e) => setarValor(e)}>9</button>
                <button className='orange' onClick={(e) => setarValor(e)}>X</button>
                <button className='gray' onClick={(e) => setarValor(e)}>4</button>
                <button className='gray' onClick={(e) => setarValor(e)}>5</button>
                <button className='gray' onClick={(e) => setarValor(e)}>6</button>
                <button className='orange' onClick={(e) => setarValor(e)}>-</button>
                <button className='gray' onClick={(e) => setarValor(e)}>1</button>
                <button className='gray' onClick={(e) => setarValor(e)}>2</button>
                <button className='gray' onClick={(e) => setarValor(e)}>3</button>
                <button className='orange' onClick={(e) => setarValor(e)}>+</button>
                <button className='gray zero' onClick={(e) => setarValor(e)}>0</button>
                <button className='gray' onClick={(e) => setarValor(e)}>.</button>
                <button className='orange' onClick={()=>operar()}>=</button>
            </div>
      </div>
      </>
    )
  }
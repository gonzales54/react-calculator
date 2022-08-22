const Calculator = () => {
    const input_value = (e) => {
        document.getElementById("text").value += e.target.value;
    }

    const answer = () => {
        let text = document.getElementById("text").value;
        
        if(text.match(/[^0-9+\-*/~.]/g) === null){
            let result = Function('return('+text+');')();
            document.getElementById("text").value = result.toFixed(1);
        }
    }

    const delete_one = () => {
        let text = document.getElementById("text").value.slice(0, -1);
        document.getElementById("text").value = text;
    }

    const delete_all = () => {
        document.getElementById("text").value = '';
    }

    return(
        <div className="App container">
            <div className="calculator">
                <div className="row mb-4">
                    <input type="text" id="text" className="form-control border border-dark"></input>
                </div>
                <div className="row mb-4 gap-5">
                    <button value="7" onClick={input_value} className="btn py-3 col border border-dark">7</button>
                    <button value="8" onClick={input_value} className="btn py-3 col border border-dark">8</button>
                    <button value="9" onClick={input_value} className="btn py-3 col border border-dark">9</button>
                    <button value="+" onClick={input_value} className="btn py-3 col border border-dark">+</button>
                </div>
                <div className="row mb-4 gap-5">
                    <button value="4" onClick={input_value} className="btn py-3 col border border-dark">4</button>
                    <button value="5" onClick={input_value} className="btn py-3 col border border-dark">5</button>
                    <button value="6" onClick={input_value} className="btn py-3 col border border-dark">6</button>
                    <button value="-" onClick={input_value} className="btn py-3 col border border-dark">-</button>
                </div>
                <div className="row mb-4 gap-5">
                    <button value="1" onClick={input_value} className="btn py-3 col border border-dark">1</button>
                    <button value="2" onClick={input_value} className="btn py-3 col border border-dark">2</button>
                    <button value="3" onClick={input_value} className="btn py-3 col border border-dark">3</button>
                    <button value="*" onClick={input_value} className="btn py-3 col border border-dark">*</button>
                </div>
                <div className="row mb-4 gap-5">
                    <button value="0" onClick={input_value} className="btn py-3 col border border-dark">0</button>
                    <button value="." onClick={input_value} className="btn py-3 col border border-dark">.</button>
                    <button value="=" onClick={answer} className="btn py-3 col border border-dark">=</button>
                    <button value="/" onClick={input_value} className="btn py-3 col border border-dark">/</button>
                </div>
                <div className="row mb-4 gap-5">
                    <button onClick={delete_all} className="btn col border border-dark">AC</button>
                    <button onClick={delete_one} className="btn col border border-dark">DEL</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
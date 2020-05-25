let formulaTxt;
function parseFormula(){
    formulaTxt = document.getElementById("formulaField").value;
    console.log(formulaTxt);
    if(!formulaTxt){
        alert("Enter Some text in formula field.");
    }else {
        //alert("Parsing in progress.");
        checkFormula(formulaTxt);
    }
}


function checkFormula(formulaTxt){
    console.log('Parsing Formula:', formulaTxt );
    let result;
    let updatedformulaTxt = formulaTxt.replace(whiteSpacePatt, '');
    console.log(updatedformulaTxt);
    if(updatedformulaTxt.search(operatorPatt)){
        const index = updatedformulaTxt.search(operatorPatt);        
        result = calcExp(updatedformulaTxt.substring(0, index), updatedformulaTxt.substring(index+1), updatedformulaTxt.charAt(index));
    }
    //let result = ;
    console.log('result', result);
    if(result != NaN) updateStatusMsg(result);
    else updateStatusMsg(stringConst.errorMsg);
    // const bracPatt = new RegExp(/\(*\)/, "i");
    // let initExp = bracPatt.test(formulaTxt);
    // console.log(initExp);

}


function calcExp(operand1, operand2, operator){
    if(Number(operand1) == NaN && Number(operand2) == NaN){   
        operand1 =  Number(operand1);
        operand2 =  Number(operand2);
    }
    console.log(operand1,'|', operand2,'|', operator);
    switch(operator){
        case '*': 
            return operand1 * operand2;
        case '+': 
            return operand1 + operand2;
        case '-': 
            return operand1 - operand2;
        case '/': 
            return operand1 / operand2;
        case '^': 
            return operand1 ^ operand2;
        default:
            console.log('Not a Proper Operator');
            return formulaTxt;
    }

}


function updateStatusMsg(msg){
    document.getElementById('statusMsg').innerHTML = msg;
}
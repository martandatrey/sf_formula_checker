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
    formulaTxt = formulaTxt.replace(/[\s\n]/g, '');
    const opPatt = new RegExp(/[*-+/]/, "i");
    let result = formulaTxt.search(opPatt);
    console.log('result', result);
    updateStatusMsg(formulaTxt);
    // const bracPatt = new RegExp(/\(*\)/, "i");
    // let initExp = bracPatt.test(formulaTxt);
    // console.log(initExp);

}


function calcExp(operand1, operand2, operator){
    switch(operator){
        case '*': 
            return operand1 * operand2;
        case '+': 
            return operand1 * operand2;
        case '-': 
            return operand1 * operand2;
        case '/': 
            return operand1 * operand2;
        case '^': 
            return operand1 ^ operand2;
        default:
            console.log('Not a Proper Operator');
    }

}


function updateStatusMsg(msg){
    document.getElementById('statusMsg').innerHTML = msg;
}
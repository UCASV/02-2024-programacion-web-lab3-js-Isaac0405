const plus = (a,b) => {
    return a+b;
};
const subtract = (a,b) =>{
    return a-b;
} ;
const multiply = (a,b) =>{
    return a*b;
} ;
const split = (a,b) => {
    if (b==0) {
        alert("Ingrese un numero valido");
        return null;
    }
    return a/b;
};
const requestNumber = () => {
    let a=parseFloat(prompt("Ingrese el primer valor"));
    let b=parseFloat(prompt("Ingrese el segundo valor"));
    if (isNaN(a)||isNaN(b)) {
        alert("Ingrese un numero valido");
        return requestNumber();
    }
    return {a,b};
};

const selectOperation = (a,b) => {
    let op=prompt("Introduce una opcion:\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division");
    switch (op) {
        case '1':
            result=plus(a,b);
            break;
        case '2':
            result=subtract(a,b);
            break;
        case '3':
            result=multiply(a,b);
            break;
        case '4':
            result=split(a,b);
            break;   
        default:
            alert("Operacion no valida");
            return selectOperation(a,b);
    }
    return result;
};

const main = () => {
    let{a,b}=requestNumber();
    let result=selectOperation(a,b);
    alert(`El resultado de la operacion es: ${result}`);
}

main();

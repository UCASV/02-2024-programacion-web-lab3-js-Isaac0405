const searchNumber = (a) => {
    let factorial=1;
    for (let i = 1; i <= a; i++) {
        factorial *= i;   
    }
    return factorial;
};

const requestNumber = () => {
    let a=parseFloat(prompt("Introduce un numero entero no negativo para calcular su factorial:"));
    if (isNaN(a)||a<0) {
        alert("Ingrese un numero valido");
        return requestNumber();
    }
    return a;
}


const main = () => {
    let a=requestNumber();
    let result=searchNumber(a);
    alert(`El factorial de ${a} es: ${result}`)
};

main();

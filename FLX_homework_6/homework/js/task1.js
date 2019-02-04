let result;

enterData();

function enterData() {
    let a = parseFloat(prompt("a = "));
    let b = parseFloat(prompt("b = "));
    let c = parseFloat(prompt("c = "));

    if (isNaN(a) || isNaN(b) || isNaN(c) ) {
        alert("Invalid input data");
    } else{
        calculateResult(a, b, c);
    }
}

function calculateResult(a, b, c){
    let descriminant = (Math.pow(b,2) - 4*a*c);

    if(descriminant > 0){
        let x1=(-b+Math.sqrt(descriminant))/(2*a);
        let x2=(-b-Math.sqrt(descriminant))/(2*a);
        result = 'x1 = ' + x1.toFixed(2) + ' x2 = ' + x2.toFixed(2);
    } else if (descriminant === 0){
        let x = (-b/(2*a));
        result = 'x = ' + x.toFixed(2);
    } else{
        result = 'No result';
    }
    alert (result);
}
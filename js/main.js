//ciclo che stampi i numeri da 1 a 100
for (i = 1; i <= 100; i++) {
    //se il numero risultato è divisibile per 3 e da resto 0
    if (i % 3 === 0) {
        //controlla se è divisibile anche per 5
        if (i % 5 === 0) {
            //se si allora stampa "FizzBuzz"
            console.log("FizzBuzz")
        } else {
            //altrimenti stampa "Fizz"
            console.log("Fizz")
        }
        //se il numero diviso per 5 da resto 0
    } else if (i % 5 === 0) {
        //allora stampa "Buzz"
        console.log("Buzz")
    } else {
        //altrimenti stampa il numero risultato
        console.log(i)
    }
}










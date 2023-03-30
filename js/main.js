//GENERO NUMERI DA 1 A 100
for (let i = 1; i<=100; i++){ 
    
    //CONTROLLO SE I E' MULTIPLO SIA DI 5 CHE 3 E STAMPO FIZZBUZZ
    if (i%3===0 && i%5===0){     
        console.log("FizzBuzz");
    //CONTROLLO SE I E' MULTIPLO DI 3 E STAMPO FIZZ   
    } else if (i%3===0){
        console.log("Fizz");
    //CONTROLLO SE I E' MULTIPLO DI 5 E STAMPO BUZZ
    } else if (i%5===0){
        console.log("Buzz");
    //SE I NON RISPETTA LE CONDIZIONI ALLORA LO FACCIO STAMPARE 
    } else {
         console.log(i);
    }
}
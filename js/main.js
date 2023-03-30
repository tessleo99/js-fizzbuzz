//GENERO NUMERI DA 1 A 100
for (let i = 1; i<=100; i++){ 
    
    //CONTROLLO SE i E' MULTIPLO SIA DI 5 CHE 3 E STAMPO FIZZBUZZ
    if (i%3===0 && i%5===0){    
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-fizz-buzz">
            <p>FIZZBUZZ</p>
        </div>
        `; 
        console.log("FizzBuzz");
    //CONTROLLO SE i E' MULTIPLO DI 3 E STAMPO FIZZ   
    } else if (i%3===0){
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-fizz">
            <p>FIZZ</p>
        </div>
        `;
        console.log("Fizz");
    //CONTROLLO SE i E' MULTIPLO DI 5 E STAMPO BUZZ
    } else if (i%5===0){
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-buzz">
            <p>BUZZ</p>
        </div>
        `;
        console.log("Buzz");
    //SE i NON RISPETTA LE CONDIZIONI ALLORA LO FACCIO STAMPARE 
    } else {
         document.getElementById("container-for-squares").innerHTML += `
        <div class="square">
            <p>${i}</p>
        </div>
        `;
         console.log(i);
    }
}



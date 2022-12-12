                                            //Promise, Fetch 

const amount = document.querySelector("#amount")
const fromCurrency = document.getElementById("firstCurrency");
const toCurrency = document.getElementById("secondCurrency");

eventListeners();

function eventListeners(){
    //when amount input change
    amount.addEventListener("input",translateCurrency);

    firstCurrency.onchange = function(){
        //from currency
        ui.changeUI(fromCurrency.value,toCurrency.value);
    }
    secondCurrency.onchange = function(){
        //to currency 
        ui.changeUI(fromCurrency.value,toCurrency.value);
    }
}
const translate = new Translate();
const ui = new UI();

function translateCurrency(e){
    translate.get(amount.value,fromCurrency.value, toCurrency.value)
    .then(data => ui.displayResult(data))
    .catch(err => console.log(err));
}
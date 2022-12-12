class UI{

    changeUI(fromCurrency, toCurrency){
        document.getElementById("outputFirst").textContent = fromCurrency;
        document.getElementById("outputSecond").textContent = toCurrency;
    }
    displayResult(result){
        document.getElementById("outputResult").value = result;
    }
}

class Translate{

    get(amount,fromCurrency,toCurrency){
        console.log(fromCurrency,toCurrency);
        return new Promise (function(resolve,reject){
            fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(response => response.json())
            // .then(data => resolve(data.rates[Object.keys(data.rates)[0]]))//çok uğraştırdı
            .then(data => resolve(data.rates[toCurrency]*amount))
            .catch(err => reject(err));
        });
    }
}

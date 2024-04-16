// const deyer = document.getElementById('deyer')
// document.getElementById('btn').addEventListener("click", function (cheviren) {
// const netice = deyer.value/1.70;
// document.querySelector('p').textContent = netice;
// })


const currencySelect = document.getElementById('currency');

fetch('https://api.exchangerate-api.com/v4/latest/AZN?apiKey=9e894573b2210199d34ba095')
    .then(res => res.json())
    .then((data) => {
        const currencies = Object.keys(data.rates); 
        currencies.forEach(currency => {
            const option = document.createElement('option');
            option.value = currency
            option.textContent = currency
            currencySelect.appendChild(option);
        });
    })
document.getElementById('btn').addEventListener("click", function () {
    const deyer = document.getElementById('deyer').value;
    const selectedCurrency = currencySelect.value;
    fetch('https://api.exchangerate-api.com/v4/latest/AZN?apiKey=9e894573b2210199d34ba095')
        .then(res => res.json())
        .then((data) => {
            const rate = data.rates[selectedCurrency]; 
            const netice = deyer * rate; 
            document.getElementById('netice').textContent = `${deyer} AZN = ${netice.toFixed(2)} ${selectedCurrency}`; 
        })
})
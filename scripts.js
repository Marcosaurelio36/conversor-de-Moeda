const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")



const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValuetext = document.getElementById('currency-value-text')

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin=data.BTCBRL.high


        realValueText.innerHTML = new Intl.NumberFormat('pt-br',
            { style: 'currency', currency: 'BRL' }
        ).format(inputReais)



    if (select.value === 'US$ Dolar Americano') {
        currencyValuetext.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }
    if (select.value === '€ Euro')
        currencyValuetext.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'ERL' }
        ).format(inputReais / euro)

    if (select.value === '₿itcoin')
        currencyValuetext.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin)

}


changeCurrency = () => {
    const currecyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dolar Americano') {
        currecyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/eua.svg"
    }
    if (select.value === '€ Euro') {
        currecyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }

    if (select.value === '₿itcoin') {
        currecyName.innerHTML = "₿itcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }



    convertValues()

}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)


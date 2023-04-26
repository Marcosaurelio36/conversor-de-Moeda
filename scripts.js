const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValuetext = document.getElementById('currency-value-text')


    // realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-br',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    //currencyValuetext.innerHTML= inputReais/dolar

    if (select.value === 'US$ Dolar Americano') {
        currencyValuetext.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }
    if (select.value === '€ Euro')
    currencyValuetext.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'ERL' }
    ).format(inputReais / euro)

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



    convertValues()

}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
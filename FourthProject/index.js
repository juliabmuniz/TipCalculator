function format(value) {
    value = Math.ceil(value*100)/100
    value = value.toFixed(2)
    return '$' + value
}

function formatSplit(value){
    if (value == 1){
        return value + ' person'
    }
    return value + ' people'
}

function update() {
let bill = Number(document.getElementById('yourBill').value)
let tipPercent = document.getElementById('tipInput').value
let split = document.getElementById('splitInput').value

let tipValue = bill * (tipPercent/100)
let billTotal = bill + tipValue
let billEach = billTotal/ split

document.getElementById('tipPercent').innerHTML = tipPercent + '%'
document.getElementById('tipValue').innerHTML = format(tipValue)
document.getElementById('totalWithTip').innerHTML = format(billTotal) 
document.getElementById('splitValue').innerHTML = formatSplit(split)
document.getElementById('billEach').innerHTML = format(billEach)

}
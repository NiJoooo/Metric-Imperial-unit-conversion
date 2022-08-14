// Save number to a variable in code
// When app loads, do calculations and display the results
// Road numbers to 3 decimal places
// Check out CSS gradient generator
// Stretch: Add an input for the user to change the number and automatically recalculate values when it changes

// Meters to Feet: ft = m*3.2808
// Feet to Meters: m = ft/3.2808
// Liters to Gallons: * 0.2641
// Gallons to Liters: / 2641
// Kilograms to Pounds: * 2.2046
// Pounds to Kilometers: / 2.2046
let num1Metric = document.getElementById('num1-metric')
let num2Metric = document.getElementById('num2-metric')
let num3Metric = document.getElementById('num3-metric')
let num4Metric = document.getElementById('num4-metric')
let num5Metric = document.getElementById('num5-metric')
let num6Metric = document.getElementById('num6-metric')

let feetResult = document.getElementById("feet-result")
let metersResult = document.getElementById("meters-result")
let gallonsResult = document.getElementById("gallons-result")
let litersResult = document.getElementById("liters-result")
let poundsResult = document.getElementById("pounds-result")
let kilosResult = document.getElementById("kilos-result")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

function LengthConverter(valNum){
    let numMetric = [num1Metric, num2Metric, num3Metric, num4Metric, num5Metric, num6Metric]
    for (let i = 0; i < numMetric.length; i ++){
        numMetric[i].innerHTML = valNum
    }
    // num1Metric.innerHTML = valNum
    // num2Metric.innerHTML = valNum
    // num3Metric.innerHTML = valNum
    // num4Metric.innerHTML = valNum
    // num5Metric.innerHTML = valNum
    // num6Metric.innerHTML = valNum
    
    feetResult.textContent = `${(valNum * meterToFeet).toFixed(3)}`
    metersResult.innerHTML = `${(valNum / meterToFeet).toFixed(3)}`
    gallonsResult.innerHTML = `${(valNum * literToGallon).toFixed(3)}`
    litersResult.innerHTML = `${(valNum / literToGallon).toFixed(3)}`
    poundsResult.innerHTML = `${(valNum * kiloToPound).toFixed(3)}`
    kilosResult.innerHTML = `${(valNum / kiloToPound).toFixed(3)}`
}

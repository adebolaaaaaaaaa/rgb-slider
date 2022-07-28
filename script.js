let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let box = document.getElementById('box')
let redValue = document.getElementById('redValue')
let greenValue = document.getElementById('greenValue')
let blueValue = document.getElementById('blueValue')

red.value = 0;
green.value = 0;
blue.value = 0; 

red.addEventListener('input',checker)
green.addEventListener('input',checker)
blue.addEventListener('input',checker)

function checker(){
    box.style.backgroundColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")"
    redValue.innerHTML = red.value
    greenValue.innerHTML = green.value
    blueValue.innerHTML = blue.value
    // navigator.clipboard.writeText(box.style.backgroundColor)
}


checker()

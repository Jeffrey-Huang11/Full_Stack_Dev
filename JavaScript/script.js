let heading = document.querySelector('h1')
heading.innerText = "HTML Baby"

const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const counterSpn = document.getElementById('counter')
const resetBtn = document.getElementById('reset')

const listUL = document.getElementById('listUL')

let counter = 0

function incrementCounter() {
    counterSpn.innerText = ++counter
    const li = document.createElement('li')
    listUL.appendChild(li)
    li.setAttribute('data-counter', counter)
    li.innerText = "You've added item " + counter
}

function decrementCounter() {
    if (counter - 1 < 0) {
        counter = 0
        counterSpn.innerText = counter
    }
    else {
        const li = listUL.querySelector('[data-counter="'+counter+'"]')
        li.remove()
        counterSpn.innerText = --counter
    }
}

function resetCounter() {
    while(counter > 0){
        decrementCounter()
    }
}


incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)
resetBtn.addEventListener('click', resetCounter)




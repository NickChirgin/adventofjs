const btn = document.querySelector('.start')
const input = document.querySelectorAll('input')
const minutes = input[0]
const seconds = input[1]
const settings = document.querySelector('.settings')
const ring = document.querySelector('.ring')



btn.addEventListener('click', () => {
    if (btn.innerHTML === 'start') {
        btn.innerHTML = 'pause'
        startTimer = setInterval(decreaseTime, 1000)
    }
    else {
        btn.innerHTML = 'start'
        pauseTimer()
    }
})


settings.addEventListener('click', (e) => {
    minutes.toggleAttribute('disabled')
    seconds.toggleAttribute('disabled')
    minutes.addEventListener('change', e => {
        minutes.setAttribute('value', e.target.value)
    })
    seconds.addEventListener('change', e => {
        seconds.setAttribute('value', e.target.value)
    })
})



function setTime(min, sec) {
    minutes.value = min
    seconds.value = sec
}

function decreaseTime() {
    let currentMin = parseInt(minutes.value)
    let currentSec = parseInt(seconds.value)

    if (currentSec === 0 && currentMin > 0) {
        if (currentMin < 10) {
            currentMin = `0${currentMin}`
        }
        currentMin--
        currentSec = 59
        setTime(currentMin, currentSec)
    }
    else if (currentSec === 0 && currentMin === 0) {
        ring.style.stroke = 'red'
        alert('times is up')
    }
    else {
        currentSec--
        if (currentSec < 10) {
            currentSec = `0${currentSec}`
        }
        setTime(currentMin, currentSec)
    }

}

function pauseTimer() {
    clearInterval(startTimer)
}
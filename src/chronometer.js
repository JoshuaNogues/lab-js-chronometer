class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(()=> {
    if (typeof printTimeCallback === "function") {
      printTimeCallback();
    }
     this.currentTime++
    }, 1000)
    
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {

    if (String(value).length === 1) {
      return `0${value}`
    } else {
      return String(value)
    }
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {

    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`
    // ... your code goes here
  }
}
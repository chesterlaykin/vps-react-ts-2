import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"


// Model the application state.
class TimerStore {
    secondsPassed: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }
}

export const myTimer = new TimerStore()

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
    myTimer.increase()
}, 1000)


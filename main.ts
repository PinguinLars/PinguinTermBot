const Version = "0.0"
let rSpeed
let lSpeed

Log("Version: " + Version)
Log("Name: " + control.deviceName())
Log("Serial Number: " + control.deviceLongSerialNumber())
Log("Hardware Version: " + control.hardwareVersion())

function Log(text: string) { //Here to make it easier to take code from the "Main" branches
    radio.sendString(text)
    basic.pause(100)
}

function Control(Input: string) {
    if (Input === "Forward") {
        cuteBot.motors(100, 100)
    } else if (Input === "Backward") {
        cuteBot.motors(-50, -50)
    } else if (Input === "Left") {
        cuteBot.motors(-75, 75)
    } else if (Input === "Right") {
        cuteBot.motors(75, -75)
    } else if (Input === "Stop") {
        cuteBot.stopcar()
    }
}

radio.onReceivedString(receivedString => {
    Control(receivedString)
})

radio.onReceivedValue(function (name: string, value: number) {
    if (name === "rSpeed") {
        rSpeed = value
    } else if (name === "lSpeed") {
        lSpeed = value
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    radio.sendString(receivedString)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString(">:)")
})
radio.setGroup(1)
basic.forever(function () {
	
})

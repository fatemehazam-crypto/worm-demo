function become_infected () {
    if (!(i_am_infected)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.InBackground)
        i_am_infected = true
    }
    for (let n of my_neighbors) {
        basic.pause(2000)
        radio.sendString("" + (n))
    }
}
// Infect your Micro:Bit!
input.onButtonPressed(Button.AB, function () {
    become_infected()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == my_id) {
        become_infected()
    }
})
// Cure your Micro:Bit!
input.onGesture(Gesture.Shake, function () {
    i_am_infected = false
    basic.showIcon(IconNames.Happy)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
})
let my_neighbors: string[] = []
let my_id = ""
let i_am_infected = false
radio.setGroup(1)
i_am_infected = false
my_id = "your_name_here"
my_neighbors = ["neighbor1", "neighbor2"]
basic.forever(function () {
    if (i_am_infected) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showString(my_id)
    }
})

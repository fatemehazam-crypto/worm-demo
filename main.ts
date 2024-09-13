function become_infected () {
    if (!(i_am_infected)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
        i_am_infected = true
    }
    for (let n of my_neighbors) {
        basic.pause(2000)
        radio.sendString("" + (n))
    }
}
input.onButtonPressed(Button.AB, function () {
    become_infected()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == my_id) {
        become_infected()
    }
})
input.onGesture(Gesture.Shake, function () {
    i_am_infected = false
    basic.showIcon(IconNames.Happy)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
let my_neighbors: string[] = []
let my_id = ""
let i_am_infected = false
radio.setGroup(1)
i_am_infected = false
my_id = "your_name_here"
my_neighbors = ["neighbor_id_here"]
basic.forever(function () {
    if (i_am_infected) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showString(my_id)
    }
})

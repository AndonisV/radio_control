input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(5)
})
basic.showIcon(IconNames.Scissors)
radio.setGroup(1)

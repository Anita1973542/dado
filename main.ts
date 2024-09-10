let basura = 0
input.onGesture(Gesture.Shake, function () {
    basura = randint(1, 6)
    basic.showNumber(basura)
    basic.showIcon(IconNames.Sad)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})

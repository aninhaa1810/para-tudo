input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        contador += -1
        basic.showNumber(contador)
        basic.pause(100)
    }
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
let contador = 0
contador = 10
basic.showNumber(contador)

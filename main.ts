input.onButtonPressed(Button.A, function () {
    jajn += 1
})
input.onButtonPressed(Button.B, function () {
    jajn += -1
})
let tm = TM1637.create(
DigitalPin.P0,
DigitalPin.P1,
7,
4
)
tm.on()
let jajn = 1
basic.forever(function () {
    tm.showbit(0, 0)
    tm.showbit(jajn, 1)
    tm.showbit(0, 2)
    tm.showbit(0, 3)
})
basic.forever(function () {
    if (jajn > 9) {
        jajn = 9
    } else if (jajn < 1) {
        jajn = 1
    }
})

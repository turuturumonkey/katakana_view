input.onButtonPressed(Button.A, function () {
    KataKana()
})
function KataKana () {
    mojiichi = 0
    for (let index = 0; index < mojisu; index++) {
        if ("ア".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . # . #
                . . # # .
                # # . . .
                `)
        } else if ("イ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . #
                . . # # .
                # # # . .
                . . # . .
                . . # . .
                `)
        } else if ("ウ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                # . . . #
                . . . # .
                . . # . .
                `)
        } else if ("エ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                # # # # #
                `)
        } else if ("オ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . # .
                # # # # #
                . . # # .
                . # . # .
                # . . # .
                `)
        } else if ("カ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . #
                . # . . #
                # . . # .
                `)
        } else if ("キ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                # # # # #
                . . # . .
                `)
        } else if ("ク".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # #
                . # . . #
                # . . . #
                . . . # .
                . # # . .
                `)
        } else if ("ケ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . . .
                . # # # #
                # . . # .
                . . . # .
                . . # . .
                `)
        } else if ("コ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . . #
                # # # # #
                `)
        } else if ("サ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . # .
                # # # # #
                . # . # .
                . . . # .
                . # # . .
                `)
        } else if ("シ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # . . #
                . . . . #
                # # . . #
                . . . # .
                # # # . .
                `)
        } else if ("ス".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . # .
                . . # # .
                # # . . #
                `)
        } else if ("セ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . . .
                # # # # #
                . # . . #
                . # . . .
                . # # # #
                `)
        } else if ("ソ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . . . #
                # . . . #
                . # . . #
                . . . # .
                # # # . .
                `)
        } else if ("タ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # #
                . # . . #
                # . # # #
                . . . . #
                . # # # .
                `)
        } else if ("チ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # #
                . . . # .
                # # # # #
                . . . # .
                . # # . .
                `)
        } else if ("ツ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . # . #
                # . # . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if ("テ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # .
                . . . . .
                # # # # #
                . . . # .
                . # # . .
                `)
        } else if ("ト".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # # . .
                . # . # #
                . # . . .
                `)
        } else if ("ナ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . # .
                # # # # #
                . . . # .
                . . . # .
                . # # . .
                `)
        } else if ("ニ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else if ("ヌ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . # . #
                . . . # .
                # # # . #
                `)
        } else if ("ネ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . . . #
                . # # # .
                # . # . #
                `)
        } else if ("ノ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if ("ハ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                # . . . #
                # . . . #
                `)
        } else if ("ヒ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . . . .
                # # # # #
                # . . . .
                # . . . .
                # # # # #
                `)
        } else if ("フ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if ("ヘ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . # . . .
                # . # . .
                . . . # .
                . . . . #
                `)
        } else if ("ホ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                # . # . #
                # . # . #
                `)
        } else if ("マ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . # . # .
                . . # . .
                . . . # .
                `)
        } else if ("ミ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                `)
        } else if ("ム".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . . . #
                # # # # #
                . . . . #
                `)
        } else if ("メ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . #
                . # . . #
                . . # # .
                . . # # .
                # # . . #
                `)
        } else if ("モ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . # . .
                # # # # #
                . . # . .
                . . # # #
                `)
        } else if ("ヤ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . . .
                # # # # #
                . # . . #
                . # . # .
                . # . . .
                `)
        } else if ("ユ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # .
                . . . # .
                . . . # .
                . . . # .
                # # # # #
                `)
        } else if ("ヨ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                . . . . #
                # # # # #
                `)
        } else if ("ラ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . #
                # # # # .
                `)
        } else if ("リ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                . . . # .
                . # # . .
                `)
        } else if ("ル".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                # . . # #
                # . . # .
                `)
        } else if ("レ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . #
                # . . # .
                # # # . .
                `)
        } else if ("ロ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if ("ワ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                . . . . #
                . # # # .
                `)
        } else if ("ヲ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                . . . . #
                # # # # .
                `)
        } else if ("ン".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # . . #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if ("゛".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                . . . . .
                `)
        } else if ("゜".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                . . . . .
                `)
        } else if ("ー".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else if ("ッ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . # .
                # # . # .
                . . # . .
                `)
        } else if ("！".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
        } else if ("？".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . # # .
                . . # . .
                . . # . .
                `)
        } else if ("、".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                `)
        } else if ("。".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if ("　".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if ("・".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if ("：".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if ("；".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . # . . .
                `)
        } else if ("＝".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if ("＿".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else {
            basic.showIcon(IconNames.No)
        }
        mojiichi += 1
    }
}
let mojiichi = 0
let mojiretu = ""
let mojisu = 0
mojisu = 0
mojiretu = "ワオン"
mojisu = mojiretu.length

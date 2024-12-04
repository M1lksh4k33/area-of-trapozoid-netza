game.splash("Let's calculate the area of a trapezoid")
let base_1 = game.askForNumber("What is the base 1 (cm)")
let base_2 = game.askForNumber("What is the base 2 (cm)")
let height = game.askForNumber("What is the height (cm)")
let area = (base_1 + base_2) / 2 * height
game.splash("The area of the trapezoid with base1 " + base_1 + "cm and base2 " + base_2 + "cm and height " + height + "cm is " + area + "cm^2")

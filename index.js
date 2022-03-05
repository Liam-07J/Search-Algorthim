// list must be sorted for binary sort
list = [0, 1, 2, 4, 5];
number = 5;

console.log("To set the list type \"list = [a, b, c, d]\" to set the number you want to find type \"number = x\" then \"linear()\" ")

function linear() {
    for (i = 0; i < list.length; i++) {
        if (list[i] == number) {
            console.log(number + " is found at posistion " + i);
            break;
        } else {
            console.log(number + " is not found at posistion " + i);
        }
        if (i == list.length - 1) {
            console.log(number + " is not in the list");
        }
    }
}
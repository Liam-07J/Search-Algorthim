// list must be sorted for binary sort
list = [];
number = 1;
length = 100;

function createList() {
    for (i = 0; i < length; i++) {
        randomNumber = Math.floor(Math.random() * 100);
        list[i] = randomNumber;
    }
}
createList()

console.log("To set the length of the list type \"length = x\" to set the length of the list \"createList()\" to see list type \"list\" to set the number you want to find type \"number = y\" then \"sort()\" ")

function sort() {
    for (i = 0; i < list.length; i++) {
        if (list[i] == number) {
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!\n" +
                number + " is found at posistion " + i +
                "\n!!!!!!!!!!!!!!!!!!!!!!!!!");
            break;
        } else {
            console.log(number + " is not found at posistion " + i);
        }
        if (i == list.length - 1) {
            console.log(number + " is not in the list");
        }
    }
}
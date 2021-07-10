var userAge = [16, 19, 18, 18, 22, 21, 15];
var is_subscribed = [false, true, true, true, false, false, true];
var arrayLength = is_subscribed.length;

for (var counter = 0; counter < arrayLength; counter++) {

    if (is_subscribed[counter]) {
        if (userAge[counter] < 18) {
            console.log("The user is subscribed and younger than 18");
        } else if (userAge[counter] >= 18) {
            console.log("The user is subscribed and older than 18");
        }
    } else {
        if (userAge[counter] < 18) {
            console.log("The user is not subscribed and younger than 18");
        } else if (userAge[counter] >= 18) {
            console.log("The user is not subscribed and older than 18");
        }
    }
    console.log();
}

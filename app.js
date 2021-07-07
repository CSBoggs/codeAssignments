// var userAge = 17;
// var is_subscribed = false;

// if (is_subscribed == false && userAge < 18) {
//     console.log("The user is younger than 18 and is not subscribed");
// } else if (is_subscribed == true && userAge < 18) {
//     console.log("The user is younger than 18 and is subscribed");
// } else if (is_subscribed == false && userAge > 18) {
//     console.log("The user is older than 18 and is not subscribed");
// } else if (is_subscribed == true && userAge > 18) {
//     console.log("The user is older than 18 and is subscribed");
// } else {
//     console.log("The user does not meet specifications");
// }

var userAge = 6;
var is_subscribed = false;

if (is_subscribed) {
    if (userAge < 18) {
        console.log("The user is subscribed and younger than 18");
    } else if (userAge >= 18) {
        console.log("The user is subscribed and older than 18");
    }
} else if (!is_subscribed) {
    if (userAge < 18) {
        console.log("The user is not subscribed and younger than 18");
    } else if (userAge >= 18) {
        console.log("The user is not subscribed and older than 18");
    }
} else {
    console.log("The user does not meet specifications");
}
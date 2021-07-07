var userAge = 17;
var is_subscribed = false;

if (is_subscribed == false && userAge < 18) {
    console.log("The user is younger than 18 and is not subscribed");
} else if (is_subscribed == true && userAge < 18) {
    console.log("The user is younger than 18 and is subscribed");
} else if (is_subscribed == false && userAge > 18) {
    console.log("The user is older than 18 and is not subscribed");
} else if (is_subscribed == true && userAge > 18) {
    console.log("The user is older than 18 and is subscribed");
} else {
    console.log("The user does not meet specifications");
}
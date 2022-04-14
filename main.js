let exercise = parseInt(prompt("Enter the exercise you request"));

switch(exercise){
    case 1:
        let userInput = prompt("(1) Enter your age:");
        let yearsLeft = parseInt(userInput);

        if(userInput >= 18){
            alert("You're old enough to drive");
        } else {
            alert("You're left with " + (18 - yearsLeft) + " years to drive");
        } // 1  
        break;

    case 2:
        let myAge = parseInt(prompt("(2) Enter your age: "));
        let yourAge = parseInt(prompt("Now, let another one to enter his/her age: "));

        if(myAge > yourAge){
            alert("You're " + (myAge - yourAge) + " years younger than me.");
        } else if(myAge < yourAge){
            alert("You're " + (yourAge - myAge) + " years older than me.");
        } else{
            alert("We are both " + yourAge + " years old.");
        } // 2
        break;

    case 3:
        let a = parseInt(prompt("(3) Enter a number: "));
        let b = parseInt(prompt("Enter another number: "));

        a == b ? (
            alert(b + " is equal to " + a + " .")
        ) : (
            a > b ? (
                alert(a + " is greater than " + b + " .")
            ) : (
                alert(b + " is greater than " + a + " .")
            )
        ); // 3
        break;

    case 4:
        let num1 = parseInt(prompt("(4) Enter a number: "));

        num1 % 2 == 0 ? (
            alert(num1 + " is an even number")
        ) : (
            alert(num1 + " is an odd number")
        ); // 4
        break;

    default:
        alert("Couldn\'t find the exercise you requested")  
}

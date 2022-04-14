let exercise = parseInt(prompt("Enter the exercise you request:"));

switch(exercise){
    case 1:
        let scoreExam = parseInt(prompt("Enter exam score:"));
        
        if(scoreExam >= 0 && scoreExam < 2){
            alert("Keep working, you've failed the exam.");
        } else if(scoreExam >= 2 && scoreExam < 6){
            alert("Just a bit more, it's not enough to pass the exam.");
        } else if(scoreExam >= 6 && scoreExam < 8){
            alert("You've passed the exam.");
        } else if(scoreExam >= 8 && scoreExam < 9){
            alert("Great work, you've passed the exam.");
        } else if(scoreExam >= 9 && scoreExam <= 10){
            alert("Excellent work, you've passed the exam.");
        } else{
            alert("Please, enter a score between 0 and 10.");
        }
        break; // 1

    case 2:
        let month = parseInt(prompt("Enter month number: ", "1 to Jan, 2 to Feb, 3 to Mar..."));
        
        if(month == 12 || month == 1 || month == 2){
            alert("It's Summer actually.");
        } else if(month >= 3 && month <= 5){
            alert("It's Autumn actually.");
        } else if(month >= 6 && month <= 8){
            alert("It's Winter actually.");
        } else if(month >= 9 && month <= 11){
            alert("It's Spring actually.");
        } else{
            alert("Please, enter a number between 1 (jan) to 12 (Dec).");
        } // 2       
        break; 

    case 3:
        let input = prompt("Enter day: ", "Type the current day or \"Today\" to do it automatically.");
        let day = input.toLowerCase();
        
        if(day == "today"){
            let date = new Date();
            let today = date.getDay();
            
            if(today == 1){
                alert("MONDAY is a working day.");
            } else if(today == 2){
                alert("TUESDAY is a working day.");
            } else if(today == 3){
                alert("WEDNESDAY is a working day.");
            } else if(today == 4){
                alert("THURSDAY is a working day.");
            } else if(today == 5){
                alert("FRIDAY is a working day.");
            } else if(today == 6){
                alert("SATURDAY is a weekend.");
            } else if(today == 0){
                alert("SUNDAY is a weekend.");
            } else{
                alert("Invalid Number");
            }
        } else{
            if(day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
                alert(day.toUpperCase() + " is a working day.");
            } else if(day == "saturday" || day == "sunday"){
                alert(day.toUpperCase() + " is a weekend.");
            } else{
                alert("Can\'t recognize the day. Please, try again typing the current day or \"Today\" to do it automatically.")
            }
        } // 3
        break;

    default:
        alert("Couldn\'t find the exercise you requested.");
}





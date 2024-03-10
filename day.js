function getDay(noDay){
    switch(noDay){

        case 0:
            return "Sunday"
        
        case 1:
            return "Monday"
        
        case 2:
            return "Tuesday"
        
        case 3:
            return "Wednessday"

        case 4:
            return "Thursday"
        
        case 5:
            return "Friday"
    
        case 6:
            return "Saturday"

        default:
            return "Not any day"
    }
}
let a = Number(prompt("Enter Number to Check For Day"))
document.write(getDay(a))
// alert("The Day is " + getDay(a));
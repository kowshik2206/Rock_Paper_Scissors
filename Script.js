function getComputerChoice ()
{
    function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const a = getRandomInt(3);
if (a==0)
{
    return "Rock"
}
else if(a==1)
{
    return "Paper";
}
else
{
    return "Scissors";
}
}
//console.log(getComputerChoice());
const Computer = getComputerChoice();
const User=prompt("Enter your Choise");
function Winner()
{
    if (User==Computer)
    {
        console.log("Its a draw");
    }
    else if(User == "Rock" & Computer =="Paper")
    {
        console.log("You won");
        
    }
    else if(User == "Paper" & Computer =="Rock")
    {
        console.log("Computer won");
        
    }
    else if(User == "Scissors" & Computer =="Paper")
    {
        console.log("You won");
        
    }
    else if(User == "Paper" & Computer =="Scissors")
    {
        console.log("Computer won");
        
    }
    else if(User == "Rock" & Computer =="Paper")
    {
        console.log("Computer won");
        
    }
    else if(User == "Paper" & Computer =="Rock")
    {
        console.log("User won");
        
    }


}
Winner();
console.log(`computer choice :${Computer}`);
console.log(`Your Choice: ${User}`);

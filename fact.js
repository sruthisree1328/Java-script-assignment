function Fact()
{
    var n=document.getElementById("factorial").value;
    var factorial=1;
    for (var i =1;i<=n;i++)
    {
           factorial=factorial*i;
           
    }

alert("The factorial of a given number is" +factorial);
}
    


        
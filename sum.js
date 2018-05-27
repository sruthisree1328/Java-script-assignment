function sum()
{
    var n=document.getElementById("idvalue").value;
    result=0;
    for(var i=1;i<=n;i++)
{
    result=result+i;
}
alert("the sum of  the given natural numbers is:" +result);
}
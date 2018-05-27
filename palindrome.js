function Check()
{
    var str=document.getElementById("palstring").value;
    var n=str.split("");
    str=str.split("");
    for(var i=0,j=n.length-1;i<=j;i++,j--)
    {
        var t=n[i];
        n[i]=n[j];
        n[j]=t;
    }
    if(str==n.join())
    alert("The string is palindrome");
    else
    alert("The string is not a palindrome");
    }





    
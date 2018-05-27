function power()
{
    var n=document.getElementById("hello").value;
   i=1;
    while(i<n)
    {
        if(Math.pow(2,i)>n)
        {
            i=i-1;
           alert("the result is:" +i);
        }
        else{
            i++;
        }

    }
} 
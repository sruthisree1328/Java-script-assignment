function summul()
{
    var n=document.getElementById("demo").value;
    var sum=0;
    for(var i=1;i<n;i++){
     if(i%3==0 || i%5==0)
    {
        document.write("The numbers divisible by 3 and 5 are:" +i); 
        sum=sum+i;
    }
       
           }
    alert( "The sum of the numbers divisible by 3 and 5 is:" +sum);
}
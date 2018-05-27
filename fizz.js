function fizz(){
    var n=document.getElementById("fizzbuzz").value;
    if(n<0){
         alert("enter the positive number");
    }
    var s='';
    for(var i=1;i<n;i++){
        if(i%3==0 && i%5==0){
            s=s+"FizzBuzz,"
        }
        else if(i%3==0){
            s=s+"Fizz,"
        }
        else if(i%5==0){
            s=s+"Buzz,"
        }
        else{
            s=s+i+","
        }
    }
    if(n%3==0 && n%5==0){
            s=s+"FizzBuzz"
        }
        else if(n%3==0){
            s=s+"Fizz"
        }
        else if(n%5==0){
            s=s+"Buzz"
        }
        else{
            s=s+i
        }
    alert(s);
}

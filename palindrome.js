function check(){
    var str=document.getElementById("palstring").value;
    if(!(isNaN(str)))
    alert("Given input is a number");
    else{
    var str1="";
    var a=0;
    for(i=str.length-1;i>=0;i--){
    str1=str1+str[i];
}
for(i=0;i<str.length;i++){
    if(str[i]==str1[i])
    a=1;
    else 
    a=0;
}
if(a==1)
alert(" string is Palindrome");
else
alert("string is not a palindrome");
    }
}



    
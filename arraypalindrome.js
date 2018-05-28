function validate(){
    var str=document.getElementById("newval").value;
    var ar=[];
    var result=[];
    var obj=JSON.parse(str);
    for(key in obj){
        ar.push(obj[key]);
    }
    document.write("Palindrome strings are  ");
for(var i=0;i<ar.length;i++){
        ar[i]=ar[i].toLowerCase();
        if(ar[i]==ar[i].split("").reverse().join(""))
        result.push(ar[i]);
    }
for(var i=0;i<result.length;i++)
{
if(i==result.length-1)
document.write(result[i]);
else
document.write(result[i]+",");
}
}
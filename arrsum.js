function arrsum(){
    var array=document.getElementById("input").value;
    var n=document.getElementById("val").value;
    var obj=JSON.parse(array);
    var final=[]
    var answer=[]
    for(key in obj){
        final.push(obj[key])
    }
    for(var i=0;i<final.length;i++){
        for(var j=i+1;j<final.length;j++){
            if(final[i]+final[j]==n ){
                var str=final[i]+","+final[j]
                answer.push(str);
                
            }
        }
    }
    for(var i=0;i<answer.length;i++){
        document.getElementById("result").innerHTML= document.getElementById("result").innerHTML+"<h2>"+answer[i]+"</h2>";
    
    }
    
}
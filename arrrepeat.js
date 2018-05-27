function arrrepeat(){
    var array=document.getElementById("input").value;
    var obj=JSON.parse(array);
    var final=[]
    var set1=new Set();
    for(key in obj){
        final.push(obj[key])
    }
    final.sort();
    for(var i=0;i<final.length-1;i++){
        for(var j=i+1;j<final.length;j++){
            if(final[i]==final[j]){
                set1.add(final[i]);
            }
        }
    }
    function display(values)
    {
         document.getElementById("result").innerHTML= document.getElementById("result").innerHTML+"<h4>"+values+"</h4>";
    }
     // It prints value of all the element 
    // of the set
    set1.forEach(display);
    //console.log(set1.size)
   
}
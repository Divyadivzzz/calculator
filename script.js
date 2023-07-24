sum=0;
string ="";


function by_Add(){
     data1=parseInt (document.getElementById("data1").value);
    //  data2=parseInt( document.getElementById("data2").value);
    sum +=parseInt(data1);
    if(string.length==0){
        
    string+=data1;}
    else{
        string+="+"+data1;
    }
     document.getElementById("print").innerHTML= string;
     document.getElementById("result").innerHTML= sum;
     document.getElementById("data1").value='';
     
}
function by_Sub(){
    data1=parseInt (document.getElementById("data1").value);
   //  data2=parseInt( document.getElementById("data2").value);
   sum -=parseInt(data1);
   if(string.length==0){
       
   string+=data1;}
   else{
       string+="-"+data1;
   }
    document.getElementById("print").innerHTML= string;
    document.getElementById("result").innerHTML= sum;
    document.getElementById("data1").value='';
}
function by_Mul(){
    data1=parseInt (document.getElementById("data1").value);
   //  data2=parseInt( document.getElementById("data2").value);
   sum *=parseInt(data1);
   if(string.length==0){
       
   string+=data1;}
   else{
       string+="*"+data1;
   }
    document.getElementById("print").innerHTML= string;
    document.getElementById("result").innerHTML= sum;
    document.getElementById("data1").value='';
}
function by_Divi(){
    data1=parseInt (document.getElementById("data1").value);
   //  data2=parseInt( document.getElementById("data2").value);
   sum /=parseInt(data1);
   if(string.length==0){
       
   string+=data1;}
   else{
       string+="/"+data1;
   }
    document.getElementById("print").innerHTML= string;
    document.getElementById("result").innerHTML= sum;
    document.getElementById("data1").value='';
}

var admin ="";
function keyCode(event) {
var x = event.keyCode;
var num = [65,68,77,73,78];
var letter =["a","d","m","i","n"];
for(var i=0;i<=num.length;i++){
    if(x==num[i]){
        admin=admin+letter[i];
        console.log(admin);
    }
}
 
if(admin=="admin"){
window.location ="http://yoursite.com/admin/";
} 
}

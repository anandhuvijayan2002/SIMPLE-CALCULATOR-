
function addval(val){
     document.getElementById("display").value+=val
    //console.log(display)

    

}
function calculate(){
    let a=document.getElementById("display")
    a.value= eval(a.value)
}

function clearval(){
    document.getElementById("display").value="";

}
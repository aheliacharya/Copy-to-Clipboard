function myFunc(){
    var t1=document.getElementById('t1');
    t1.select();
    t1.setSelectionRange(0,1000);
    console.log(t2)
    navigator.clipboard.writeText(t1.value);
}
function display(num){
    document.getElementById('output').value += num;
}
function calculate(){
    try{
        var num=document.getElementById('output').value;
        var y=eval(num);
        document.getElementById('output').value = y;
    }
    catch(err){
        document.getElementById('output').value="error";
    }

}
function del(){
    output.value=output.value.slice(0,-1)
}
function clear(){
    document.getElementById('output').value='';
}
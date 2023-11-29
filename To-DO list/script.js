var taskinput=document.getElementById('task-input');
var tasks=document.getElementById('tasks');
var addbutton=document.getElementById('add-button');
function add(){
    if (taskinput.value===''){
        alert ('Write something')
    }
    else{
        var li=document.createElement('li');
        li.innerHTML=taskinput.value;
        tasks.appendChild(li);
        var span=document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    taskinput.value='';
    save();
}
tasks.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("check");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);
function save(){
    localStorage.setItem("data",tasks.innerHTML);
}
function show(){
    tasks.innerHTML=localStorage.getItem("data");
}
show();
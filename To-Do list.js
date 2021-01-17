let addtodobutton=document.getElementById("addtodo");
let todocontainer=document.getElementById("todocontainer");
let completedcontainer=document.getElementById("completedcontainer");
let inputfield=document.getElementById("inputfield");
let delbutton=document.createElement("button");
let delbutton2=document.createElement("button");

addtodobutton.addEventListener('click', function(){
    let paragraph=document.createElement("p");
    let paragraph2=document.createElement("p");
    paragraph.innerText=inputfield.value;
    paragraph2.innerText=inputfield.value;
    paragraph.classList.add('paragraph-styling');
    paragraph2.classList.add('paragraph-styling');
    delbutton.classList.add('delbutton');
    delbutton2.classList.add('delbutton');
    todocontainer.appendChild(paragraph);
    todocontainer.appendChild(delbutton);
    inputfield.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecorationLine="line-through";
        completedcontainer.appendChild(paragraph2);
        completedcontainer.appendChild(delbutton2);
    })
    delbutton.addEventListener("click",function(){
        todocontainer.removeChild(paragraph);
        todocontainer.removeChild(delbutton);
        completedcontainer.removeChild(paragraph2);
        completedcontainer.removeChild(delbutton2);
    })
    delbutton2.addEventListener("click",function(){
        completedcontainer.removeChild(paragraph2);
        completedcontainer.removeChild(delbutton2);
    })
})


var iconRemove='<i class="fa fa-trash-o" aria-hidden="true"></i>';
var iconComplete='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';


var addButton=document.getElementById('add');
var inputValue=document.getElementById('item')

addButton.addEventListener("click",function(){
	var value=inputValue.value;
	if(value)
{
	addItem(value);
	inputValue.value="";
}})

function removeItem(){
	var item=this.parentNode.parentNode;
	var parent=item.parentNode;
	parent.removeChild(item);
}

function compleatedItem(){
	var item=this.parentNode.parentNode;
	var parent=item.parentNode;
	var id=parent.id;

	var target=(id=="todo")? document.getElementById("completed"):document.getElementById("todo");
     

	parent.removeChild(item);
	target.insertBefore(item,target.childNodes[0]);

}

function addItem(text){
var list=document.getElementById("todo");
var item=document.createElement("LI");
item.innerText=text;
list.appendChild(item);

var buttons=document.createElement("div");
buttons.classList.add("buttons");

var remove=document.createElement("BUTTON");
remove.classList.add("remove");
remove.innerHTML=iconRemove;

remove.addEventListener("click",removeItem);

var completed = document.createElement("BUTTON");
completed.classList.add("completed");
completed.innerHTML=iconComplete;

completed.addEventListener("click",compleatedItem);

buttons.appendChild(remove);
buttons.appendChild(completed);
item.appendChild(buttons);
}
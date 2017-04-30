//check if the button exist or not if exist it will create event listener on button click
//it will trigger the function addToList
if(document.getElementById('addListBtn')){
	document.getElementById('addListBtn').addEventListener("click", addToTheList);
}
//check if the ul todoLists exist or not if exist it will create event listener on button click
//it will trigger the function removeFromList
if(document.getElementById('todoLists')){
	document.getElementById('todoLists').addEventListener("click", removeFromTheList);
}

//class todolist
function ToDoList(){

};

//get task function 
ToDoList.prototype.getTask = function(){
		return this.task;
}

//set value function for creating text in the input 
//append text in the li 
//append li in the ul
ToDoList.prototype.setValue = function(todoLi){
		//create text from the input entered
		var todoLiText = document.createTextNode(this.text);
		//add the text to the list li 
		todoLi.appendChild(todoLiText);
		//add the li tag text to the ul tag
		this.ul.appendChild(todoLi);
		// Create a "class" attribute
		var att = document.createAttribute("class");
		// Set the value of the class attribute       
		att.value = "list-group-item";                           
		// Set the attribute to the list element
		todoLi.setAttributeNode(att);
}

ToDoList.prototype.addToList = function(event){ 
	//get the elements of the form with name todoForm
	var myForm = document.forms['todoForm'];
	//get the element input with id myText with trimming the space
  	var myInput = myForm['myText'].value.trim('');
  	//get element that have id todoLists
  	var ulTodoLists = document.getElementById('todoLists');
  	//create element li with variable todoLi
  	var todoLi = document.createElement('li');
  	//create new instance of the class ToDOList 
  	//with 2 parameters passed (text,ul) = (myInput, ulTodoLists)
  	var mytask = new ToDoList();
	mytask.text = myInput;
	mytask.task = ulTodoLists.children;
	mytask.ul = ulTodoLists;
  	var task = mytask.getTask();	
  
	if(!isExist(myInput,task)){
		mytask.setValue(todoLi);
		mytask.getTask();
		myForm["myText"].value = "";
	}
}


//function to check the input and array data is exist or not
//parameter passed text, ul = myInput, task
function isExist(myInput,task){
	//flag check if the value exist
	isexist = false;
	if(myInput == ''){
		//show alert in span this field is empty
		document.getElementById("alert-span1").style.display = 'block';
       isexist = true;
	} else{
		//hide alert in span this value already exist
		document.getElementById("alert-span1").style.display = 'none';
		if(task.length > 0){
			for(var i = 0;i < task.length; i++){
				if(myInput == task[i].innerHTML.trim('')){
					isexist = true;
				}
			}
		}
		if(isexist == true){
			//show alert in span this value already exist
			document.getElementById("alert-span2").style.display = 'block';
		}
		else{
			//hide alert in span this value already exist
			document.getElementById("alert-span2").style.display = 'none';
		}	
	}
	return isexist;
}

//function that remove li from the ul 
ToDoList.prototype.removeFromList = function(event){
	//confirm dialog on removing the li 
	var request = confirm("Are you sure that you want to remove that ??"),
	// get the element id todoLists (ul) 
	ulTodoLists = document.getElementById("todoLists");
	//check if the user click ok
	if(request == true){
		//remove the li from the ulTodoLists (ul)
		ulTodoLists.removeChild(event.target);
	}
}

function removeFromTheList(){
	var removeTask = new ToDoList();
	removeTask.removeFromList(event);
}

function addToTheList(){
	var addTask = new ToDoList();
	addTask.addToList(event);
}

//function for create todo list with enter button instead of button click
function usubmit(event){
	if (event.keyCode == 13){ 
		addToList(); 
		return false; 
	}
}
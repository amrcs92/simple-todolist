if($("#addListBtn")){
	$("#addListBtn").click(addToList);
}

if($("#removeListBtn")){
	$("#removeListBtn").click(removeLiBtn);
}

if($('.list-group')){
	$(".list-group").on("click", ".list-group-item", removeListOnclick);
}

$(document).ready(function(){
	var ulTodoList = $("#todoLists");
	var myInput = $('#myText').val().trim();
	var isExist = false;

	function addToList(text,ul){
		$(this).text = text;

		$(this).task = ul.children();

		$(this).getTask = function(){
			return $(this).task;
		}

		$(this).setValue = function(toDoLi){
			todoLi= ulTodoList.append();
			// Create a "class" attribute
			$('.list-group li').attr('class', 'list-group-item');
			// Set the value of the class attribute       
			att.value = "list-group-item";                           
			// Set the attribute to the list element
			toDoLi.setAttributeNode(att);
		}
	};



	function addToList(){ 
		
		var myForm = document.forms['todoForm'];
	  	var myInput = myForm['myText'].value.trim('');
	  	var ulTodoLists = document.getElementById('todoLists');
	  	var toDoLi = document.createElement('li');
	  	var mytask = new ToDoList(myInput, ulTodoLists);
		var task = mytask.getTask();	
	  
		if(!isExist(myInput,task)){
			mytask.setValue(toDoLi);
			mytask.getTask();
			myForm["myText"].value = "";
		}
	}

	function isExist(myInput,task){
		isexist = false;
		if(myInput == ''){
			alert('this is empty');
			isexist =true;
		} else{
			if(task.length > 0){
				for(var i = 0;i < task.length; i++){
					if(myInput == task[i].innerHTML.trim('')){
						isexist = true;
					}
				}
			}
			if(isexist == true){
				alert('this value is alreay exist');
			}	
		}
		return isexist;
	}

	function removeLiBtn(event){
		var request = confirm("Are you sure that you want to remove that ??"),
		ulTodoLists = document.getElementById("todoLists");
		if(request == true){
			ulTodoLists.removeChild(event.target);
		}
	}
});
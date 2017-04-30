$(document).ready(function(){
	if($("#addListBtn")){
		$("#addListBtn").click(addToList);
	}

	if($("#removeListBtn")){
		$("#removeListBtn").click(removeLiBtn);
	}

	if($('.list-group')){
		$(".list-group").on("click", ".list-group-item", removeListOnclick);
	}

	function addToList(event){
		event.preventDefault();
		var ulTodoList = $("#todoLists");
		var myInput = $('#myText').val().trim();
		var isExist = false;
		$("li").each(function() {
			if(myInput.trim('') == $(this).text()){
			 	isExist = true;
			}
		});
		
		if(myInput == ""){
			$("#alert-span1").show();
		}else{
			if(isExist == false){
				$("#alert-span1").hide();

				ulTodoList.append('<li>' + myInput + '</li>');
				var todoLiChild = $('li:last-child');
				todoLiChild.attr('id',myInput).hide().fadeIn("slow", function(){
					$(this).fadeIn(1000);
				});		
				$('.list-group li').addClass('list-group-item');
				$('#myText').val("");
			}
		}
		if(isExist == true){
			$("#alert-span2").show();
			$("#alert-span1").hide();
		} else{
			$("#alert-span2").hide();
		}
	}

	function removeLiBtn(event){
		event.preventDefault();
		var listi = $(".list-group-item:last-child");
		confirmation(listi);
	}

	function removeListOnclick(event){
		event.preventDefault();
		var ele = $('.list-group-item:last-child');
		confirmation(ele);
	}

	function confirmation(c){
		var del = confirm("Are you sure you want to delete this ??");
		if(del == true){
			c.remove();
		}
	}

	$('#myText').keypress(function(e) {
		if(e.keyCode == 13){
			e.preventDefault();
			addToList(e);
		}
	});
});
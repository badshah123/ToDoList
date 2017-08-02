/*$(document).ready(function(){
	$('#addItem').on('click',addItem);
		$('#todos').on('change','.completeItem',completeItem);
		function addItem(){
		var newToDoText=$('#newTodo').val();
		alert(newToDoText);
		$('#todos').append('<li><input class="completeItem" type="checkbox">'+newToDoText+'<span class="glyphicon glyphicon-trash"></span></li>');
		$('#newTodo').val("");
		function deleteItem(){

		}
		function completeItem() {
			alert("mark this as done");
			$(this).parent().addClass('done');
		}
	}
});*/
$(document).ready(function() {

  $('#addItem').click(addItem);
  $('#todos').on("change", ".completeItem", toggleCompleted);
  $('#todos').on("click", ".delete", removeItem);
  $('#newTodo').on("keypress", function (e) {
    if (e.which == 13) {
      addItem();
      e.preventDefault();
    }
  });

  function addItem(event){
    var listItem = $('#newTodo').val();
    if(listItem === '')
      return;

    $('#todos').append('<li><input type = "checkbox" class = "completeItem">' + listItem + '<i class = "glyphicon glyphicon-trash delete"></i></li>');
    $('#newTodo').val('');
  }

  function removeItem(event){
    $(this).parent().remove();
  }

  function toggleCompleted(event){
    $(this).parent().toggleClass('completed')
  }

});
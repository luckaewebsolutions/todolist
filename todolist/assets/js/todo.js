
// add strikethrough effect when complete

$(document).on('click', 'li span.markAsComplete', function(){
  $(this).toggleClass('markCompleted');
  $(this).parent().toggleClass('complete');
});

// delete TODO

$(document).on('click', '.remove', function(){
  $(this).parent().remove();
});

// create new TODO

var todoList = [];

$('input[type="text"]').on('keypress', function(e){
  if (e.key == "Enter"){
    var newTodo = $(this).val();
    todoList.push(newTodo);
    $(this).val('');
    listTodo(newTodo);
  }
});

// display new TODO

function listTodo(addTodo){
  $('#theList').prepend('<li><span class="markAsComplete"><i class="fa fa-check-circle" aria-hidden="true"></i> </span>' + addTodo + ' ' + '<span class="remove"><i class="fa fa-trash" aria-hidden="true"></i></span></li>');
}

// reveal remove on hover

$(document).on('mouseover', 'li', function(){
  $(this).find('.remove').animate({opacity:1});
});

$(document).on('mouseleave', 'li', function(){
  $(this).find('.remove').animate({opacity:0});
});

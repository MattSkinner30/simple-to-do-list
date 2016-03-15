var $input = $('#list-input');
var $list = $(".list");

$('#to-do-list').on('submit', function (e) {
  var $li = $('<li>');
  
  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});

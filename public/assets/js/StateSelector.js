$(document).on('change', '.div-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});

function InitializeTable(name) {
    var target = $(name).data('target');
    var show = $("option:selected", $(name)).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
}

$(document).ready(function(){
	$('.div-toggle').trigger('change');
});
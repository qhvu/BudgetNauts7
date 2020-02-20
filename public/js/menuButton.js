

//pop up modal
document.getElementById('button').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

//remove expense item (not working)
$(document).on('click','.btn', function() {
	$(this).closest('tr').remove();
});

//nav bar animation underline
$('.nav-link').on('click', function() {
  $('.active-link').removeClass('active-link');
  $(this).addClass('active-link');
});

/*var index, table = document.getElementById('table1');
for (var i = 1; i < table.rows.length; i++){
	table.rows[i].cells[5].onclick = function(){
		var c = confirm("Delete Purchase?");
		if(c == true){
			index = this.parentElement.rowIndex;
			table.deleteRow(index);
		}
	};
}*/





function menu() {
  document.getElementById("drop").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function openSlideMenu(){
  document.getElementById('menu').style.width = '250px';
  document.getElementById('content').style.marginLeft = '250px';
}

function closesSlideMenu(){
  document.getElementById('menu').style.width = '0';
  document.getElementById('content').style.marginLeft = '0';
}


document.getElementById('button').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});





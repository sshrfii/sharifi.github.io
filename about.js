function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var link = document.querySelector('.connect2 a');
            if (link.textContent === 'LIGHT') {
                link.textContent = 'DARK';
            } else {
                element.classList.add("dark-mode");
                link.textContent = 'LIGHT';
            }
        }

        function toggleDarkMode() {
            var element = document.body;
            var link = document.querySelector('.div2 a');
        
            if (element.classList.contains("dark-mode")) {
                element.classList.remove("dark-mode");
                link.textContent = 'DARK';
            } else {
                element.classList.add("dark-mode");
                link.textContent = 'LIGHT';
            }
        }
        function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");
            var link = document.querySelector('.div2 a');
            if (link.textContent === 'LIGHT') {
                link.textContent = 'DARK';
            } else {
                link.textContent = 'LIGHT';
            }
        }
        
        var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
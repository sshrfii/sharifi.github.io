function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var link = document.querySelector('.connect a');
            if (link.textContent === 'LIGHT') {
                link.textContent = 'DARK';
            } else {
                link.textContent = 'LIGHT';
            }
        }

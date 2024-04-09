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
        
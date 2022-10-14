
const table_elem = document.querySelectorAll('td');

for (let i = 0; i < table_elem.length; i++) {
    table_elem[i].addEventListener('click', function(e) {        
        switch (i) {
            case 0: // Fear Inoculum
                window.open('\html/FearInoculum.html', '_self');  
                break;
            case 1: // Lateralus
                window.open('\html/10000Days.html', '_self');
                break;
            case 2: // 10.000 Days
                window.open('\html/Lateralus.html', '_self');
                break;
            case 3: // Opitae
                window.open('\html/Opitae.html', '_self');
                break;
        }
    });
}
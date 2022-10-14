
const element = document.querySelectorAll('.link'); // 'td' for tables, '.link' for divs

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function(e) {        
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
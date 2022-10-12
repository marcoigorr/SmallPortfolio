
const divs = document.querySelectorAll('.link');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(e) {        
        switch (i) {
            case 0: // Fear Inoculum
                window.open('https://example.com', '_blank');  
                break;
            case 1: // Lateralus
                window.open('https://example.com', '_blank');
                break;
            case 2: // 10.000 Days
                window.open('https://example.com', '_blank');
                break;
            case 3: // Opitae
                window.open('https://example.com', '_blank');
                break;
        }
    });
}
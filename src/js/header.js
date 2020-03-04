function headerStyle() {    
    window.addEventListener('scroll', function() {
        let header = document.querySelector('.header');        
        if (pageYOffset > 150) {
            addActive(header);
        }
        else {
            removeActive(header);            
        }      
            
    });
}

function addActive(header) {  
    if(!header.classList.contains('active')) {
        header.classList.add('active')
    }
}

function removeActive(header) {
    if(header.classList.contains('active')) {
        header.classList.remove('active') 
    }
    
    
}

headerStyle();
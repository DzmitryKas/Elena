function modalManager() {
    let openModal = document.querySelector('.main__btn');
    let modal = document.querySelector('.modal');
    let closeModal = document.querySelector('.btn__close');

    openModal.addEventListener( 'click', () => {
        addActive(modal)
    });

    closeModal.addEventListener( 'click', () => {
        removeActive(modal)
    });
}


function addActive(modal) {  
    if(!modal.classList.contains('active')) {
        modal.classList.add('active')
    }
}

function removeActive(modal) {
    if(modal.classList.contains('active')) {
        modal.classList.remove('active') 
    }    
}

modalManager()

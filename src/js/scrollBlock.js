function scrollBlock(hiddenElement, btn) {
    btn.addEventListener('click', function handleButtonClick(event) {
        event.preventDefault();
        hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    });
}

function scrollMain() {
    let hiddenElement = document.getElementById("js-contacts");
    let btn = document.querySelector("#contacts-link");
    scrollBlock(hiddenElement, btn)

}

function scrollContacts() {
    let hiddenElement = document.getElementById("js-main");
    let btn = document.querySelector("#main-link");
    scrollBlock(hiddenElement, btn)

}

scrollMain();
scrollContacts();
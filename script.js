function scrollToElement(elementSelector, instance = 0) {
    // Select all elemetns that match the selector
    const elements = document.querySelectorAll(elementSelector);
    // If the element exists, scroll to it
    if (elements.length > 0) {
        elements[instance].scrollIntoView({
            behavior: 'smooth'
        });
    }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');


link1.addEventListener('click', () => {
    scrollToElement('.header');
})

link2.addEventListener('click', () => {
    scrollToElement('.header',1);
})

link3.addEventListener('click', () => {
    scrollToElement('.header',2);
})

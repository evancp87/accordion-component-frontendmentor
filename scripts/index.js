const accordions = document.querySelectorAll('.accordion-item');
// const items = document.querySelectorAll('.ite')

accordions.forEach(accordion => {
accordion.addEventListener('click', (e) => {   
    e.currentTarget.classList.toggle('active');
});
});
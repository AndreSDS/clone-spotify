window.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.toggle-icon');
    const overlay = document.querySelector('div.overlay');
    const navigation = document.querySelector('.navigation');
    const toggleIcon = document.querySelector('.fa-bars');

    button.addEventListener('click', ()=>{
        overlay.classList.toggle('hide');
        toggleIcon.classList.toggle('fa-times');
        navigation.classList.toggle('hide');
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.toggle-icon');
    
    button.addEventListener('click', ()=>{
        console.log(document.querySelector('.overlay').classList.add('hide-show'))
    });
});
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const span = document.querySelector('span');

button.addEventListener('click', function() {
    
    span.textContent = /@/.test(input.value) ? 'Da' : 'Net';
})
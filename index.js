const updateLearn = document.getElementById('btn');
const updateText = document.getElementById("learn");

updateLearn.addEventListener('click', function handleClick() {
    updateLearn.innerHTML = 'Updated';
    updateText.innerHTML = 'I am currently learning Javascript';
    
})

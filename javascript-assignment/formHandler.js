const form=document.getElementById('contactForm');
const nameInput=document.getElementById('nameInput');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const name=nameInput.value.trim();

    alert(`Your name is ${name}`);
})
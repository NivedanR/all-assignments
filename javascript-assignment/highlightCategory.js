const currentCategory='Food';

const categories=document.querySelectorAll('.category');

categories.forEach((category)=>{
    category.style.fontWeight = 'normal';
    if(currentCategory===category.textContent.trim()){
        category.style.fontWeight = 'bold';
    }
})
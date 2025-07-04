const button=document.getElementById('getJoke');
const container=document.getElementById('jokeContainer');

button.addEventListener('click',()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>{
        if(!response){
            throw new Error('No response from the api');
        }
        return response.json();
    })
    .then(data=>{
        container.textContent=data.value;
    })
    .catch(error=>{
        container.textContent='No data fetched';
        console.error("Error",error);
    });
})
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', ()=>{
    console.log(xhr.response);    
});
xhr.open('GET', 'https://juktoshop.com/api/v1/app-home');
xhr.send();
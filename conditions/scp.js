//single element
 const form =document.getElementById('my-form');
console.log(form);
const adduser=document.querySelector('.user');
console.log(adduser);
const but = document.querySelector('.bn');
but.style.background = 'red';
but.addEventListener('click' , (e) =>{
    e.preventDefault();
    document.querySelector('#myform').style.background = '#ccc';
});
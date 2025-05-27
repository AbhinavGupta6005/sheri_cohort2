// 1. Local Storage
// 2. Session Storage
// 3.  Cookies

// 4. Window Object
// 5. Child Node


// location.href se kisi bhi website pr ja skte hai

// var btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     location.href = 'https://sheryians.com/'
// })


var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')

btn1.addEventListener('click', function(){
    history.back;
})

btn2.addEventListener('click',function(){
    console.log('forword btn clicked');
})
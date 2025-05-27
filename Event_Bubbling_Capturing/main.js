// var arr = [10,20,30,40,50]

// var arr = ['harsh', 'Sarthak', 'Archit']

// arr.forEach(function(elem,idx){
//     console.log(elem,idx)
// })

// for(let a = 1; a<=arr.length; a++){
//     console.log(a);
// }


// Array Of Object

var obj = [
    {
        username: 'Abhinav Gupta',
        age: 22,
        married : false,
        istatus: Stranger,
        image:'https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },{
        username:'Heera Beta',
        age: 30,
        married: true,
        istatus: Stranger,
        image: 'https://images.unsplash.com/photo-1657558045738-21507cf53606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },{
        username: 'Bhanu Prashad',
        age: 35,
        married: false,
        istatus: Stranger,
        image: 'https://images.unsplash.com/photo-1636572481914-a07d36917486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

// console.log(abj);        // All Object accecs
// console.log(obj[1]);     // which index value is 1 than show the all index of 1


// console.log(obj[2].age);    // at the index value is 2 acces age


// obj.forEach(function(elem){
//     console.log(elem.username);
// })

// Sum of all age
// var ageSum = 0
// obj.forEach(function(elem){
//     ageSum += elem.age
// })
// console.log('the sum of the ages:- ' + ageSum);


// make a program to add age of all people

// var obj = [10, 20, 30, 40]
// var sum = 0

// obj.forEach(function(elem){
//     sum += elem
// })
// console.log(sum);


// project 1

var main = document.querySelector('#main')
var sum = ''
function heroFunction(){
    var sum = ''
    obj.forEach(function(elem,idx){
        sum += `<div class="card">
        <img src="${elem.image}" alt=""
        <h1>${elem.username}, ${elem.age}</h1>
        <h4>Maried: ${elem.married}</h4>
        <h5>${elem.istatus}</h5>
        <button id=${idx}>Add Friend</button>
        </div>
        `
    })
    main.innerHTML = sum
}

heroFunction()
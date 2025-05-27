//✅1. Task:-  Create a function order food that return a Promise it should resolve after 2 second with "Pizza Delivered"
//Bonus:- Add a chance to reject with Delivery Boy

// function orderfood(){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             let chance = Math.random() < 0.7
//             if(chance) res();
//             else rej()
//         },2000)
//     })
// }

// orderfood()
// .then(function(){
//     console.log("Pizza Delivered")
// })
// .catch(function(){
//     console.log("Pizza Not Delivered!!")
// })



//✅2. Chained Promise user => Posts => comment
// Task:- Create getUser() => resolve with (id:1, name:"abhinav")
//        getPosts(userId) => resolved with list of post title
//        getComment(PostId) => resolved with comment
// Chain them together using .then() and rej the final output

// function getUser() {
//     return new Promise((res, rej) => {
//         setTimeout(function(){
//             res({ id: 3, name: "Abhinav" });
//         },1000)
//     });
// }

// function getPosts(userId) {
//     return new Promise((res, rej) => {
//         setTimeout(function(){
//             res(["Title 1", "Tilte 2"])
//         }, 1000)
//     })
// }

// function getComment(PostId){
//     return new Promise((res, rej) => {
//         setTimeout(function(){
//             res(["Great Post", "Amazing Content", "You are Rocked"])
//         }, 1000)
//     })
// }

// getUser()
// .then(function (data) {
//     console.log(data)
//     return getPosts(data.id)
// })
// .then(function(title){
//     console.log(title)
//     return getComment("jhhgyug")
// })
// .then(function(cmts){
//     console.log(cmts)
// })
// .finally(function(){
//     console.log("All Data Resolved")
// })




//✅ 3. Fake API Delay

// Task: 
// Write a function fakeApiCall(endpoint) that:
// . Accepts a string like "User" or "post"
// . Resolves with some dummy after a random delay (1-3 sec)

function fakeApiCall(endpoint){
    const data = {
        users : ["HArsh", "Shivam", "Raghav"],
        posts : ["hey champ","great going everyone", "lets build this"],
    }
    let delay = Math.random() *  2000+1000

    return new Promise(function(res,rej){
        setTimeout(function(){
            console.log(data[endpoint])
        },delay)
    })
}

fakeApiCall("users")
.then(function(data){
    console.log(data)
})
fakeApiCall("posts")
.then(function(data){
    console.log(data)
})


function fetchUserProfile(username){
    return fetch(`https://api.github.com/users/${username}/repos`).then((raw) => raw.json());
}

fetchUserProfile("asynchronousJavascriptor")
.then(function(data){
    console.log(data)
})
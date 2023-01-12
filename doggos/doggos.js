const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

fetch(BREEDS_URL)
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data);
})

console.log("which will log first");
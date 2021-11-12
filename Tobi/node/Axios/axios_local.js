//https://axios-http.com/docs/example
const axios_local = require('axios');

// Make a request for a user with a given ID
axios_local.get('/user?ID=12345')
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error)
    })
    .then(function (){

    });

// Optionally the request above could also be done as
axios_local.get('/user', {
    params: {
        ID: 12345
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
        const response = await axios_local.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
//Example by https://medium.com/dsc-srm/javascript-callback-hell-or-pyramid-of-doom-4f786d14b997

function calculateSumAfter2Sec(a, b, callback) {
    // setTimeout is a function in js that calls the inner function after delay given
    // this will create a delay of 2000ms and then call the callback with the result
    // it will ultimately pass the result by calling that function with result
    setTimeout(function () {
        let result = a + b;
        callback(result)
    }, 2000)
}
// one way to use it by passing anonymous function as callback parameter to the above function
calculateSumAfter2Sec(2, 3, function (result) {
    console.log("sum is = " + result)
})
// other way to create a function seperately
function print(a){
    console.log(a);
}
calculateSumAfter2Sec(2, 3, print);
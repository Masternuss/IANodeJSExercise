//example by: https://medium.com/dsc-srm/javascript-callback-hell-or-pyramid-of-doom-4f786d14b997

function calculateSumAfter25sec(a,b,callback){

    setTimeout(function()
    {
        let result = a+b;
        callback(result);
    },2000);
}

calculateSumAfter25sec(2,3,
    function(result) {
    console.log("sum is - " + result);
})

function print(a){
    console.log(a);
}

calculateSumAfter25sec(2,3,print);
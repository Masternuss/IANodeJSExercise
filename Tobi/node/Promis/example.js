//Exampler by: https://javascript.info/promise-basics
function loadScript(src){
    return new Promise(function(resolve,reject){

        let script = document.createElement('script');
        script.src = src;

        script.onload=() =>resolve(script);
        script.onerror=()=>reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
    script => allert(`${script.src} ist loaded!`),
    error=>allert(`Error: ${error.message}`)

);

promise.then(script => alert('Another handler...'));
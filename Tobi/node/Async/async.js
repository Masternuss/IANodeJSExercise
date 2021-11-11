//Normal Function
function hello() { return "Hello" };
console.log(`Normal Function: ${hello()}`);
//===================
//Async Function  geben immer ein Promise Object zurück
async function hello2() { return "Hello" };
console.log(`Async Function: ${hello2()}`);
//------------------
let hello3 = async function() { return "Hello" };
console.log(`Async Function: ${hello3()}`)

//Await funktioniert nur in der Sync function
// hält befehl in der Zeile an bis die Promis bedingung erfüllt wurden ist.
async function hello4() {
    return await Promise.resolve("Hello");
};

hello4().then(alert);
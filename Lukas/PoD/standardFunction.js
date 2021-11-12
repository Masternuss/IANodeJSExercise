function identity(parameter) {
    return parameter;
}
const identityVar = identity("identity");
console.log(identityVar);

function pyramidofadd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
const add3 = pyramidofadd(1)(2)(3);
console.log(add3);

function localVarScope() {
    let a = "hello";
    return function () {
        a = "World";
        return a;
    }
}

console.log(localVarScope());